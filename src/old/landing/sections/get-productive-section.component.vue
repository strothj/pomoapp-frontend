<template>
<split-section padding="left">
  <h1 slot="title">Get productive</h1>
  <div slot="left">
    <p>Organize your work into easy to finish goals using the project manager.</p>
  </div>
  <responsive-image
    :images="projectManagerImages"
    slot="right"></responsive-image>
</split-section>
</template>

<script>
import SplitSection from '../shared/split-section.component';
import ResponsiveImage from '../shared/responsive-image.component';

export default {
  data() {
    return {
      projectManagerImages: {
        desktop: '/static/screenshots/desktop1.png',
        mobile: '/static/screenshots/mobile1.png',
        alt: 'Project manager screenshot',
      },
    };
  },

  components: {
    SplitSection,
    ResponsiveImage,
  },
};
</script>
