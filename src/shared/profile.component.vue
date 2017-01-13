<template>
<md-menu md-align-trigger ref="menu">
  <md-button md-menu-trigger>
    <span>{{ profileName }}</span>
    <md-icon>arrow_drop_down</md-icon>
  </md-button>

  <md-menu-content @blur.native.capture="onMenuLostFocus" ref="menuContent">
    <md-menu-item @click="$store.dispatch('SIGN_OUT')">Sign off</md-menu-item>
  </md-menu-content>
</md-menu>
</template>

<script>

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    profileName() {
      if (!this.$store.state.profile) return '';
      return this.$store.state.profile.name || '';
    },
  },

  methods: {
    onMenuLostFocus() {
      // // Close menu on lost focus so clicks outside of sidenav properly close the
      // // popup menu.
      // this.$refs.menu.close();
      if (this.$refs.menuContent.$el.classList.contains('md-active')) {
        this.$refs.menu.close();
      }
    },
  },
};
</script>
