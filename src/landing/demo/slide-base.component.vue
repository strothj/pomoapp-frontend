<template>
<div class="slide">
  <div class="slide__left"></div>
  <div class="slide__right"></div>
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
.slide {
  &__left, &__right {
    height: 100%;
    float: left;
  }

  &__left {
    width: 50%;
  }

  &__right {
    width: 50%;
    background-color: white;
  }
}
</style>
