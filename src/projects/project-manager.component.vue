<template>
<div>
  <span>Logged in</span>
  <md-button @click="signOut">Sign out</md-button>
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
    signOut() {
      this.$store.dispatch('SIGN_OUT');
    },
  },
};
</script>
