<template>
  <div class="hero-section">
    <div class="container">
      <nav class="hero-section__nav">
        <navbar></navbar>
      </nav>
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar';

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
  },
};
</script>

<style lang="less">
@material-design-color__light-blue-900: #01579B;
@background-gradient: fade(@material-design-color__light-blue-900, 80%);

.hero-section {
  display: flex;
  flex-direction: column;
  background: linear-gradient(@background-gradient, @background-gradient),
    url("~assets/images/hero-background.png") center/cover fixed;

  &__nav {
    margin-top: 20px;
  }
}
</style>
