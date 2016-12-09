<template>
<div>
  <!--  Using a manually created list control to work around vue-material
        capturing the events needed for sortablejs. -->
  <span class="md-title">{{ title }}</span>
  <ul class="list md-list md-dense md-transparent" ref="list">

    <li class="md-list-item" v-for="item in items" :sorting-id="item.id">
      <button type="button" class="md-button md-list-item-container">
        <div class="md-list-item-holder">

          <!-- Edit icon (shown in edit mode) -->
          <i class="list__icon md-icon material-icons" v-if="editMode && editable">edit</i>

          <span>{{ item.name }}</span>

          <!-- Secondary action button -->
          <button type="button" class="md-button md-icon-button md-list-action" @click="toggleFavorite(item)">
            <!-- Show favorite toggle button in normal mode -->
            <i class="list__icon md-icon material-icons" v-if="!editMode">{{ item | favoriteIcon }}</i>
            <!-- Show sorting grip button in edit mode -->
            <i class="list__icon md-icon material-icons" v-else :class="sortableId + '-handle'">drag_handle</i>
          </button>

        </div>
      </button>
    </li>

  </ul>
</div>
</template>

<script>
import Sortable from 'sortablejs';
import uniqueId from 'lodash.uniqueid';

export default {
  props: ['title', 'category', 'editable'],

  data: () => ({
    // Sortable instance
    sortable: null,
    sortableId: uniqueId('sortable-list-'),
  }),

  filters: {
    favoriteIcon(item) { return item.favorited ? 'favorite' : 'favorite_border'; },
  },

  computed: {
    editMode() { return this.$store.state.editMode; },
    items() { return this.$store.getters[this.category]; },

    sortOrder: {
      get() {
        let order = this.$store.getters[`${this.category}SortOrder`];
        order = order ? order.split('|') : [];
        return order;
      },
      set(order) {
        this.$store.dispatch('UPDATE_SORT', {
          category: this.category,
          order: order.join('|'),
        });
      },
    },
  },

  methods: {
    toggleFavorite(item) {
      if (this.editMode) return;
      const newItem = Object.assign({}, item);
      newItem.favorited = !newItem.favorited;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },
  },

  mounted() {
    this.sortable = new Sortable(this.$refs.list, {
      handle: `.${this.sortableId}-handle`,
      dataIdAttr: 'sorting-id',
      store: {
        get: () => (this.sortOrder),
        set: (sortable) => { this.sortOrder = sortable.toArray(); },
      },
    });
  },

  updated() {
    this.sortable.sort(this.sortOrder);
  },
};
</script>
