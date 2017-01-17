<template>
<div>
  <error-dialog></error-dialog>

  <md-dialog ref="accountDialog">
    <form @submit.prevent="onFormSubmit">

      <md-dialog-title>{{ title }}</md-dialog-title>

      <md-dialog-content>

        <md-input-container>
          <label>Email address</label>
          <md-input v-model="email" v-focus.lazy="focused" @blur.native="focused = false" required></md-input>
        </md-input-container>
        <md-input-container>
          <label>Password</label>
          <md-input v-model="password" type="password" required></md-input>
        </md-input-container>

      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" type="submit">{{ actionText }}</md-button>
      </md-dialog-actions>

    </form>
  </md-dialog>
</div>
</template>

<script>
import { focus } from 'vue-focus';
import ErrorDialog from './error-dialog.component';

export default {
  props: ['actionText', 'title'],

  directives: { focus },

  data() {
    return {
      email: null,
      password: null,
      focused: false,
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

    open() {
      this.$refs.accountDialog.open();
      setTimeout(() => { this.focused = true; }, 100);
    },
  },

  components: {
    ErrorDialog,
  },
};
</script>
