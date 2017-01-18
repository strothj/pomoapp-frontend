<template>
<header class="hero-section">

  <div class="container layout-centered-small white-text">

  <h1>Pomoapp helps you stay productive.</h1>

  <p>Pomoapp's projects, tasks, and clock allow you to stay on task and be productive.</p>

  <router-link tag="md-button" class="hero-section__sign-up-button md-raised" to="/signup">Sign up free</router-link>

  <p class="hero-section__sign-in small-text">
    Already use Pomoapp?
    <router-link tag="a" to="/signin">Sign in</router-link>
  </p>

  </div>

</header>
</template>

<script>
export default {
};
</script>

<style lang="less">
@import "~assets/keylines.less";

@material-design__light-blue-900: #01579B;
@hero-color-overlay: fade(@material-design__light-blue-900, 90%);

.hero-section {
  background:
    linear-gradient(@hero-color-overlay, @hero-color-overlay),
    url(../images/hero-background.png)
    center / cover no-repeat;

  h1 {
    padding-top: 45px;
    .not-mobile({ padding-top: 100px; });
  }

  &__sign-in a {
    color: fade(white, 80%) !important;
    text-decoration: underline !important;
    &:hover { color: fade(white, 60%) !important; }
  }

  &__sign-up-button {
    font-weight: 400;
    font-size: 1.2em;
    letter-spacing: .1em;
    padding: 5px 50px;
    margin: 20px;
    text-transform: none;
  }
}
</style>
