<template lang="pug">
div(class="root-page-layout mdl-layout mdl-js-layout mdl-layout--fixed-header")
  header(class="mdl-layout__header mdl-layout__header--waterfall")
    header-title-row
    header-links-row
  drawer
  main(class="root-page-layout-main mdl-layout__content")
    div(class="root-page-layout-main__grid mdl-grid")

      div(class="root-page-layout-main__logo mdl-cell mdl-cell--12-col")
        logo-image

      div(class="mdl-cell mdl-cell--6-col")
        feature-section

      div(class="mdl-cell mdl-cell--6-col")
        sign-up-box

      div(class="mdl-cell mdl-cell--6-col")
        feature-section

      div(class="mdl-cell mdl-cell--6-col")
        feature-logo

      div(class="mdl-cell mdl-cell--6-col")
        feature-logo

      div(class="mdl-cell mdl-cell--6-col")
        feature-section

</template>

<script>
import HeaderTitleRow from './HeaderTitleRow';
import HeaderLinksRow from './HeaderLinksRow';
import Drawer from './Drawer';
import LogoImage from './LogoImage';
import FeatureSection from './FeatureSection';
import FeatureLogo from './FeatureLogo';
import SignUpBox from './SignUpBox';

export default {
  components: {
    HeaderTitleRow,
    HeaderLinksRow,
    Drawer,
    LogoImage,
    FeatureSection,
    FeatureLogo,
    SignUpBox,
  },
};
</script>

<style lang="less">
.root-page-layout {
  .mdl-layout__header-row {
    .mdl-navigation__link:last-of-type {
      padding-right: 0;
    }
  }
}

.root-page-layout-main {
  &__grid {
    max-width: 960px;
    padding-top: 0;
  }

  &__logo {
    margin: 0;
    width: 100%;
  }
}
</style>
