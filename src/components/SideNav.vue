<template>
<md-sidenav class="sidenav sidenav--theme-dark md-left" ref="sideNav">
  <profile-toolbar></profile-toolbar>

  <!-- Links to Projects View and Tasks View -->
  <md-list class="md-transparent">
    <md-list-item @click="navigate('/projects')">
      <span>Projects</span>
    </md-list-item>

    <md-list-item @click="navigate(selectedProjectHref)" v-if="selectedProjectHref">
      <span>Tasks</span>
    </md-list-item>

  </md-list>
  <div class="vertical-padding"></div>


  <!-- Quick accesss links to favorited items, projects list, and tasks list -->
  <list-control title="Favorites" category="favorites" class="list--compact"></list-control>

</md-sidenav>
</template>

<script>
import ProfileToolbar from './ProfileToolbar';
import ListControl from './ListControl';

export default {
  computed: {
    selectedProjectHref() {
      return this.$store.getters.selectedProjectHref;
    },
  },

  methods: {
    toggle() {
      this.$refs.sideNav.toggle();
    },
    navigate(href) {
      this.$router.push(href);
      this.$refs.sideNav.close();
    },
  },

  components: {
    ProfileToolbar,
    ListControl,
  },
};
</script>
