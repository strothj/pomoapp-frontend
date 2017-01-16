<template>
<footer class="footer-section md-toolbar">
  <md-theme md-name="footerTransparent">
    <md-toolbar class="container md-large md-transparent">
      <div class="md-toolbar-container">
        <h2 class="footer-section__title md-title">Pomoapp</h2>
        <div style="flex: 1"></div>
        <md-button class="md-icon-button" href="https://github.com/strothj/pomoapp-backend">
          <md-icon md-src="static/github-circle.svg"></md-icon>
          <md-tooltip>See source code on Github</md-tooltip>
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <span class="md-caption" style="padding-left: 10px">Fullstack capstone project for Thinkful.com by Jason Strothman.</span>
      </div>
    </md-toolbar>
  </md-theme>
</footer>
</template>

<script>
import Vue from 'vue';

export default {
  mounted() {
    // Register a theme with a black background so that the Vue Material theme
    // engine will set text to white.
    Vue.material.registerTheme('footerTransparent', { background: 'black' });
    this.themeRegistered = true;
  },
};
</script>

<style lang="less">
@import "../assets/keylines.less";
@dark-blue: #014E8C;

.footer-section {
  margin-top: 100px;
  background-color: @dark-blue;

  &__title {
    flex: 1;
    font-weight: 100 !important;
    .mobile({ display: none; });
  }
}
</style>
