<template lang="pug">
ul(class='collection with-header')
  li(class='collection-header') Projects
  a(':class'='{ active: project.id === selectedProject }' v-for='project in projects' class='collection-item' href='#') {{ project.name }}
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['projects', 'selectedProject']),
  },
};
</script>
