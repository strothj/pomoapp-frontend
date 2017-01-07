<template>
<div>
  <error-dialog></error-dialog>

  <md-layout class="account-card">
    <md-layout></md-layout><!-- Spacer -->
    <md-layout>
      <form @submit.prevent="onFormSubmit">

        <md-card class="account-card__card">

          <md-toolbar>
            <h2 class="md-title">{{ title }}</h2>
          </md-toolbar>

          <md-card-content>
            <md-input-container>
              <label>Email address</label>
              <md-input v-model="email"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Password</label>
              <md-input v-model="password"></md-input>
            </md-input-container>
          </md-card-content>

          <md-card-actions>
            <md-button class="md-raised md-primary">Sign in with Google</md-button>
            <md-button class="md-primary" type="submit">{{ actionText }}</md-button>
          </md-card-actions>

        </md-card>

      </form>
    </md-layout>
    <md-layout></md-layout><!-- Spacer -->
  </md-layout>
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
    width: 100vw;
  }

  .md-card-content { flex: 1; }

  &__card { height: 100vh; }

  &__google-button { width: 95%; }

  .not-mobile({
    form {
      margin-top: 100px;
      width: 500px;
    }

    &__card { height: 400px; }

    &__google-button { width: 450px; }
  });
}
</style>
