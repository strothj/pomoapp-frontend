<template>
<md-layout md-gutter>
  <md-layout md-hide-xsmall></md-layout>
  <md-layout>

    <md-card class="clock-card md-primary">
      <md-card-header>
        <md-button class="md-icon-button"><md-icon>arrow_back</md-icon></md-button>

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
        <p class="md-headline">{{ clockState.timeRemaining }}</p>
        <p class="md-subheading">{{ clockMessage }}</p>
      </md-card-content>

      <md-card-actions>
        <md-button>Switch Task</md-button>
        <md-button>{{ clockStartButtonText }}</md-button>
        <md-button>Done</md-button>
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
      'clockStartButtonText',
      'clockMessage',
      'selectedTaskName',
      'selectedProjectName',
    ]),
    ...mapState({
      clockState: state => state.clock,
    }),
  },

  methods: {
  },
};
</script>

<style lang="less">
.clock-card {
  width: 100vw;
  height: 100vh;

  @media only screen and (min-width: 600px) {
    width: 600px;
    height: 600px;
    margin-top: 50px;
  }
}
</style>
