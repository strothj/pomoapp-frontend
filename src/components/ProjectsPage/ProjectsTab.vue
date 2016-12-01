<template lang="pug">
div(class="page-content")
  sortable-list(
    ":items"="projectsAsListItems"
    ":sortOrder"="projectsListSortOrder"
    "@sortChanged"="updateProjectsListSortOrder"
  )

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SortableList from './SortableList';

export default {
  computed: {
    ...mapGetters([
      'projectsAsListItems',
      'projectsListSortOrder',
    ]),
  },
  methods: {
    ...mapActions(['updateProjectsListSortOrder']),
  },
  components: {
    SortableList,
  },
};
</script>

<style scoped>
/*a:hover {
  cursor: pointer;
}

.add-button {
  position: fixed;
  bottom: 12px;
  right: 12px;
}

.page-content {
  padding-bottom: 42px;
}*/
</style>
