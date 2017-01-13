<template>
<md-layout md-gutter>
  <md-layout md-hide-xsmall></md-layout><!-- Spacer -->
  <md-layout>

    <md-card class="clock-card md-primary">
      <md-card-header>
        <md-button class="clock-card__back-button md-icon-button" @click="onBackClicked"><md-icon>arrow_back</md-icon></md-button>

        <md-card-header-text>
          <div class="md-title">{{ selectedTaskName }}</div>
          <div class="md-subhead">{{ selectedProjectName }}</div>
        </md-card-header-text>
      </md-card-header>

      <!-- Clock face, rendered by 'progressbar.js' -->
      <md-card-media style="flex: 1; display: inline-flex" id="clock">
      </md-card-media>

      <md-card-actions>
        <span class="clock-card__cycle">
          <md-button class="md-icon-button" @click="onResetCycleClicked">
            <md-icon>refresh</md-icon>
            <md-tooltip>Reset clock</md-tooltip>
          </md-button>
          {{ clock.currentCycle + 1 }} / {{ clock.settings.workCycles }}
        </span>
        <md-button @click="onSwitchTaskClicked" id="switchTaskButton">Switch Task</md-button>
        <md-button @click="onStartClicked">{{ clock.state === '' ? 'Pause' : 'Start' }}</md-button>
        <md-button @click="onDoneClicked">Done</md-button>
      </md-card-actions>

    </md-card>

  </md-layout>
  <md-layout md-hide-xsmall></md-layout><!-- Spacer -->

  <!-- Start switch task dialog -->
  <md-dialog
    md-open-from="#switchTaskButton"
    md-close-to="#switchTaskButton"
    ref="switchTaskDialog">
    <md-dialog-title>Switch task</md-dialog-title>

    <md-dialog-content>
      <md-list>
        <md-list-item v-for="task in tasks" @click="navigateToTask(task)">
          <span>{{ task.name }}</span>
        </md-list-item>
      </md-list>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="onCloseSwitchTaskDialogClicked">Cancel</md-button>
    </md-dialog-actions>
  </md-dialog>
  <!-- End switch task dialog -->
</md-layout>
</template>

<script>
import { Circle } from 'progressbar.js';
import padStart from 'lodash.padstart';

export default {
  props: [],

  data() {
    return {
      progressCircle: null,
    };
  },

  mounted() {
    this.progressCircle = new Circle('#clock', {
      color: '#448AFF', // Blue progress bar color.
      svgStyle: {
        width: '100%',
        height: '100%',
        padding: '10px',
      },
      fill: '#263238', // Darker background shade.

      // Style inner timer text.
      text: {
        value: this.clockText, // eslint-disable-line

        style: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: { prefix: true, value: 'translate(-50%, -50%)' },
          'text-align': 'center',
        },
      },
    });
  },

  computed: {
    clock() {
      return this.$store.state.clock.clock;
    },

    selectedProject() {
      const projects = this.$store.state.projects.projects;
      return projects.find(item => item.id === this.$route.params.projectId);
    },

    selectedProjectName() {
      return this.selectedProject.name;
    },

    selectedTask() {
      return this.$store.state.projects.tasks.find(item => item.id === this.$route.params.taskId);
    },

    selectedTaskName() {
      return this.selectedTask.name;
    },

    tasks() {
      return this.$store.state.projects.tasks
        .filter(item => item.projectId === this.selectedProject.id)
        .filter(item => !item.archived);
    },

    // Calculate the progress as a percentage
    progress() {
      let taskDuration;
      switch (this.clock.stage) {
        case 'Work': taskDuration = this.clock.settings.workDuration; break;
        case 'Break': taskDuration = this.clock.settings.breakDuration; break;
        default: taskDuration = this.clock.settings.longBreakDuration; break;
      }
      const percent = 1 - (this.clock.timeRemaining / taskDuration);
      return percent;
    },

    // Display the current clock status and time remaining.
    clockText() {
      const minutes = padStart(Math.floor(this.clock.timeRemaining / 60), 2, '0');
      const seconds = padStart(this.clock.timeRemaining % 60, 2, '0');
      const timeRemaining = `${minutes}:${seconds}`;
      return `<div class="md-display-2">${this.clock.stage}</div>
<div class="md-display-1">${timeRemaining}</div>
<div class="md-subheading">${this.clock.state}</div>`;
    },
  },

  watch: {
    progress(progress) {
      if (progress === 0) {
        this.progressCircle.set(progress);
        return;
      }
      this.progressCircle.animate(progress);
    },

    clockText(text) {
      this.progressCircle.setText(text);
    },
  },

  methods: {
    onResetCycleClicked() {
      this.clock.reset();
    },

    navigateToProjectsList() {
      this.$router.push(`/projects/${this.$route.params.projectId}`);
    },

    onStartClicked() {
      if (this.clock.state === '') {
        this.clock.pause();
        return;
      }
      this.clock.start();
    },

    onBackClicked() {
      this.navigateToProjectsList();
    },

    onDoneClicked() {
      this.$store.dispatch('CLOCK_DONE_CLICKED', { taskId: this.$route.params.taskId });
      this.navigateToProjectsList();
    },

    onSwitchTaskClicked() {
      this.$refs.switchTaskDialog.open();
    },

    onCloseSwitchTaskDialogClicked() {
      this.$refs.switchTaskDialog.close();
    },

    navigateToTask(task) {
      this.$refs.switchTaskDialog.close();
      this.$router.push(`/projects/${this.$route.params.projectId}/${task.id}`);
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
  margin-top: -64px;
  width: 100vw;
  height: 100vh;

  button i {
    color: white !important;
  }

  &__back-button {
    margin-right: 15px !important;
    margin-top: 10px !important;
  }

  & .progressbar-text div {
    color: #8E979B !important;
  }

  @media only screen and (min-width: 600px) and (min-height: 420px) {
    width: 600px;
    height: 600px;
    margin-top: 50px;
  }

  &__cycle {
    flex: 1;
    padding-left: 16px;
    line-height: 44px;

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
