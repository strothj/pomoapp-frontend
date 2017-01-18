<template>
  <page-base
    actionText="Sign up"
    @submit="onFormSubmit"
    ref="accountDialog"></page-base>
</template>

<script>
import PageBase from './shared/page-base.component';

export default {
  methods: {
    onFormSubmit({ email, password }) {
      this.$store.dispatch('SUBMIT_SIGNUP', {
        email, password,
      });
    },
  },

  components: {
    PageBase,
  },
};
</script>
