<template>
<main v-md-theme="'loginCard'">
  <md-card class="login-card">
    <form @submit.prevent="submitForm">

    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Welcome Back!</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-content>
      <md-input-container>
        <label for="login-username">Email Address</label>
        <md-input v-model="username" type="username" id="login-username">
      </md-input-container>

      <md-input-container md-has-password>
        <label for="login-password">Password</label>
        <md-input v-model="password" type="password" id="login-password">
      </md-input-container>

      <span :style="{ visibility: errorVisibility }" class="md-body-1 md-warn">{{ loginError }}</span>

      <md-checkbox v-model="remember" class="md-primary">Remember me</md-checkbox>
    </md-card-content>

    <md-card-actions class="login-card__actions">
      <a href="#" style="flex: 1">Forgot Password?</a>
      <md-button class="md-raised md-primary" type="submit">Sign in</md-button>
    </md-card-actions>

    </form>
  </md-card>
</main>
</template>

<script>
/* eslint-disable */
/*
    <form @submit.prevent="submitForm" class="login-card mdl-card mdl-shadow--6dp">
      <div class="login-card__title mdl-card__title">
        <h2 class="mdl-card__title-text">Welcome Back!</h2>
      </div><!-- login-card__title -->

      <div class="mdl-card__supporting-text mdl-card--expand">
        <div class="login-card-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="username" type="username" id="login-username" class="mdl-textfield__input">
          <label for="login-username" class="mdl-textfield__label">Email Address</label>
        </div><!-- login-card-textfield -->

        <div class="login-card-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input v-model="password" type="password" id="login-password" class="mdl-textfield__input">
          <label for="login-password" class="mdl-textfield__label">Password</label>
          <span :style="{ visibility: errorVisibility }" class="mdl-textfield__error">{{ loginError }}</span>
        </div><!-- login-card-textfield -->

        <label for="login-remember" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
          <input v-model="remember" type="checkbox" id="login-remember" class="mdl-checkbox__input">
          <span class="mdl-checkbox__label">Remember me</span>
        </label><!-- mdl-checkbox -->
      </div><!-- mdl-card__supporting-text -->

      <div class="login-card__actions mdl-card__actions">
        <a class="mdl-button mdl-js-button mdl-button--colored">Forgot Password?</a>
        <div class="mdl-layout-spacer"></div>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Login</button>
      </div><!-- login-card__actions -->

    </form>
*/
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    username: 'bob@example.com',
    password: '123',
    remember: true,
  }),

  computed: {
    ...mapGetters(['loginError']),
    errorVisibility: function errorVisibility() {
      return this.loginError ? 'visible' : 'hidden';
    },
  },

  methods: {
    ...mapActions({
      loginUsingPassword: 'LOGIN_WITH_PASSWORD',
    }),

    submitForm: function submitForm() {
      this.loginUsingPassword({
        username: this.username,
        password: this.password,
        remember: this.remember,
      });
      this.password = '';
    },
  },
};
</script>
