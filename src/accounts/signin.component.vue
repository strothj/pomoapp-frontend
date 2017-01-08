<template>
  <account-card
    actionText="Sign in"
    title="Sign in"
    @submit="onFormSubmit"></account-card>
</template>

<script>
import AccountCard from './shared/account-card.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
  },

  methods: {
    onFormSubmit({ email, password }) {
      this.$store.dispatch('SUBMIT_SIGNIN', {
        email, password,
      });
    },
  },

  components: {
    AccountCard,
  },
};
</script>
