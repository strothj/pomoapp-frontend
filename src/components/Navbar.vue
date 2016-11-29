<template lang="pug">
div(class='navbar-fixed')
  nav(:class='themeColor')
    span(class='brand-logo') Pomoapp
    ul(class='right hide-on-small-and-down')
      li
        a(class="waves-effect waves-light btn" href='#' ':class'='themeColorLighten2') Sign In
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['themeColor', 'themeColorLighten2']),
  },
};
</script>

<style lang="less" scoped>
@media only screen and (min-width: 992px) {
  .navbar-fixed {
    .brand-logo {
      padding-left: 72px;
    }
  }
}
</style>
