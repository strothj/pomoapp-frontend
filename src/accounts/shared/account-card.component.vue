<template>
<div>
  <error-dialog></error-dialog>

      <form @submit.prevent="onFormSubmit">

            <md-input-container>
              <label>Email address</label>
              <md-input v-model="email" required></md-input>
            </md-input-container>
            <md-input-container>
              <label>Password</label>
              <md-input v-model="password" type="password" required></md-input>
            </md-input-container>

            <!--
            <md-button class="md-raised md-primary">Sign in with Google</md-button>
            -->
            <md-button class="md-primary" type="submit">{{ actionText }}</md-button>

      </form>
</div>
</template>

<script>
import ErrorDialog from './error-dialog.component';

export default {
  props: ['actionText', 'title'],

  data() {
    return {
      email: null,
      password: null,
    };
  },

  computed: {
  },

  methods: {
    onFormSubmit() {
      this.$emit('submit', {
        email: this.email,
        password: this.password,
      });
      this.password = null;
    },
  },

  components: {
    ErrorDialog,
  },
};
</script>

<style lang="less">
@import "~assets/layout.less";

.account-card {
  form {
    .mobile({
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
    });

    .not-mobile({
      margin-top: 100px;
      width: 500px;
    });
  }

  .md-card-content { flex: 1; }
}
</style>
