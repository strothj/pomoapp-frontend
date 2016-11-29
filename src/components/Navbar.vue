<template lang="pug">
div(class='navbar-fixed')
  nav
    span(class='brand-logo') Pomoapp
    ul(class='right hide-on-small-and-down')
      li
        a(class="waves-effect waves-light btn" href='#') Sign In
</template>

<script>
export default {
};
</script>

<style lang="less">
@media only screen and (min-width: 992px) {
  .navbar-fixed {
    .brand-logo {
      padding-left: 72px;
    }
  }
}
</style>
