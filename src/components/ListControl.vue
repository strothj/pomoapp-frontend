<template>
<div>
  <!--  Using a manually created list to work around vue-material
        capturing the events needed for sortablejs. -->
  <span class="md-title">{{ title }}</span>
  <ul class="list md-list md-dense md-transparent" :id="sortableId">
    <li class="md-list-item" v-for="item in items">
      <button type="button" class="md-button md-list-item-container">
        <div class="md-list-item-holder">
          <i class="list__icon md-icon material-icons" v-if="editMode && editable">edit</i>
          <span>{{ item.name }}</span>
          <button type="button" class="md-button md-icon-button md-list-action">
            <i class="list__icon md-icon material-icons" v-if="!editMode">{{ item | favoriteIcon }}</i>
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
    sortable: null,
    sortableId: uniqueId('sortable-list-'),
  }),
  filters: {
    favoriteIcon: function favoriteIcon(item) {
      return item.favorited ? 'favorite' : 'favorite_border';
    },
  },
  computed: {
    editMode: function editMode() { return this.$store.state.editMode; },
    items: function items() {
      return this.$store.getters[this.category];
    },
    sortOrder: function sortOrder() {
      let order = this.$store.getters[`${this.category}SortOrder`];
      order = order ? order.split('|') : [];
      return order;
    },
  },
  methods: {
    setSortOrder: function setSortOrder(order) {
      this.$store.dispatch(`${this.category}UpdateSortOrder`, order.join('|'));
    },
  },
  mounted: function mounted() {
    const list = document.getElementById(this.sortableId);
    this.sortable = new Sortable(list, {
      handle: `.${this.sortableId}-handle`,
      dataIdAddr: `${this.sortableId}-data`,
      store: {
        get: () => (this.sortOrder),
        set: (sortable) => { this.setSortOrder(sortable.toArray()); },
      },
    });
  },
  updated: function updated() {
    this.sortable.sort(this.sortOrder);
  },
};
</script>
