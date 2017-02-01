<template>
  <section class="hero-section">
    <div class="container">

      <nav class="hero-section__nav">
        <navbar></navbar>
      </nav>

      <hero-section-content class="hero-section__content">
      </hero-section-content>

    </div>
  </section>
</template>

<script>
import Navbar from './Navbar';
import HeroSectionContent from './HeroSectionContent';

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
    Navbar,
    HeroSectionContent,
  },
};
</script>

<style lang="less">
@import "~assets/css/keylines.less";
@material-design-color__light-blue-900: #01579B;
@background-gradient: fade(@material-design-color__light-blue-900, 80%);

.hero-section {
  display: flex;
  flex-direction: column;
  background: linear-gradient(@background-gradient, @background-gradient),
    url("~assets/images/hero-background.png") center/cover fixed;

  &__nav {
    .mobile({ display: none; });
  }

  &__content {
    margin: 0 auto;
    margin-top: 75px;
    .mobile({ margin-top: 75px; });
  }
}
</style>
