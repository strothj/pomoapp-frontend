<template lang="pug">
main
  login-card(class="login-card")
</template>

<script>
import LoginCard from './LoginCard';

export default {
  components: {
    LoginCard,
  },
};
</script>

<style lang="less">
.login-card {
  position: fixed;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 750px) {
    position: relative;
    top: 50px;
    width: 500px;
    height: 400px;
    margin: 0 auto;
  }
}
</style>
