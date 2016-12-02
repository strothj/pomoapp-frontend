<template lang="pug">
doctype html
form('@submit.prevent'='submit').login-card.mdl-card.mdl-shadow--6dp
  .mdl-card__title.mdl-card--border
    h2.mdl-card__title-text
      | Welcome Back!

  .mdl-card__supporting-text.mdl-card--expand
    // Email field
    .mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label
      input.mdl-textfield__input(
        type="email"
        id="login-email"
        'v-model'='username'
      )
      label.mdl-textfield__label(
        for="login-email"
      ) Email Address
    // Password field
    .mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label
      input.mdl-textfield__input(
        type="password"
        id="login-password"
        'v-model'='password'
      )
      label.mdl-textfield__label(
        for="login-password"
      ) Password

  .mdl-card__actions
    a.mdl-button.mdl-js-button.mdl-button--colored
      | Forgot Password?
    .mdl-layout-spacer
    button.mdl-button.mdl-js-button.mdl-button--raised.mdl-button--colored(
      type="submit"
    ) Login
</template>

<script>
export default {
  props: ['initialUsername'],
  data: function data() {
    return {
      username: this.initialUsername || null,
      password: null,
    };
  },
  methods: {
    submit: function submit() {
      this.$emit('submit', { username: this.username, password: this.password });
      this.password = null;
    },
  },
};
</script>

<style lang="less">
@indigo: #4051B5;

.login-card {
  .mdl-card {
    &__title {
      height: 100px;
      color: #FFF;
      background-color: @indigo;
    }

    &__actions {
      display: flex;
    }
  }

  .mdl-textfield {
    width: 100%;
  }
}
</style>
