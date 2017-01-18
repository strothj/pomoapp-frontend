<template>
<item-manager
  title="Projects"
  :list="projects"
  itemType="project"
  @addItem="addItem"
  @editItems="editItems"
  @deleteItems="deleteItems"
  @itemClicked="itemClicked"></item-manager>
</template>

<script>
import { mapState } from 'vuex';
import ItemManager from './shared/item-manager.component';

export default {
  computed: {
    ...mapState({
      projects: state => state.projects.projects,
    }),
  },

  methods: {
    addItem({ name }) {
      this.$store.dispatch('ADD_PROJECT', {
        name, favorited: false, archived: false,
      });
    },

    editItems(projects) {
      this.$store.dispatch('UPDATE_PROJECTS', projects);
    },

    deleteItems(projects) {
      this.$store.dispatch('DELETE_PROJECTS', projects);
    },

    itemClicked(project) {
      this.$router.push(`/projects/${project.id}`);
    },
  },

  components: {
    ItemManager,
  },
};
</script>
