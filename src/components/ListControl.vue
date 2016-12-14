<template>
<div class="list-container">
  <sortable-list
    handle=".drag-handle"
    data-id-attr="sorting-id"
    :sort-order="sortOrder"
    @sortChanged="onSortChanged"
    class="md-double-line">

    <md-subheader>{{ title }}</md-subheader>

    <md-list-item
      v-for="item in items"
      v-if="Boolean(archiveView) === item.archived"
      :sorting-id="item.id"
      @click="onItemClicked(item)">

      <md-icon class="drag-handle">drag_handle</md-icon>
      <div class="list-container__list-item md-list-text-container">
        <span>{{ item.name }}</span>
        <span v-if="item.projectId">{{ projectName(item) }}</span>
      </div>

      <edit-menu
        :item="item"
        :category="category"
        :archiveView="archiveView"
        v-if="editable">
        <md-button class="md-icon-button md-list-action" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>
      </edit-menu>

      <md-button
        class="md-icon-button md-list-action"
        @click.native.stop="onToggleFavoriteClicked(item)"
        v-if="!archiveView">
        <md-icon class="md-accent" v-if="item.favorited">star</md-icon>
        <md-icon class="md-accent" v-else>star_outline</md-icon>
      </md-button>

    </md-list-item>

  </sortable-list>
</div>
</template>

<script>
import EditMenu from './EditMenu';
import SortableList from './SortableList';

export default {
  props: ['editable', 'title', 'category', 'archiveView'],

  data() {
    return {
    };
  },

  computed: {
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
    onSortChanged({ sortOrder }) {
      this.sortOrder = sortOrder;
    },

    onItemClicked(item) {
      // Emit NAVIGATED event so that things like the sidenav know to close.
      this.$store.dispatch('NAVIGATED');
      this.$router.push(item.href);
    },

    onToggleFavoriteClicked(item) {
      const newItem = Object.assign({}, item);
      newItem.favorited = !newItem.favorited;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },

    projectName(item) {
      return this.$store.getters.projects.find((element) => {
        if (element.id !== item.projectId) return false;
        return true;
      }).name;
    },
  },

  components: {
    EditMenu,
    SortableList,
  },
};
</script>

<style lang="less">
.list-container__list-item > span {
  // overflow: auto;
  // text-overflow: ellipsis !important;
}
</style>
