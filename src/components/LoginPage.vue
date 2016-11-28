<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-offset-4"></div>
        <div class="col-4">
          <md-card class="login-card" v-md-theme="'default'">

            <form @submit.prevent="submit">
              <md-card-header>
                <div class="md-title">Login</div>
              </md-card-header>

              <md-card-content>
                <md-input-container>
                  <md-input type="email" placeholder="Email Address" required></md-input>
                  <span class="md-error">Validation message</span>
                </md-input-container>
                <md-input-container>
                  <md-input type="password" placeholder="Password" required></md-input>
                  <span class="md-error">Validation message</span>
                </md-input-container>
              </md-card-content>

              <md-card-actions>
                <md-button type="submit">Log In</md-button>
              </md-card-actions>

            </form>

          </md-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style scoped>
.login-card {
  margin-top: 100px;
}
</style>
