<template>
<div class="pomodoro-container">
  <header class="pomodoro-container__appbar">
    <md-whiteframe md-elevation="1">
      <md-toolbar>
        <md-button class="md-icon-button" @click="leavePomodoro">
          <md-icon>arrow_back</md-icon>
        </md-button>
        <span class="md-title">{{ selectedTaskName }}</span>

        <!-- TODO: Use reusable components -->
        <!-- TODO: Add profile menu -->
      </md-toolbar>
    </md-whiteframe>

  </header>
  <main class="pomodoro-container__main pomodoro-main">
    <div class="pomodoro-main__clock-container clock-container">
      <clock class="clock-container__clock"></clock>
    </div>
  </main>


  <!--
  <md-whiteframe class="pomodoro-frame" md-elevation="5">

    <div class="pomodoro-frame__task">
      <span class="md-subheading">{{ selectedTaskName }}</span>
    </div>

    <clock class="pomodoro-frame__clock"></clock>

  </md-whiteframe>
  -->
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Clock from './Clock';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    ...mapGetters([
      'selectedProject',
      'selectedProjectName',
      'selectedTaskName',
    ]),
  },

  methods: {
    leavePomodoro() {
      this.$router.push(`/projects/${this.selectedProject}`);
    },
  },

  components: {
    Clock,
  },
};
</script>

<style lang="less">
@import '../assets/css/keylines.less';

.pomodoro-container {
  &__appbar {
    position: fixed;
    width: 100%;
  }

  &__main {
    width: 100%;
    height: 100vh;
    padding-top: @navbar-height + 20;
    position: relative;
    // text-align: center;
    .large-screen({
      max-width: @breakpoint-large-screen;
      margin: 0 auto;
    });
  }
}

.clock-container {
  height: 0;
  position: relative;
  height: 80%;
  padding-bottom: 25%;
  // margin: 0 auto;
}
</style>
