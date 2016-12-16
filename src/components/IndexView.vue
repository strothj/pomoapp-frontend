<template>
<div class="index-container">
  <header>
    <nav class="index-container__navbar">
      <md-whiteframe md-elevation="1">

        <md-toolbar>
          <h2 class="md-title" style="flex: 1">pomoapp</h2>

          <md-button @click="signIn">Sign in</md-button>
          <!-- <router-link tag="md-button" :to="{ name: 'SignupView' }" >Sign in</router-link> -->
          <md-button class="md-raised" disabled>Sign up</md-button>
        </md-toolbar>

      </md-whiteframe>
    </nav>
  </header>

  <main class="index-container__main index-main container">

    <div class="index-main__logo row">
      <div class="col-12">
        <img src="https://placehold.it/1000x300?text=Main+Logo" alt="Logo">
      </div>
    </div>

    <div class="index-main__content-row row">

      <div class="col-6" v-html="featureText"></div>

      <div class="col-6">
        <img src="https://placehold.it/400x400?text=Sign+up+Component" alt="Sign up box">
      </div>

    </div>

    <div class="index-main__content-row row">

      <div class="col-6" v-html="featureText"></div>
      <div class="col-6" v-html="featureLogo"></div>

    </div>

    <div class="index-main__content-row row">

      <div class="col-6" v-html="featureLogo"></div>
      <div class="col-6" v-html="featureText"></div>

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
          <p class="md-headline">Et adipisicing officia consectetur excepteur.</p>
          <p class="md-body-1">Veniam velit in anim velit exercitation labore fugiat anim culpa.</p>
          <p class="md-body-1">Commodo est magna minim ipsum labore exercitation.</p>
          <p class="md-body-1">Proident magna culpa cillum ea reprehenderit id velit laborum esse ut eu.</p>`,
      featureLogo: `
          <img src="https://placehold.it/400x400?text=Screenshot">`,
    };
  },

  computed: {
  },

  methods: {
    signIn() {
      this.$store.getters.lock.show();
    },
  },
};
</script>

<style lang="less">
@import '../assets/css/colors.less';
@import '../assets/css/keylines.less';

.index-container {
  background-color: @color-background;

  &__navbar {
    position: fixed;
    width: 100%;
  }

  &__main {
    padding-top: @navbar-height;
    padding-bottom: @navbar-height;
  }
}

.index-main {
  &__logo img {
    width: 100%;
  }

  &__content-row {
    padding-top: @navbar-height;
  }

  &__content-row > .col-6 {
    text-align: center;
  }
}
</style>
