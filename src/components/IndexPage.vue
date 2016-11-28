<template lang="pug">
div(class="index")
  nav(:class='themeColor')
    div(class='container')
      div(class='row')
        div(class='col s12')
          span(class='brand-logo') Pomoapp

  main
    div(class='index-contents container')
      div(class='row')
        div(class='col s12')
          img(class='responsive-img' src='https://placehold.it/1000x300?text=Main+Logo')

      div(class='index-feature row')
        div(class='col s12 m5')
          p(class='flow-text') Ex in ea minim sunt aliqua aute laboris commodo ut.
          blockquote In cillum in exercitation ad aliqua velit proident.
          blockquote Proident eiusmod sit quis pariatur in et amet.
          blockquote Non occaecat eiusmod nostrud amet sint sint proident sint est laborum sunt.
        div(class='col s12 m5 offset-m2 center-align')
          img(class='responsive-img' src='https://placehold.it/400x400?text=Sign+up+Component')

      div(class='index-feature row')
        div(class='col s12 m5')
          p(class='flow-text') Commodo minim elit culpa aute commodo proident sunt.
          blockquote Dolor eu quis cupidatat do.
          blockquote Labore officia excepteur pariatur cupidatat.
        div(class='col s12 m5 offset-m2 center-align')
          img(class='responsive-img' src='https://placehold.it/400x400?text=Screenshot')

      div(class='index-feature row')
        div(class='col s12 m5 center-align')
          img(class='responsive-img' src='https://placehold.it/400x400?text=Screenshot')
        div(class='col s12 m5 offset-m2')
          p(class='flow-text') Eiusmod et quis laborum dolor officia ad quis consequat sit.
          blockquote Dolor veniam ut in ut.
          blockquote Occaecat ad officia quis aliquip deserunt nisi ad aliqua.

      div(class='index-feature row')
        div(class='col s12 center-align')
          img(class='responsive-img' src='https://placehold.it/400x400?text=Sign+up+Component')

</template>

<script>
import { mapGetters } from 'vuex';
import { NAVIGATE_LOGIN_PAGE } from 'src/store/action-types';

export default {
  methods: {
    login() {
      this.$store.dispatch(NAVIGATE_LOGIN_PAGE);
    },
  },
  computed: {
    ...mapGetters(['themeColor']),
  },
};
</script>

<style lang="less" scoped>
.index {
  &-contents {
    padding-top: 10px;
  }

  &-feature {
    padding-bottom: 50px;
  }
}
</style>
