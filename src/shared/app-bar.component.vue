<template>
<md-whiteframe class="appbar" md-elevation="4" md-tag="nav">
  <div class="centered-content">
    <md-toolbar>
      <md-button class="appbar__menu-button">
        <md-icon>menu</md-icon>
      </md-button>

      <router-link tag="h2" class="appbar__title md-title" :to="homePath" style="cursor: pointer">
        <img src="./site-logo.png" alt="Pomoapp Logo" style="height: 48px">
      </router-link>
      <div class="appbar__spacer"></div>

      <router-link v-if="!authenticated" class="appbar__login-button" tag="md-button" to="/signin">Sign in</router-link>
      <router-link v-if="!authenticated" class="appbar__login-button md-raised" tag="md-button" to="/signup">Sign up</router-link>

      <md-button v-if="authenticated" class="appbar__signout-button" @click="signOut">
        <md-icon>exit_to_app</md-icon>
        <md-tooltip>Sign out</md-tooltip>
      </md-button>

    </md-toolbar>
  </div>
</md-whiteframe>
</template>

<script>
export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    authenticated() { return this.$store.state.authenticated; },

    homePath() {
      return this.$store.state.authenticated ? '/projects' : '/';
    },
  },

  methods: {
    signOut() {
      this.$store.dispatch('SIGN_OUT');
    },
  },
};
</script>

<style lang="less">
@import "../assets/layout.less";

@blue-grey-800: #37474F;
@blue-grey-900: #263238; // darker shade

.appbar {
  background-color: @blue-grey-800;
  width: 100%;
  position: fixed;

  & &__title {
    margin-left: 8px;
  }

  &__spacer {
    flex: 1;
  }

  &__title, &__login-button {
    display: none;
  }

  .not-mobile({
    &__title, &__login-button {
      display: block;
    }

    &__menu-button {
      display: none;
    }
  });

  &__signout-button {
    .mobile({
      display: none;
    });
  }
}
</style>
