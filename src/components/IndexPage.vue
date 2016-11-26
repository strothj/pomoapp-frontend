<template>
  <div>
    <header>
      <div class="container-fluid">
        <nav>
          <md-toolbar v-md-theme="'default'">
            <span class="page-title md-title" style="flex: 1">Pomoapp</span>

            <md-button @click="login" class="md-raised">Log in</md-button>
          </md-toolbar>
        </nav>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="row">

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { NAVIGATE_LOGIN_PAGE } from 'src/store/action-types';

export default {
  methods: {
    login() {
      this.$store.dispatch(NAVIGATE_LOGIN_PAGE);
    },
  },
};
</script>

<style scoped>
.page-title {
  color: white;
}
</style>
