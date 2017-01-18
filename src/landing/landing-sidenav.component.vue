<template>
<md-sidenav class="md-left" ref="sidenav">
  <md-list>
    <md-list-item @click="navigate('/#pomoapp')">
      <span>Pomoapp</span>
    </md-list-item>
    <md-list-item @click="navigate('/#productive')">
      <span>Get productive</span>
    </md-list-item>
    <md-list-item @click="navigate('/#pomodoro-clock')">
      <span>Balance your time</span>
    </md-list-item>
    <md-list-item @click="navigate('/#pomodoro-technique')">
      <span>Pomodoro Technique</span>
      <md-divider></md-divider>
    </md-list-item>

    <md-list-item @click="navigateRouter('/signin')">
      <span>Sign in</span>
    </md-list-item>
    <md-list-item @click="navigateRouter('/signup')">
      <span>Sign up</span>
    </md-list-item>
  </md-list>
</md-sidenav>
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
    open() {
      this.$refs.sidenav.open();
    },

    navigate(path) {
      this.$refs.sidenav.close();
      window.location = path;
    },

    navigateRouter(path) {
      this.$refs.sidenav.close();
      this.$router.push({ path });
    },
  },
};
</script>
