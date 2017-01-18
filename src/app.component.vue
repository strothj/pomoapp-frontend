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
    $route: function routeTransition(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      this.transitionName = fromDepth > toDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

