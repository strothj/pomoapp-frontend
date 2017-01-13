<template>
<div class="signup-box">
  <error-dialog></error-dialog>

  <form @submit.prevent="onSignupSubmit">

    <div class="md-title">Sign Up</div>

    <md-input-container>
      <label>Email address</label>
      <md-input v-model="signupEmail" type="email" required></md-input>
    </md-input-container>

    <md-input-container>
      <label>Password</label>
      <md-input v-model="signupPassword" type="password" required></md-input>
    </md-input-container>

    <md-button
      class="md-raised md-primary md-dense"
      type="submit">Create an account</md-button>
    <!-- <md-button class="md-raised md-dense">Sign in with Google</md-button> -->

  </form>
</div>
</template>

<script>
import ErrorDialog from './shared/error-dialog.component';

export default {
  props: [],

  data() {
    return {
      signupEmail: null,
      signupPassword: null,
    };
  },

  computed: {
  },

  methods: {
    onSigninButtonClick() {
      // this.$refs.signinButton.open();
    },

    onSignupSubmit() {
      this.$store.dispatch('SUBMIT_SIGNUP', {
        email: this.signupEmail,
        password: this.signupPassword,
      });
      this.signupPassword = null;
    },
  },

  components: {
    ErrorDialog,
  },
};
</script>

<style lang="less">
.signup-box {
  width: 100%;

  button {
    margin-left: 0;
    width: 100%;
  }
}
</style>
