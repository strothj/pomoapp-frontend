<template>
<div>
  <service-error></service-error>

  <md-layout class="container" md-tag="main">
    <md-layout md-column md-flex="40" md-flex-small="100" :md-hide-small="projectsSmallHide">
      <project-manager></project-manager>
    </md-layout>

    <md-layout md-column md-flex="5" md-hide-small></md-layout>

    <md-layout md-column :md-hide-small="tasksSmallHide">
      <task-manager v-if="$route.params.projectId"></task-manager>
    </md-layout>

  </md-layout>

</div>
</template>

<script>
import ServiceError from '../shared/service-error.component';
import PageLayout from '../shared/page-layout.component';
import ProjectManager from './project-manager.component';
import TaskManager from './task-manager.component';

export default {
  computed: {
    // Hide projects list if a project is selected on small resolution so tasks
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

  components: {
    ServiceError,
    PageLayout,
    ProjectManager,
    TaskManager,
  },
};
</script>
