<template lang="pug">
a(class='collection-item' href='#' ':class'='{ active: isActive }')
  i(class='material-icons bullet' ':class'='bulletColorClass') fiber_manual_record
  span {{ project.name }}
  a(href='##' class='secondary-content'): i(class='material-icons') reorder
</template>

<script>
export default {
  props: ['projectId'],
  computed: {
    project() {
      return this.$store.getters.projectsById[this.projectId];
    },
    bulletColorClass() {
      return `bullet-color-${this.project.bulletColor}`;
    },
    isActive() {
      return this.project.id === this.$store.state.selectedProject;
    },
  },
};
</script>

<style scoped>
i.bullet {
  display: inline-block;
  font-size: 1rem;
  padding-right: 2px;
  vertical-align: bottom;
  line-height: 1.6rem;
}
</style>
