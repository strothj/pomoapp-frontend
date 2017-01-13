<template>
  <account-card
    actionText="Sign up"
    title="Sign up"
    @submit="onFormSubmit">
  </account-card>
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
      this.$store.dispatch('SUBMIT_SIGNUP', {
        email, password,
      });
    },
  },

  components: {
    AccountCard,
  },
};
</script>
