<template>
<div>
  <span class="md-title">{{ title }}</span>
  <md-list class="list md-dense md-transparent" :id="sortId" ref="list">
    <md-list-item v-for="item in items">
      <md-icon class="list__icon" v-if="editMode && editable">edit</md-icon>
      <span>{{ item.name }}</span>
      <md-button class="md-icon-button md-list-action">
        <md-icon class="list__icon" v-if="!editMode">{{ item | favoriteIcon }}</md-icon>
        <md-icon class="list__icon" v-else :class="sortId + '-handle'">drag_handle</md-icon>
      </md-button>
    </md-list-item>
  </md-list>
</div>
</template>

<script>
// import Sortable from 'sortablejs';
import uniqueId from 'lodash.uniqueid';

export default {
  props: ['title', 'category', 'editable'],
  data: () => ({
    sortable: null,
    sortId: uniqueId('sortable-list-'),
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
  },
  updated: function mounted() {
    /* eslint-disable no-console */
    // const list = document.getElementById(this.sortId);
    // console.log(list);
    // this.sortable = Sortable.create(list, {
    //   handle: `.${this.sortId}-handle`,
    //   onStart: function onStart(evt) {
    //     console.log(evt);
    //   },
    // });
  },
};
</script>
