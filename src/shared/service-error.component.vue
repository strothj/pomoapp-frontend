<template>
<md-dialog-alert
  md-title="Service error"
  :md-content-html="serviceError"
  @close="onErrorDismissed"
  ref="errorDialog"></md-dialog-alert>
</template>

<script>
export default {
  props: [],

  data() {
    return {
      serviceError: `There was a problem with the service.<br>
Please try again later.`,
    };
  },

  computed: {
    serviceErrorStore() {
      return this.$store.state.serviceError;
    },
  },

  watch: {
    serviceErrorStore() {
      this.$refs.errorDialog.open();
    },
  },

  methods: {
    onErrorDismissed() {
      this.$store.dispatch('DISMISS_SERVICE_ERROR');
    },
  },
};
</script>
