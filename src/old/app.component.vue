<template>
  <div id="app">
    <slide-transition>
      <route-background-colors class="child-view">
      </route-background-colors>
    </slide-transition>
  </div>
</template>

<script>
import SlideTransition from './core/slide-transition.component';
import RouteBackgroundColors from './core/route-background-colors.component';

export default {
  name: 'app',

  components: {
    SlideTransition,
    RouteBackgroundColors,
  },
};
</script>

