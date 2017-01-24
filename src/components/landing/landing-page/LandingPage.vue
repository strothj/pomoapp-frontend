<template>
  <div class="landing-page">
    <hero-section class="landing-page__hero"></hero-section>
  </div>
</template>

<script>
import HeroSection from './sections/HeroSection';

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
    HeroSection,
  },
};
</script>

<style lang="less">
.landing-page {
  &__hero {
    height: 100vh;
  }
}
</style>
