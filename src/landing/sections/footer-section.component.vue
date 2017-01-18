<template>
<footer class="footer-section md-toolbar md-theme-default">
  <md-toolbar class="container md-large">
    <div class="md-toolbar-container">
      <h2 class="footer-section__title md-title">Pomoapp</h2>
      <div style="flex: 1"></div>
      <md-button class="md-icon-button" href="https://github.com/strothj/pomoapp-backend">
        <md-icon md-src="static/github-circle.svg"></md-icon>
        <md-tooltip>See source code on Github</md-tooltip>
      </md-button>
    </div>

    <div class="md-toolbar-container">
      <span
        class="footer-section__capstone md-caption"
        style="padding-left: 10px">
        Fullstack capstone project for Thinkful.com by Jason Strothman.
      </span>
    </div>
  </md-toolbar>
</footer>
</template>

<script>
export default {
};
</script>

<style lang="less">
@import "~assets/keylines.less";
@dark-blue: #014E8C;

.footer-section {
  margin-top: 100px;

  &__title {
    flex: 1;
    font-weight: 100 !important;
    .mobile({ display: none; });
  }

  &__capstone {
    color: fade(white, 57%) !important;
  }
}
</style>
