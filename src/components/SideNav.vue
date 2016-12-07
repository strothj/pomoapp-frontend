<template>
<md-sidenav class="sidenav md-left" ref="sideNav">
  <profile-toolbar></profile-toolbar>

  <!-- Links to Projects View and Tasks View -->
  <md-list class="md-transparent">
    <md-subheader>Navigation</md-subheader>
    <md-list-item href="/projects">
      <md-icon class="md-accent">view_list</md-icon><span>Projects</span>
    </md-list-item>
    <md-list-item :href="selectedProjectHref" v-if="selectedProjectHref">
      <md-icon class="md-accent">list</md-icon><span>Tasks</span>
    </md-list-item>
  </md-list>

  <!-- Quick accesss links to favorited items, projects list, and tasks list -->
  <md-list class="md-transparent">

    <!-- Favorited Items -->
    <!--
    <md-list-item v-if="favoritedItems.length > 0">
      <md-icon>bookmark_border</md-icon>
      <span>Favorites</span>

      <md-list-expand>
        <md-list class="md-transparent">
          <md-list-item v-for="item in favoritedItems" class="md-inset" :href="item.href">{{ item.name }}</md-list-item>
        </md-list>
      </md-list-expand>
    </md-list-item>
    -->

    <!-- Project List -->
    <!--
    <md-list-item v-if="projects.length > 0">
      <md-icon>view_list</md-icon>
      <span>Projects</span>

      <md-list-expand>
        <md-list class="md-transparent">
          <md-list-item v-for="project in projects" class="md-inset" :href="'/projects/' + project.id">{{ project.name }}</md-list-item>
        </md-list>
      </md-list-expand>
    </md-list-item>
    -->

    <!-- Tasks List -->
    <!--
    <md-list-item v-if="selectedProjectTasks.length > 0">
      <md-icon>list</md-icon>
      <span>Tasks</span>

      <md-list-expand>
        <md-list class="md-transparent">
          <md-list-item v-for="task in selectedProjectTasks" :href="'/projects/' + selectedProjectId + '/pomodoro'" class="md-inset">{{ task.name }}</md-list-item>
        </md-list>
      </md-list-expand>
    </md-list-item>
    -->

  </md-list>

</md-sidenav>
</template>

<script>
// import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
import ProfileToolbar from './ProfileToolbar';

export default {
  computed: {
    ...mapState([
      'user',
    ]),

    // ...mapGetters([
    //   'userFullName',
    //   'userEmailAddress',
    //   'userAvatar',
    //   'selectedProjectId',
    //   'selectedProjectHref',
    //   'favoritedItems',
    //   'projects',
    //   'selectedProjectTasks',
    // ]),
  },
  methods: {
    toggle() {
      this.$refs.sideNav.toggle();
    },
  },
  components: {
    ProfileToolbar,
  },
};
</script>

<style lang="less">
.sidenav {
  .md-sidenav-content {
    background-color: #303030 !important;
  }

  .md-list-item-container {
    background-color: transparent !important;
  }

  .md-icon {
    color: white !important;
  }
}
</style>
