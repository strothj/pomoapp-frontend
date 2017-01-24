<template>
<md-dialog-alert
  :md-content="authError"
  ref="errorDialog"></md-dialog-alert>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      authError: ' ', // md-dialog-alert requires field not be empty
    };
  },

  computed: {
    ...mapState({
      authErrorStore: 'authError',
    }),
  },

  watch: {
    authErrorStore(message) {
      if (message) {
        this.authError = message;
        this.$refs.errorDialog.open();
        this.$store.dispatch('DISMISS_AUTH_ERROR');
      }
    },
  },
};
</script>
