<template lang="pug">
  page-layout
    projects-tab(slot="projects-list-tab")
</template>

<script>
import PageLayout from 'components/ProjectsPage/PageLayout';
import ProjectsTab from 'components/ProjectsPage/ProjectsTab';

export default {
  components: {
    PageLayout,
    ProjectsTab,
  },
};
</script>

<style lang="less" scoped>
</style>
