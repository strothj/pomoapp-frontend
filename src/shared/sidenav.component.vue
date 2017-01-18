<template>
<md-sidenav class="md-left md-fixed" ref="sidenav">
  <md-toolbar>
    <profile></profile>
  </md-toolbar>

  <md-list>
    <md-list-item @click="onHomeClicked">
      <span>Home</span>
      <md-divider></md-divider>
    </md-list-item>

    <md-subheader v-if="shouldShowProjectsList">
      Projects
    </md-subheader>
    <md-list-item
      v-if="shouldShowProjectsList"
      v-for="(project, index) in $store.state.projects.projects"
      @click="onProjectClicked(project)">
        <span>{{ project.name }}</span>
      <md-divider v-if="index === $store.state.projects.projects.length - 1"></md-divider>
    </md-list-item>

    <md-list-item @click="$store.dispatch('SIGN_OUT')">
      <md-icon>exit_to_app</md-icon>
      <span>Sign out</span>
    </md-list-item>
  </md-list>

</md-sidenav>
</template>

<script>
import Profile from './profile.component';

export default {
  computed: {
    shouldShowProjectsList() {
      const projects = this.$store.state.projects.projects;
      if (!projects) return false;
      return projects.length > 0;
    },
  },

  methods: {
    open() { this.$refs.sidenav.open(); },

    onHomeClicked() {
      this.$refs.sidenav.close();
      this.$router.push({ path: '/projects' });
    },

    onProjectClicked(project) {
      this.$refs.sidenav.close();
      this.$router.push({ path: `/projects/${project.id}` });
    },
  },

  components: {
    Profile,
  },
};
</script>
