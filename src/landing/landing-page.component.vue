<template>
<div>
  <md-dialog ref="signinDialog">
    <md-dialog-title>Sign in</md-dialog-title>
    <md-dialog-content>
      <sign-in></sign-in>
    </md-dialog-content>
  </md-dialog>

  <appbar
    :transparent="true"
    @signinClicked="$refs.signinDialog.open()"></appbar>

  <hero-section class="landing-section landing-section--hero"></hero-section>

  <split-section class="landing-section" padding="left">
    <h1 slot="title">Get productive</h1>
    <div slot="left">
      <p>Organize your work into easy to finish goals using the project manager.</p>
    </div>
    <responsive-image
      :images="projectManagerImages"
      slot="right"></responsive-image>
  </split-section>

  <split-section class="landing-section" padding="right">
    <h1 slot="title">Balance work and everything else.</h1>
    <responsive-image
      :images="pomodoroImages"
      slot="left"></responsive-image>
    <div slot="right">
      <p>Start a task.</p>
      <p>Work for 25 minutes.</p>
      <p>When you hear the buzzer, take a break.</p>
      <p>After four cycles, take a long 30 minute break.</p>
    </div>
  </split-section>

  <div class="landing-section container">
    <div class="layout-centered">
      <h1>The Pomodoro Technique</h1>
    </div>
      <p>Pomoapp makes it easy to use the Pomodoro technique.</p>
      <blockquote>
      The Pomodoro Technique is a time management method developed by Francesco
      Cirillo in the late 1980s. The technique uses a timer to break down
      work into intervals, traditionally 25 minutes in length, separated by
      short breaks. These intervals are named pomodoros, the plural in English
      of the Italian word pomodoro (tomato), after the tomato-shaped kitchen
      timer that Cirillo used as a university student. -
      <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
      </blockquote>
  </div>

  <footer-section></footer-section>
</div>
</template>

<script>
import Appbar from '../shared/appbar.component';
import HeroSection from './hero-section.component';
import SplitSection from './split-section.component';
import ResponsiveImage from './responsive-image.component';
import FooterSection from './footer-section.component';
import SignIn from '../accounts/signin.component';

export default {
  props: [],

  data() {
    return {
      projectManagerImages: {
        desktop: '/static/screenshots/desktop1.png',
        mobile: '/static/screenshots/mobile1.png',
        alt: 'Project manager screenshot',
      },

      pomodoroImages: {
        desktop: '/static/screenshots/desktop2.png',
        mobile: '/static/screenshots/mobile2.png',
        alt: 'Pomodoro clock screenshot',
      },
    };
  },

  components: {
    Appbar,
    HeroSection,
    ResponsiveImage,
    SplitSection,
    FooterSection,
    SignIn,
  },
};
</script>

<style lang="less">
@import "../assets/keylines.less";

.landing-section {
  padding: 16px;
  .not-mobile({ padding: 60px 20px; });

  &--hero {
    margin-top: -64px; // Overlap appbar.
  }
}
</style>
