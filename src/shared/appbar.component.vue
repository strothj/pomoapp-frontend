<template>
<!-- Show box shadow when appbar is not transparent -->
<md-whiteframe :class="styles.whiteframe" :md-elevation="styles.elevation" md-tag="nav">

  <!-- Use alternate theme when transparent so text is white -->
  <md-theme :md-name="styles.theme">
    <md-toolbar :class="styles.toolbar">
      <md-button
        class="appbar__menu md-icon-button"
        @click="$emit('onMenuClicked')">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="appbar__title md-title">Pomoapp</h2>

      <md-button
        v-if="$route.name === 'Landing'"
        class="appbar__github md-icon-button"
        href="https://github.com/strothj/pomoapp-backend">
          <md-icon md-src="static/github-circle.svg"></md-icon>
          <md-tooltip>See source code on Github</md-tooltip>
      </md-button>

      <!-- Show signin/signout buttons if not signed in -->
      <md-button
        class="appbar__account-button"
        v-if="!$store.state.authenticated"
        @click="$router.push({ path: '/signin' })">Sign in</md-button>
      <md-button
        v-if="!$store.state.authenticated"
        :class="styles.signup"
        @click="$router.push({ path: '/signup' })">Sign up</md-button>

      <!-- Show profile menu if signed in -->
      <md-menu
        class="appbar__profile"
        v-if="$store.state.authenticated"
        md-align-trigger>
          <md-button md-menu-trigger>
            <span>{{ $store.state.profile.name }}</span>
            <md-icon>arrow_drop_down</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item
              @click="$store.dispatch('SIGN_OUT')">
              <md-icon>exit_to_app</md-icon>
              <span>Sign out<span>
            </md-menu-item>
          </md-menu-content>
      </md-menu>

    </md-toolbar>
  </md-theme>

</md-whiteframe>
</template>

<script>
// Normal style with primary background color and box shadow.
const stylesStandard = {
  whiteframe: ['appbar md-toolbar md-theme-default'],
  elevation: 4,
  theme: 'default',
  toolbar: ['appbar__toolbar container'],
  signup: ['appbar__account-button', 'md-raised'],
};

// Transparent background and no shadow for use on top of landing page.
const stylesTransparent = {
  whiteframe: ['appbar md-toolbar'],
  elevation: 0,
  theme: 'transparent',
  toolbar: ['appbar__toolbar container', 'md-transparent'],
  signup: ['appbar__account-button'],
};

export default {
  props: {
    transparent: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    styles() { return this.transparent ? stylesTransparent : stylesStandard; },
  },
};
</script>

<style lang="less">
@import "../assets/keylines.less";

.appbar {
  width: 100%;

  &__menu {
    .not-mobile({ display: none; });
  }

  &__title {
    flex: 1;
    font-weight: 100 !important;
    .mobile({ display: none; });
  }

  &__github {
    margin-top: -8px !important;
    .mobile({
      position: absolute;
      top: 16px;
      right: 0;
    });
  }

  &__account-button {
    letter-spacing: .15em;
    font-weight: 100;
    .mobile({ display: none; });
  }

  &__profile {
    .mobile({ display: none; });
  }

  &__toolbar {
    // Flex vertical alignment requires height be set in IE 11.
    height: 64px;
  }
}
</style>
