<template>
<div class="page-frame">
  <app-bar class="page-frame__appbar">
    <slot name="sidenav"></slot>
  </app-bar>

  <slot></slot>
</div>
</template>

<script>
import AppBar from './app-bar.component';

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
  },
};
</script>

<style lang="less">
@appbar-height: 64px;

body {
  padding-top: @appbar-height;
}

.page-frame {
  &__appbar {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
  }
}
</style>
