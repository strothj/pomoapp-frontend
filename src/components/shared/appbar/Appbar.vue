<template>
  <md-whiteframe>
    <md-toolbar :class="toolbarClasses" class="container">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">pomoapp</h2>

      <md-button class="md-icon-button">
        <md-icon md-src="static/github-circle.svg"></md-icon>
        <md-tooltip>Test</md-tooltip>
      </md-button>

      <md-button>Sign in</md-button>
      <md-button>Sign up</md-button>
    </md-toolbar>
  </md-whiteframe>
</template>

<script>
export default {
  props: ['transparent', 'dense'],

  data() {
    return {
    };
  },

  computed: {
    toolbarClasses() {
      return {
        'md-dense': this.dense,
        'md-transparent': this.transparent,
      };
    },
  },

  methods: {
  },
};
</script>
