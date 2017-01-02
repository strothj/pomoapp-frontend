<template>
<md-layout md-gutter>
  <md-layout md-hide-xsmall></md-layout>
  <md-layout>

    <md-card class="clock-card md-primary">
      <md-card-header>
        <md-button class="md-icon-button" @click="onBackClicked"><md-icon>arrow_back</md-icon></md-button>

        <md-card-header-text>
          <div class="md-title">{{ selectedTaskName }}</div>
          <div class="md-subhead">{{ selectedProjectName }}</div>
        </md-card-header-text>
      </md-card-header>

      <!--
      <md-card-media>
        <div id="clock"></div>
        <span>Placeholder</span>
      </md-card-media>
      -->
      <md-card-content style="flex: 1">
        <p class="md-headline">{{ clock.timeRemaining }}</p>
        <p class="md-subheading">{{ clock.message }}</p>
      </md-card-content>

      <md-card-actions>
        <span class="clock-card__cycle">
          <md-icon>refresh</md-icon>
          {{ clock.currentCycle + 1 }} / {{ clock.settings.workCycles }}
        </span>
        <md-button disabled>Switch Task</md-button>
        <md-button @click="onStartClicked">{{ clock.startButtonText }}</md-button>
        <md-button @click="onDoneClicked">Done</md-button>
      </md-card-actions>

    </md-card>

  </md-layout>
  <md-layout md-hide-xsmall></md-layout>
</md-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    ...mapGetters([
      'selectedTaskName',
      'selectedProjectName',
    ]),
    ...mapState({
      clock: state => state.clock.clock,
    }),
  },

  methods: {
    navigateToProjectsList() {
      this.$router.push(`/projects/${this.$route.params.projectId}`);
    },
    onStartClicked() { this.$store.dispatch('CLOCK_START_CLICKED'); },
    onBackClicked() {
      this.navigateToProjectsList();
    },
    onDoneClicked() {
      this.$store.dispatch('CLOCK_DONE_CLICKED', { taskId: this.$route.params.taskId });
      this.navigateToProjectsList();
    },
  },

  beforeRouteLeave(to, from, next) {
    this.clock.pause();
    next();
  },
};
</script>

<style lang="less">
.clock-card {
  width: 100vw;
  height: 100vh;

  @media only screen and (min-width: 600px) and (min-height: 420px) {
    width: 600px;
    height: 600px;
    margin-top: 50px;
  }

  &__cycle {
    flex: 1;
    padding-left: 16px;

    // Move cycle count up a line on thin display
    position: fixed;
    bottom: 48px;
    left: 4px;

    @media only screen and (min-width: 400px) {
      position: inherit;
      bottom: inherit;
      left: inherit;
    }
  }
}
</style>
