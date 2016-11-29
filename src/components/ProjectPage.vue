<template lang="pug">
page-layout
  div(class='container')
    div(class='row')
      div(class='hide-on-med-and-down col l4')
        project-list

</template>

<script>
import PageLayout from './PageLayout';
import ProjectList from './ProjectList';

export default {
  components: {
    PageLayout,
    ProjectList,
  },
};
</script>

<style lang="less" scoped>
</style>
