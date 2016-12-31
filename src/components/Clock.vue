<template>
<md-card class="md-primary">
  <md-card-area>
    <md-card-content>
      <div id="timer"></div>
    </md-card-content>

  </md-card-area>

    <md-card-header>
      <div class="md-title">{{ selectedProjectName }}</div>
    </md-card-header>
</md-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { Circle } from 'progressbar.js';

export default {
  props: [],

  data() {
    return {
      progressCircle: null,
    };
  },

  computed: {
    ...mapGetters(['selectedProjectName']),
  },

  methods: {
  },

  mounted() {
    this.progressCircle = new Circle('#timer', {
      text: {
        value: 'test',
      },
    });
    this.progressCircle.animate(1, {
      duration: 800,
    });
  },

};
</script>

<style lang="less">
#timer {
  // height: 200px;
}
</style>
