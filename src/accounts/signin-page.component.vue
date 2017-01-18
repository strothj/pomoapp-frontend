<template>
  <page-base
    actionText="Sign in"
    title="Sign in"
    @submit="onFormSubmit"
    ref="accountDialog"></page-base>
</template>

<script>
import PageBase from './shared/page-base.component';

export default {
  methods: {
    onFormSubmit({ email, password }) {
      this.$store.dispatch('SUBMIT_SIGNIN', {
        email, password,
      });
    },

    open() {
      this.$refs.accountDialog.open();
    },
  },

  components: {
    PageBase,
  },
};
</script>
