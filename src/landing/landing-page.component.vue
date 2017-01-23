<template>
<div>
  <landing-sidenav ref="sidenav"></landing-sidenav>

  <landing-appbar @onMenuClicked="$refs.sidenav.open()"></landing-appbar>

  <hero-section class="landing-section landing-section--hero" id="pomoapp"></hero-section>

  <get-productive-section class="landing-section" id="productive"></get-productive-section>

  <demo-section></demo-section>

  <clock-section class="landing-section" id="pomodoro-clock"></clock-section>

  <pomodoro-technique-section class="landing-section" id="pomodoro-technique"></pomodoro-technique-section>

  <footer-section></footer-section>
</div>
</template>

<script>
import LandingSidenav from './landing-sidenav.component';
import LandingAppbar from './landing-appbar.component';
import HeroSection from './sections/hero-section.component';
import DemoSection from './demo/demo-section.component';
import GetProductiveSection from './sections/get-productive-section.component';
import ClockSection from './sections/clock-section.component';
import PomodoroTechniqueSection from './sections/pomodoro-technique-section.component';
import FooterSection from './sections/footer-section.component';

export default {
  components: {
    LandingSidenav,
    LandingAppbar,
    HeroSection,
    DemoSection,
    GetProductiveSection,
    ClockSection,
    PomodoroTechniqueSection,
    FooterSection,
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
