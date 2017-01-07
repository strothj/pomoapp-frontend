<template>
<div>
  <!-- Start appbar section -->
  <md-whiteframe class="appbar" md-elevation="4" md-tag="nav">
    <div class="centered-content">
      <md-toolbar>
        <md-button class="appbar__menu-button">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="appbar__title md-title">Pomoapp</h2>

        <router-link class="appbar__login-button" tag="md-button" to="/signin">Sign in</router-link>
        <router-link class="appbar__login-button md-raised" tag="md-button" to="/signup">Sign up</router-link>
      </md-toolbar>
    </div>
  </md-whiteframe>
  <!-- End appbar section -->

  <!-- Start call to action section -->
  <div class="cta-section">
    <div class="page-content">
      <md-layout md-gutter="24">
        <md-layout md-flex="5" md-hide-xsmall md-hide-small></md-layout>
        <md-layout md-tag="article" md-flex="50" md-flex-xsmall="100">
          <p class="md-display-3">It's time to get productive.</p>
          <p class="md-body-1">Productivity management made simple using a proven time management technique.</p>
        </md-layout>

        <!-- Start signup box -->
        <md-layout class="cta-section__signup-box">
          <signup-box></signup-box>
        </md-layout>
        <!-- End signup box -->

        <md-layout md-flex="15" md-hide-xsmall md-hide-small></md-layout>
      </md-layout>
    </div>
  </div>
  <!-- End call to action section -->

</div>
</template>

<script>
import SignupBoxComponent from '../accounts/signup-box.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
  },

  methods: {
  },

  components: {
    SignupBox: SignupBoxComponent,
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
}

.cta-section {
  padding-top: 64px;
  min-height: 500px;

  &__signup-box {
    margin-top: 60px;
  }
}

.signin-dialog {
  &__google-button {
    margin-left: 0;
    width: 100%;
  }
}
</style>
