<template>
<div>

  <!-- Start appbar section -->
  <md-whiteframe class="appbar" md-elevation="4" md-tag="nav">
    <div class="centered-content">
      <md-toolbar>
        <md-button class="appbar__menu-button">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="appbar__title md-title">Pomoapp</h2>

        <md-button class="appbar__login-button">Sign In</md-button>
      </md-toolbar>
    </div>
  </md-whiteframe>
  <!-- End appbar section -->

  <!-- Start call to action section -->
  <div class="cta-section">
    <div class="page-content">
      <md-layout md-gutter="24">
        <md-layout md-flex="5"></md-layout>
        <md-layout md-tag="article">
          <p class="md-display-3">It's time to get productive.</p>
          <p class="md-body-1">Productivity management made simple using a proven time management technique.</p>
        </md-layout>
        <md-layout md-flex="10"></md-layout>
        <md-layout><p class="md-display-2">test</p>
        </md-layout>
      </md-layout>
    </div>
  </div>
  <!-- End call to action section -->

</div>
</template>

<script>
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
};
</script>

<style lang="less">
@import "../assets/layout.less";
@blue-grey-800: #37474F;
@blue-grey-900: #263238; // darker shade

.appbar {
  background-color: @blue-grey-800;
  width: 100%;
  position: fixed;

  & &__title {
    margin-left: 8px;
    flex: 1;
  }

  &__title, &__login-button {
    display: none;
  }

  .not-mobile({
    &__title, &__login-button {
      display: block;
    }

    &__menu-button {
      display: none;
    }
  });
}

.cta-section {
  padding-top: 64px;
  min-height: 500px;
  background-color: @blue-grey-900;
  box-shadow: inset 0 -8px 8px -6px black;

  p {
    color: rgba(255, 255, 255, .57) !important;
  }
}
</style>
