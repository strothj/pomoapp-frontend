<template>
<div>
  <app-bar></app-bar>

  <!-- Start call to action section -->
  <header class="cta-section">
    <div class="page-content">
      <md-layout md-gutter="24">
        <md-layout md-flex="5" md-hide-xsmall md-hide-small></md-layout>
        <md-layout md-tag="article" md-flex="50" md-flex-xsmall="100">
          <p class="cta-section__title md-display-3">It's time to get productive.</p>
          <p class="md-body-1">Stay on task. Divide tasks into manageable portions.</p>
        </md-layout>

        <!-- Start signup box -->
        <md-layout md-tag="article" class="cta-section__signup-box">
          <signup-box></signup-box>
        </md-layout>
        <!-- End signup box -->

        <md-layout md-flex="15" md-hide-xsmall md-hide-small></md-layout>
      </md-layout>
    </header>
  </div>
  <!-- End call to action section -->

</div>
</template>

<script>
import AppBar from '../shared/app-bar.component';
import SignupBox from '../accounts/signup-box.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
  },

  methods: {
  },

  components: {
    AppBar,
    SignupBox,
  },
};
</script>

<style lang="less">
@import "../assets/layout.less";

.cta-section {
  padding-top: 64px;
  min-height: 500px;

  &__title {
    margin-top: 24px;

    .not-mobile({
      margin-top: 56px;
    });
  }

  &__signup-box {
    margin-top: 60px;
  }
}
</style>
