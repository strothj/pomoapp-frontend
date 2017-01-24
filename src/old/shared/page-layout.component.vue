<template>
<div class="page-frame">
  <app-bar
    class="page-frame__appbar"
    @onMenuClicked="$refs.sidenav.open()">
  </app-bar>

  <sidenav ref="sidenav"></sidenav>

  <div class="page-frame__contents">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import AppBar from './appbar.component';
import Sidenav from './sidenav.component';

export default {
  data() {
    return {
    };
  },

  components: {
    AppBar,
    Sidenav,
  },
};
</script>

<style lang="less">
@appbar-height: 64px;

.page-frame {
  &__appbar {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
  }

  &__contents {
    padding-top: 84px;
  }
}
</style>
