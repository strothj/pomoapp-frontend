<template>
<div>
  <sign-in ref="signinDialog"></sign-in>
  <sign-up ref="signupDialog"></sign-up>

  <landing-appbar></landing-appbar>

  <hero-section class="landing-section landing-section--hero"></hero-section>

  <get-productive-section class="landing-section"></get-productive-section>

  <clock-section class="landing-section"></clock-section>

  <pomodoro-technique-section class="landing-section"></pomodoro-technique-section>

  <footer-section></footer-section>
</div>
</template>

<script>
import LandingAppbar from './landing-appbar.component';
import HeroSection from './sections/hero-section.component';
import GetProductiveSection from './sections/get-productive-section.component';
import ClockSection from './sections/clock-section.component';
import PomodoroTechniqueSection from './sections/pomodoro-technique-section.component';
import FooterSection from './sections/footer-section.component';
import SignIn from '../accounts/signin.component';
import SignUp from '../accounts/signup.component';

export default {
  components: {
    LandingAppbar,
    HeroSection,
    GetProductiveSection,
    ClockSection,
    PomodoroTechniqueSection,
    FooterSection,
    SignIn,
    SignUp,
  },
};
</script>

<style lang="less">
@import "../assets/keylines.less";

.landing-section {
  padding: 16px;
  .not-mobile({ padding: 60px 20px; });
}
</style>
