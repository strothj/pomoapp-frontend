<template>
<page-frame>
  <div class="landing-page">

  <!-- Start call to action section -->
  <header class="cta-section">
    <div class="page-content">
      <md-layout md-gutter="24" md-tag="article">
        <md-layout md-flex="100">
          <p class="cta-section__title md-display-3">It's time to get productive.</p>
        </md-layout>
        <md-layout md-flex="100">
        <p class="md-body-1">Stay on task. Divide tasks into manageable portions.</p>
        </md-layout>
      </md-layout>

      <md-layout md-gutter="24">
        <md-layout md-flex="75" md-flex-xsmall="100">
          <md-card-media>
          </md-card-media>
        </md-layout>
      </md-layout>
    </div>
  </header>
  <!-- End call to action section -->

  </div>

</page-frame>
</template>

<script>
import PageFrame from '../shared/page-frame.component';
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
    PageFrame,
    SignupBox,
  },
};
</script>

<style lang="less">
@import "../assets/layout.less";

.landing-page {
  color: white !important;
  p { color: white !important; }
}

.cta-section {
  background: linear-gradient( rgba(69,90,100,.9), rgba(69,90,100,.9) ),
    url(alarm-background.png) center right / cover no-repeat #0079bf;

  // background-image: url("pexels-photo.png");
  // background-size: cover;

  padding-top: 16px;
  height: 500px;

  &__title {

    .not-mobile({
      margin-top: 56px;
    });
  }

  &__signup-box {
    margin-top: 60px;
  }
}
</style>
