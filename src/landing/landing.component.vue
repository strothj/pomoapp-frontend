<template>
<div>
  <md-dialog-alert
    :md-content="signupError"
    ref="signupError"></md-dialog-alert>

  <!-- Start appbar section -->
  <md-whiteframe class="appbar" md-elevation="4" md-tag="nav">
    <div class="centered-content">
      <md-toolbar>
        <md-button class="appbar__menu-button">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="appbar__title md-title">Pomoapp</h2>

        <md-button class="appbar__login-button">Sign In</md-button>
        <md-button class="appbar__login-button md-raised">Sign Up</md-button>
      </md-toolbar>
    </div>
  </md-whiteframe>
  <!-- End appbar section -->

  <!-- Start call to action section -->
  <div class="cta-section">
    <div class="page-content">
      <md-layout md-gutter="24">
        <md-layout md-flex="5"></md-layout>
        <md-layout md-tag="article" md-flex="50">
          <p class="md-display-3">It's time to get productive.</p>
          <p class="md-body-1">Productivity management made simple using a proven time management technique.</p>
        </md-layout>

        <!-- Start signup box -->
        <md-layout>
          <form @submit.prevent="onSignupSubmit">
            <div class="md-title">Sign Up</div>
            <md-input-container>
              <label>Email address</label>
              <md-input v-model="signupEmail" type="email"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Password</label>
              <md-input v-model="signupPassword" type="password"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary md-dense" type="submit">Create an account</md-button>
            <md-button class="md-raised md-dense">Sign in with Google</md-button>
          </form>
        </md-layout>
        <!-- End signup box -->

        <md-layout md-flex="15"></md-layout>
      </md-layout>
    </div>
  </div>
  <!-- End call to action section -->

</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: [],

  data() {
    return {
      signupEmail: null,
      signupPassword: null,
      signupError: ' ', // md-dialog-alert requires field not be empty
    };
  },

  computed: {
    ...mapState({
      signupErrorStore: 'signupError',
    }),
  },

  watch: {
    signupErrorStore(message) {
      if (message) {
        this.signupError = message;
        this.$refs.signupError.open();
        this.$store.dispatch('SIGNUP_ERROR_DISPLAYED');
      }
    },
  },

  methods: {
    onSignupSubmit() {
      this.$store.dispatch('SUBMIT_SIGNUP', {
        email: this.signupEmail,
        password: this.signupPassword,
      });
      this.signupPassword = null;
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

  form {
    width: 100%;
    margin-top: 60px;
  }

  button {
    margin-left: 0;
    width: 100%;
  }
}
</style>
