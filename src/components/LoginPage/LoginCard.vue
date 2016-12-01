<template lang="pug">
div(class="mdl-card mdl-shadow--4dp")
  div(class="login-card__title mdl-card__title mdl-card--border")
    h2(class="mdl-card__title-text") Welcome Back!
  div(class="mdl-card__supporting-text mdl-card--expand")
    form(action="#")
      div(class="login-card__textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label")
        input(class="mdl-textfield__input" type="email" id="login-email")
        label(class="mdl-textfield__label" for="login-email") Email Address
      div(class="login-card__textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label")
        input(class="mdl-textfield__input" type="password" id="login-password")
        label(class="mdl-textfield__label" for="login-password") Password
  div(class="login-card__actions mdl-card__actions")
    a(class="login-card__login-button mdl-button mdl-js-button mdl-button--colored") Forgot Password?
    div(class="mdl-layout-spacer")
    a(class="login-card__login-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored") Login
</template>

<script>
export default {};
</script>

<style lang="less">
.login-card {
  &__title {
    height: 100px;
    color: #FFF;
    background-color: #4051B5;
  }

  &__textfield {
    width: 100%;
  }

  &__actions {
    display: flex;
  }
}
</style>
