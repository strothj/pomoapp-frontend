<template>
<item-manager
  title="Tasks"
  :list="tasks"
  itemType="items"
  @addItem="addItem"
  @editItems="editItems"
  @deleteItems="deleteItems"
  @itemClicked="itemClicked"></item-manager>
</template>

<script>
import { mapState } from 'vuex';
import ItemManager from './shared/item-manager.component';

export default {
  props: [],

  data() {
    return {
    };
  },

  computed: {
    ...mapState({
      tasks: state => state.projects.tasks,
    }),
  },

  methods: {
    addItem() {
      //
    },

    editItems(tasks) {
      //
      this.tasks = tasks;
    },

    deleteItems(tasks) {
      //
      this.tasks = tasks;
    },

    itemClicked(task) {
      this.$router.push(`/projects/${task.projectId}/${task.id}`);
    },
  },

  components: {
    ItemManager,
  },
};
</script>
