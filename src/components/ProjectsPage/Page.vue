<template lang="pug">
page-layout
  projects-tab(slot="projects-list-tab")
</template>

<script>
import PageLayout from './PageLayout';
import ProjectsTab from './ProjectsTab';

export default {
  components: {
    PageLayout,
    ProjectsTab,
  },
};
</script>
