<template>
<picture>
  <source :srcset="images.desktop" media="(min-width: 945px)">
  <source :srcset="images.mobile">
  <img class="responsive-image" alt="images.alt" :src="images.desktop">
</picture>
</template>

<script>
export default {
  props: ['images'],
};
</script>

<style lang="less">
.responsive-image {
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
}
</style>
