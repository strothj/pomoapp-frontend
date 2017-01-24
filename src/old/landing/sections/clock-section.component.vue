<template>
<split-section padding="right">
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
</template>

<script>
import SplitSection from '../shared/split-section.component';
import ResponsiveImage from '../shared/responsive-image.component';

export default {
  data() {
    return {
      pomodoroImages: {
        desktop: '/static/screenshots/desktop2.png',
        mobile: '/static/screenshots/mobile2.png',
        alt: 'Pomodoro clock screenshot',
      },
    };
  },

  components: {
    SplitSection,
    ResponsiveImage,
  },
};
</script>
