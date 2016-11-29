<template lang="pug">
ul(class='collection')
  li(class='collection-item') Projects
  project-list-item(v-for='project in projects' ':projectId'='project.id')

</template>

<script>
// a(':class'='{ active: project.id === selectedProject }' v-for='project in
// projects' class='collection-item' href='#') {{ project.name }}
import { mapState } from 'vuex';
import ProjectListItem from './ProjectListItem';

export default {
  computed: {
    ...mapState(['projects']),
  },
  components: {
    ProjectListItem,
  },
};
</script>
