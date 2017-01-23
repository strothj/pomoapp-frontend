<template>
  <div class="carousel-container"></div>
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
@material-design__blue-600: #1E88E5;
@background-color: @material-design__blue-600;

.carousel-container {
  width: 100%;
  height: 550px;
  background-color: @background-color;
  box-shadow: inset 0 8px 8px -5px rgba(0,0,0,.25), inset 0 -8px 8px -5px rgba(0,0,0,.25)
}
</style>
