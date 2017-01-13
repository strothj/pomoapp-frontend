<template>
<div>
  <md-whiteframe class="appbar" md-tag="nav" md-elevation="4">
    <md-toolbar class="appbar__toolbar">

      <!-- Start appbar contents -->
      <div class="appbar__contents">

        <md-button class="appbar__menu-button" @click="onMenuClicked">
          <md-icon>menu</md-icon>
        </md-button>

        <router-link class="appbar__title md-title" tag="h2" :to="homePath">
          <img src="./site-logo.png" alt="Pomoapp Logo">
        </router-link>
        <div class="appbar__spacer"></div>

        <router-link v-if="!authenticated" class="appbar__login-button" tag="md-button" to="/signin">Sign in</router-link>
        <router-link v-if="!authenticated" class="appbar__login-button md-raised" tag="md-button" to="/signup">Sign up</router-link>

        <profile class="appbar__profile" v-if="authenticated"></profile>

      </div>
      <!-- End appbar contents -->

    </md-toolbar>
  </md-whiteframe>

  <sidenav-frame ref="sidenav">
    <slot></slot>
  </sidenav-frame>
</div>
</template>

<script>
import Profile from './profile.component';
import SidenavFrame from './sidenav-frame.component';

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

    onMenuClicked() {
      this.$refs.sidenav.toggle();
    },
  },

  components: {
    Profile,
    SidenavFrame,
  },
};
</script>

<style lang="less">
@import "../assets/layout.less";

.appbar {
  // IE 11 Fix
  &__toolbar {
    height: 64px;
  }

  &__contents {
    display: flex;
    .centered-content();
  }

  &__title {
    cursor: pointer;

    img {
      height: 48px;
    }
  }

  &__spacer {
    flex: 1;
  }

  .mobile({
    &__title, &__login-button, &__profile {
      display: none;
    }
  });

  .not-mobile({
    &__menu-button { display: none; }
  });
}
</style>
