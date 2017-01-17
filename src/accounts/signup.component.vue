<template>
  <account-card
    actionText="Sign up"
    title="Sign up"
    @submit="onFormSubmit"
    ref="accountDialog"></account-card>
</template>

<script>
import AccountCard from './shared/account-card.component';

export default {
  methods: {
    onFormSubmit({ email, password }) {
      this.$store.dispatch('SUBMIT_SIGNUP', {
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
