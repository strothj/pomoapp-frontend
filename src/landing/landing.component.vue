<template>
<page-frame>
  <div class="landing-page">

    <!-- Start call to action section -->
    <header class="landing-page--centered landing-page--white-text cta-section">
      <div class="page-content">
        <md-layout md-gutter="24" md-tag="article">
          <p class="cta-section__title md-display-1">Pomoapp helps you stay productive.</p>
          <p class="md-headline">
            Pomoapp's project manager helps you organize.<br>
            The timer makes you productive.
          </p>
          <p>
            <md-button class="md-raised md-accent" style="padding: 12px 84px" @click="$router.push('/signup')">Sign up free</md-button>
          </p>
          <p>
            Already use Pomoapp? <a href="/signin" @click.prevent="$router.push('/signin')">Sign in</a>
          </p>
        </md-layout>
    </header>
    <!-- End call to action section -->

    <article class="landing-page__section landing-page--centered landing-page--white-text background-blue-grey-800">
      <div class="page-content">
        <p class="md-title">The project manager organizes your work into projects and tasks.</p>
        <picture>
          <source srcset="/static/screenshots/desktop1.png" media="(min-width: 945px)">
          <source srcset="/static/screenshots/mobile1.png">
          <img src="/static/screenshots/desktop1.png" alt="Project Manager screenshot">
        </picture>
      </div>
    </article>

    <article class="landing-page__section landing-page--centered landing-page--white-text background-blue-700">
      <div class="page-content">
        <p class="md-title">Use the Pomodoro clock to split time between work and breaks.</p>
        <p class="md-subheading">Work for 25 minutes and then take a 5 minute break.</p>
        <p class="md-subheading">The timer will buzz letting you know it's break time.</p>
        <p class="md-subheading">Take a 30 minute break every four cycles!</p>
        <picture>
          <source srcset="/static/screenshots/desktop2.png" media="(min-width: 945px)">
          <source srcset="/static/screenshots/mobile2.png">
          <img src="/static/screenshots/desktop2.png" alt="Pomodoro clock screenshot">
        </picture>
      </div>
    </article>

    <article class="landing-page__section landing-page--centered landing-page--footer">
      <div class="page-content">
        <p class="md-title">
          Ready to go?<br>
          <br>
          <strong>Sign up for free</strong>
        </p>
        <p>
          <md-button class="md-raised md-accent" style="padding: 12px 84px" @click="$router.push('/signup')">Sign up free</md-button>
        </p>
        <p>
          Already use Pomoapp? <a href="/signin" @click.prevent="$router.push('/signin')">Sign in</a>
        </p>
      </div>
    </article>

  </div>
</page-frame>
</template>

<script>
import PageFrame from '../shared/page-frame.component';
import SignupBox from '../accounts/signup-box.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
  },

  methods: {
  },

  components: {
    PageFrame,
    SignupBox,
  },
};
</script>

<style lang="less">
@import "../assets/layout.less";

.section() {
  min-height: 500px;
  padding-top: 48px;
}

.landing-page {
  p {
    padding-left: 20px;
    padding-right: 20px;
    font-weight: normal !important;
  }

  img {
    padding-top: 48px;
  }

  &__section {
    .section();
  }

  &--white-text {
    color: white !important;
    p { color: white !important; }
  }

  &--centered {
    text-align: center;

    p { width: 100%; }
  }

  &--footer {
    min-height: 400px;
  }
}

.cta-section {
  background: linear-gradient( rgba(69,90,100,.9), rgba(69,90,100,.9) ),
    url(alarm-background.png) center right / cover no-repeat #0079bf;
  p {
    font-weight: 500 !important;
  }

  .section();
}

.background {
  &-blue-grey-800 { background-color: #263238; }
  &-blue-700 {
    background: linear-gradient( rgba(40,53,147,1), rgba(40,53,147,.8) )
  }
}
</style>
