<template>
<article class="split-section container">

  <div class="layout-centered">
    <slot name="title"></slot>
  </div>

  <md-layout>
    <md-layout
      :class="{ 'split-section--padding': padding === 'left' }"
      md-flex="50"
      md-flex-small="100"
      md-align="center">
      <div class="split-section__left">
        <slot name="left"></slot>
      </div>
    </md-layout>

    <md-layout
      :class="{ 'split-section--padding': padding === 'right' }"
      md-flex="50"
      md-flex-small="100"
      md-align="center">
      <div class="split-section__right">
        <slot name="right"></slot>
      </div>
    </md-layout>
  </md-layout>

</article>
</template>

<script>
export default {
  props: ['padding'],
};
</script>

<style lang="less">
.split-section {
  padding-top: 30px;

  &--padding {
    padding: 0 20px;
  }
}
</style>
