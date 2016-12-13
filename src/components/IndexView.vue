<template>
<div class="index-container">
  <header>
    <nav class="index-container__navbar">
      <md-whiteframe md-elevation="1">

        <md-toolbar>
          <h2 class="md-title" style="flex: 1">pomoapp</h2>

          <router-link tag="md-button" :to="{ name: 'LoginView' }">Sign in</router-link>
          <!-- <router-link tag="md-button" :to="{ name: 'SignupView' }" >Sign in</router-link> -->
          <md-button class="md-raised" disabled>Sign up</md-button>
        </md-toolbar>

      </md-whiteframe>
    </nav>
  </header>

  <main class="index-container__main index-main container">

    <div class="index-main__logo row">
      <div class="col-xs-12">
        <img src="https://placehold.it/1000x300?text=Main+Logo" alt="Logo">
      </div>
    </div>

    <div class="index-main__content-row row center-md">

      <div class="col-xs-12 col-md-6" v-html="featureText"></div>

      <div class="col-xs-12 col-md-6">
        <div class="box">
          <img src="https://placehold.it/400x400?text=Sign+up+Component" alt="Sign in box">
        </div>
      </div>

    </div>

    <div class="index-main__content-row row center-md">

      <div class="col-xs-12 col-md-6" v-html="featureText"></div>
      <div class="col-xs-12 col-md-6" v-html="featureLogo"></div>

    </div>

    <div class="index-main__content-row row center-md">

      <div class="col-xs-12 col-md-6" v-html="featureLogo"></div>
      <div class="col-xs-12 col-md-6" v-html="featureText"></div>

    </div

  </main>

</div>
</template>

<script>
export default {
  props: [],

  data() {
    return {
      featureText: `
        <div class="box">
          <p class="md-headline">Et adipisicing officia consectetur excepteur.</p>
          <p class="md-body-1">Veniam velit in anim velit exercitation labore fugiat anim culpa.</p>
          <p class="md-body-1">Commodo est magna minim ipsum labore exercitation.</p>
          <p class="md-body-1">Proident magna culpa cillum ea reprehenderit id velit laborum esse ut eu.</p>
        </div>`,
      featureLogo: `
        <div class="box">
          <img src="https://placehold.it/400x400?text=Screenshot">
        </div>`,
    };
  },

  computed: {
  },

  methods: {
  },
};
</script>

<style lang="less">
@navbar-height: 64px;

.index-container {
  &__navbar {
    position: fixed;
    width: 100%;
  }

  &__main {
    padding: @navbar-height 0;
  }
}

.index-main {
  &__logo img {
    width: 100%;
  }

  &__content-row {
    padding-top: @navbar-height;
  }
}
</style>
