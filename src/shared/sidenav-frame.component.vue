<template>
<md-sidenav class="md-left md-fixed" ref="sidenav">
  <!-- Show user profile -->
  <md-toolbar v-if="$store.state.authenticated">
    <profile></profile>
  </md-toolbar>

  <!-- Inject contents relevant to the current page -->
  <slot></slot>

  <!-- Show signin/signout button -->
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

  mounted() {
    // Close sidenav when user clicks a link and page navigates
    this.$store.state.router.beforeEach((to, from, next) => {
      if (this.$refs.sidenav && this.$refs.sidenav.mdVisible) this.$refs.sidenav.close();
      next();
    });
  },
};
</script>
