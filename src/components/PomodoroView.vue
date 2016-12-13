<template>
<div>
  <div class="vertical-padding"></div>
  <md-whiteframe class="pomodoro-frame" md-elevation="5">

    <div class="pomodoro-frame__task">
      <span class="md-subheading">{{ selectedTaskName }}</span>
    </div>

    <clock class="pomodoro-frame__clock"></clock>

  </md-whiteframe>
</div>
</template>

<script>
import Clock from './Clock';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    selectedTaskName() { return this.$store.getters.selectedTaskName; },

    selectedProjectName() { return this.$store.getters.selectedProjectName; },
  },

  methods: {
  },

  components: {
    Clock,
  },
};
</script>
