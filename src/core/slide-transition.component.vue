<template>
  <transition
    :name="transitionName"
    :before-leave="scrollbars(false)"
    :after-enter="scrollbars(true)">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: [],

  data() {
    return {
      transitionName: null,
    };
  },

  methods: {
    // Hide scrollbars during transition effect to prevent popping effect.
    scrollbars(state) {
      const body = document.body;
      if (state) {
        setTimeout(() => {
          body.classList.remove('body-noscroll');
        }, 600);
      } else {
        body.classList.add('body-noscroll');
      }
    },
  },

  watch: {
    $route(to, from) {
      // Apply slide transition.
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      this.transitionName = fromDepth > toDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>
