<template>
<main>
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

  </form><!-- login-card -->
</main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    username: 'bob@example.com',
    password: '123',
    remember: true,
  }),
  methods: {
    ...mapActions(['loginUsingPassword']),
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

<style lang="less">
@indigo: #4051B5;

.login-card {
  position: fixed;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 750px) {
    position: relative;
    top: 50px;
    width: 500px;
    height: 400px;
    margin: 0 auto;
  }

  &__title {
    height: 100px;
    color: #FFF;
    background-color: @indigo;
  }

  &__actions {
    display: flex;
  }
}

.login-card-textfield {
  width: 100%;
}
</style>
