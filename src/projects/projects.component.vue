<template>
<page-frame>

  <div class="centered-content">
  <md-layout>
    <md-layout md-column md-flex="40" md-flex-small="100" :md-hide-small="projectsSmallHide">
      <project-manager></project-manager>
    </md-layout>

    <md-layout md-column md-flex="5" md-hide-small></md-layout>

    <md-layout md-column :md-hide-small="tasksSmallHide">
      <task-manager v-if="$route.params.projectId"></task-manager>
    </md-layout>

  </md-layout></div>

  <md-list slot="sidenav">
    <md-list-item v-for="project in $store.state.projects.projects">
      <span>{{ project.name }}</span>
    </md-list-item>
  </md-list>

</page-frame>
</template>

<script>
import PageFrame from '../shared/page-frame.component';
import ProjectManager from './project-manager.component';
import TaskManager from './task-manager.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    // Hide projects list if a project is select on small resolution so tasks
    // list takes up the entire display. Users can navigate back or use the menu
    // button to switch projects.
    projectsSmallHide() {
      if (this.$route.params.projectId) return true;
      return false;
    },

    // See comment on projectsSmallHide.
    tasksSmallHide() {
      if (this.$route.params.projectId) return false;
      return true;
    },
  },

  methods: {
  },

  components: {
    PageFrame,
    ProjectManager,
    TaskManager,
  },
};
</script>
