<template>
<md-sidenav class="md-left md-fixed" ref="sidenav">
  <md-toolbar v-if="$store.state.authenticated">
    <profile></profile>
  </md-toolbar>

  <slot></slot>

  <md-list>
    <md-list-item v-if="$store.state.authenticated" @click="$store.dispatch('SIGN_OUT')">
      <md-icon>exit_to_app</md-icon>
      <span>Sign off</span>
    </md-list-item>
    <md-list-item
      v-else
      @click="$store.state.router.push('/signin')">
      <md-icon>account_box</md-icon>
      <span>Sign in</span>
    </md-list-item>
  </md-list>
</md-sidenav>
</template>

<script>
import Profile from './profile.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
  },

  methods: {
    toggle() {
      this.$refs.sidenav.toggle();
    },
  },

  components: {
    Profile,
  },
};
</script>
