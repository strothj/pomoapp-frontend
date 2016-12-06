<template lang="pug">
ul(
  class="mdl-list"
  ref="list"
)
  sortable-list-item(
    "v-for"="item in items"
    ":sortableClass"="sortableClass"
  ) {{ item.text }}
</template>

<script>
import uniqueId from 'lodash.uniqueid';
import Sortable from 'sortablejs';
import SortableListItem from './SortableListItem';

export default {
  data: () => ({
    sortable: null,
    // Class name used for Sortable. Allows Sortable to use the 'reorder' icon
    // as the drag handle.
    sortableClass: uniqueId('sortable-list-'),
  }),
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        for (let i = 0; i < items; i += 1) {
          if (!items[i].text) return false;
        }
        return true;
      },
    },
    sortOrder: {
      type: Array,
      required: true,
    },
  },
  mounted: function mounted() {
    this.sortable = new Sortable(this.$refs.list, {
      handle: `.${this.sortableClass}`,
      store: {
        get: () => (this.sortOrder),
        set: (sortable) => { this.$emit('sortChanged', sortable.toArray()); },
      },
    });
  },
  components: {
    SortableListItem,
  },
};
</script>
