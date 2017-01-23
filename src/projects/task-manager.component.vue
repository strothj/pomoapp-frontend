<template>
<list-card-container
  title="Tasks"
  :list="tasks"
  itemType="task"
  @addItem="addItem"
  @editItems="editItems"
  @deleteItems="deleteItems"
  @itemClicked="itemClicked"></list-card-container>
</template>

<script>
import ListCardContainer from './shared/ListCardContainer';

export default {
  computed: {
    tasks() {
      const tasks = this.$store.state.projects.tasks;
      if (!tasks) return [];
      return tasks.filter(item => item.projectId === this.projectId);
    },

    projectId() {
      return this.$route.params.projectId;
    },
  },

  methods: {
    addItem({ name }) {
      this.$store.dispatch('ADD_TASK', {
        name, favorited: false, archived: false, projectId: this.projectId,
      });
    },

    editItems(tasks) {
      this.$store.dispatch('UPDATE_TASKS', tasks);
    },

    deleteItems(tasks) {
      this.$store.dispatch('DELETE_TASKS', tasks);
    },

    itemClicked(task) {
      this.$router.push(`/projects/${task.projectId}/${task.id}`);
    },
  },

  components: {
    ListCardContainer,
  },
};
</script>
