<template>
<main><div class="account-page">
  <error-dialog></error-dialog>

  <div class="account-page__card account-card">
    <form @submit.prevent="onFormSubmit">

      <h1 class="account-card__title">Pomoapp</h1>

      <!-- Email address -->
      <md-input-container>
        <md-icon>email</md-icon>
        <label>Email address</label>
        <md-input
          v-model="email"
          v-focus.lazy="focused"
          @blur.native="focused = false"
          required></md-input>
      </md-input-container>

      <!-- Password -->
      <md-input-container>
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input
          v-model="password"
          type="password"
          required></md-input>
      </md-input-container>

      <!-- Submit button -->
      <md-button
        class="account-card__primary-button md-primary md-raised"
        type="submit">
          {{ actionText }}
      </md-button>

      <div class="account-card__secondary-action">
        <span v-if="$route.name === 'Signup'">Already a member? <router-link :to="{ path: '/signin'}">Sign in</router-link></span>
        <span v-else></span>
      </div>

    </form>
  </div>

</div></main>
</template>

<script>
import { focus } from 'vue-focus';
import ErrorDialog from './error-dialog.component';

export default {
  props: ['actionText'],

  directives: { focus },

  data() {
    return {
      email: null,
      password: null,
      focused: true,
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
@import "~assets/keylines.less";

@material-design__blue-600: #1E88E5;
@material-design__blue-900: #0D47A1;
@light-color: @material-design__blue-600;
@dark-color: @material-design__blue-900;

.account-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(@light-color, @dark-color);

  &__card {
    position: fixed;
    width: 100%;
    height: 100%;

    .not-mobile({
      width: 420px;
      height: 420px;
      left: 50%;
      top: 150px;
      transform: translateX(-50%);
      border-radius: 4px;
    });
  }
}

.account-card {
  padding: 20px 40px;
  background-color: white;

  .not-mobile({ padding: 40px });

  &__title {
    padding-top: 0;
    padding-bottom: 0;
    color: fade(black, 75%);
    font-weight: 400;
    text-align: center;

    .not-mobile({
      margin-top: 0;
      font-size: 3em;
    });

    .mobile({ margin: 0; });
  }

  &__primary-button {
    margin: 0;
    margin-top: 10px;
    width: 100%;
    height: 50px;

    .not-mobile({ margin-top: 24px; });
  }

  &__secondary-action {
    padding-top: 20px;
    text-align: center;

    .not-mobile({ padding-top: 30px; });
  }
}
</style>
