<template>
<appbar
    class="landing-appbar"
    :transparent="transparent"
    ref="appbar"
    @onMenuClicked="$emit('onMenuClicked')"
    @signinClicked="$refs.signinDialog.open()"
    @signupClicked="$refs.signupDialog.open()"></appbar>
</template>

<script>
import Headroom from 'headroom.js';
import Appbar from '../shared/appbar.component';

function isMobile() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return width < 956;
}

export default {
  data() {
    return {
      headroom: null,
      transparent: !isMobile(),
    };
  },

  mounted() {
    const changeAppbarTheme = () => {
      if (isMobile()) { this.transparent = false; return; }
      const scrollPos = window.pageYOffset;
      this.transparent = scrollPos < 700;
    };

    this.headroom = new Headroom(this.$refs.appbar.$el, {
      offset: 200,
      tolerance: {
        down: 0,
        up: 10,
      },
      classes: {
        initial: 'landing-appbar',
        pinned: 'landing-appbar--pinned',
        unpinned: 'landing-appbar--unpinned',
        top: 'landing-appbar--top',
        notTop: 'landing-appbar--not-top',
        bottom: 'landing-appbar--bottom',
        notBottom: 'landing-appbar--not-bottom',
      },
      onPin: changeAppbarTheme,
      onUnpin: changeAppbarTheme,
      onTop: changeAppbarTheme,
    });
    this.headroom.init();
  },

  components: {
    Appbar,
  },
};
</script>

<style lang="less">
@import "~assets/keylines.less";
@import "./landing-appbar-animation.less";

.landing-appbar {
  position: fixed;
  top: 0px;

  .not-mobile({
    .animated();
  });

  &--not-top&--pinned {
    .animated.slideDown();
  }

  &--not-top&--unpinned {
    .animated.slideUp();
  }
}

</style>
