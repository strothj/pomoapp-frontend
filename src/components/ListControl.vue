<template>
<div>
  <span class="md-title">{{ title }}</span>
  <ul class="list md-list md-dense md-transparent" :id="sortableId">
    <li class="md-list-item" v-for="item in items">
      <button type="button" class="md-button md-list-item-container">
        <div class="md-list-item-holder">
          <i class="list__icon md-icon material-icons" v-if="editMode && editable">edit</i>
          <span>{{ item.name }}</span>
          <button type="button" class="md-button md-icon-button md-list-action">
            <i class="list__icon md-icon material-icons" v-if="!editMode">{{ item | favoriteIcon }}</i>
            <i class="list__icon md-icon material-icons" v-else :class="sortId + '-handle'">drag_handle</i>
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
    sortableOrder: function sortableOrder() {
      console.log(`${this.category}SortOrder`); // eslint-disble-line
      console.log(this.$store.getters[`${this.category}SortOrder`]); // eslint-disble-line
      return this.$store.getters[`${this.category}SortOrder`];
    },
  },
  methods: {
    setSortOrder: function setSortOrder(order) {
      console.log(order); // eslint-disable-line
    },
  },
  mounted: function mounted() {
    const list = document.getElementById(this.sortableId);
    this.sortable = new Sortable(list, {
      handle: `.${this.sortId}-handle`,
      store: {
        get: () => (this.sortableOrder),
        set: (sortable) => { this.setSortOrder(sortable.toArray()); },
      },
    });
  },
};
</script>
