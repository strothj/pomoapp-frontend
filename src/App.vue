<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import IndexPage from 'components/IndexPage';

export default {
  name: 'app',
  components: {
    IndexPage,
  },
};
</script>

