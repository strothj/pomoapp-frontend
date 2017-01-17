<template>
  <account-card
    actionText="Sign in"
    title="Sign in"
    @submit="onFormSubmit"
    ref="accountDialog"></account-card>
</template>

<script>
import AccountCard from './shared/account-card.component';

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
    AccountCard,
  },
};
</script>
