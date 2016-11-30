<template lang="pug">
div(class='navbar-fixed')
  nav(':class'='{ "nav-extended": extended }')
    div(class='nav-wrapper')
      span(class='brand-logo') Pomoapp
      ul(class='right hide-on-small-and-down')
        li
          a(class="waves-effect waves-light btn" href='#') Sign In
      <!--a(href='#' class='breadcrumb') Projects-->
      ul(class='side-nav')
        li asdfasdf
</template>

<script>
export default {
  computed: {
    extended() {
      return this.$route.name === 'ProjectPage';
    },
  },
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
