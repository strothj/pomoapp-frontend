<template>
  <div class="hero-section">
    <span>Test</span>
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
@material-design-color__light-blue-900: #01579B;
@background-gradient: fade(@material-design-color__light-blue-900, 80%);

.hero-section {
  background: linear-gradient(@background-gradient, @background-gradient),
    url("~assets/hero-background.png") center/cover fixed;
}
</style>
