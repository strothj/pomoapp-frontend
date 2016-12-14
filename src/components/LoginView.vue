<template>
<main class="login-main">
  <div class="login-main__container login-container container">
    <div class="row">
      <div class="login-container__col col-4">

        <md-card class="login-card">
          <form class="login-card__form" @submit.prevent="submitForm">

            <md-toolbar class="md-large">
              <div class="md-toolbar-container"></div>

              <div class="md-toolbar-container">
                <h2 class="md-title">Welcome Back!</h2>
              </div>
            </md-toolbar>

            <md-card-content>
              <md-input-container>
                <label for="login-username">Email Address</label>
                <md-input v-model="username" type="username" id="login-username"></md-input>
              </md-input-container>

              <md-input-container md-has-password>
                <label for="login-password">Password</label>
                <md-input v-model="password" type="password" id="login-password"></md-input>
              </md-input-container>

              <md-checkbox v-model="remember" class="md-primary">Remember me</md-checkbox>
            </md-card-content>

            <md-card-actions class="login-card__actions">
              <a href="#" style="flex: 1">Forgot Password?</a>
              <md-button class="md-raised md-primary" type="submit">Sign in</md-button>
            </md-card-actions>

          </form>
        </md-card>

      </div>
    </div>
  </div>

  <!-- Error popup -->
  <md-dialog-alert
    :md-content="errorDialogContent"
    md-ok-text="OK"
    ref="errorDialog">
  </md-dialog-alert>

</main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    username: 'bob@example.com',
    password: '123',
    remember: true,
    // Set to a space because an empty value causes vue-material to complain.
    errorDialogContent: ' ',
  }),

  computed: {
    ...mapGetters(['loginError']),
  },

  methods: {
    ...mapActions([
      'LOGIN_WITH_PASSWORD',
      'LOGIN_ERROR_HANDLED',
    ]),

    submitForm: function submitForm() {
      this.$store.dispatch('LOGIN_WITH_PASSWORD', {
        username: this.username,
        password: this.password,
        remember: this.remember,
      });
      this.password = '';
    },
  },

  watch: {
    loginError(val) {
      if (!val) return;
      this.errorDialogContent = val;
      this.$store.dispatch('LOGIN_ERROR_HANDLED');
      this.$refs.errorDialog.open();
    },
  },
};
</script>

<style lang="less">
@import '../assets/css/colors.less';
@import '../assets/css/keylines.less';

.login-main {
  background-color: @color-background;
  height: 100vh;

  &__container {
    // Remove padding so login box fills horizontal width on mobile.
    padding: 0;
  }
}

.login-container {
  &__col {
    // Remove padding so login box fills horizontal width on mobile.
    padding: 0;
    @media only screen and (min-width: @breakpoint-large-screen) {
      margin-top: 100px;
      margin-left: 33.3333333%;
    }
  }
}

.login-card {

  &__form {
    // Expand login card height to full screen height on mobile.
    height: 100vh;
    @media only screen and (min-width: @breakpoint-large-screen) {
      height: inherit;
    }
  }

  &__actions {
    bottom: 0;
    width: 100%;
    @media only screen and (min-width: @breakpoint-large-screen) {
      position: inherit;
    }
  }
}
</style>
