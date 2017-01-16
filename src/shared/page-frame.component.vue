<template>
<div class="page-frame">
  <app-bar class="page-frame__appbar">
    <slot name="sidenav"></slot>
  </app-bar>

  <div class="page-frame__contents">
    <slot></slot>
  </div>
</div>
</template>

<script>
import AppBar from './appbar.component';

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

.page-frame {
  &__appbar {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
  }

  &__contents {
    padding-top: 64px;
  }
}
</style>
