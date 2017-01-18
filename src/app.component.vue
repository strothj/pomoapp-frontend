<template>
  <div id="app">
    <transition
      :name="transitionName"
      :before-leave="scrollbars(false)"
      :after-enter="scrollbars(true)">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',

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
    // Apply transition animations going from root to subroot or vise vera.
    // Do not apply transition between pages at the same depth.
    $route: function routeTransition(to, from) {
      if (to.path.length > 1 && from.path.length > 1) {
        this.transitionName = null;
        return;
      }
      this.transitionName = from.path.length > 1 ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

