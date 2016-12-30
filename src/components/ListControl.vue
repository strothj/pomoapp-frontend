<template>
<div class="list-container">
  <md-list class="list-container__title md-transparent md-dense">
    <md-subheader v-if="title">{{ title }}</md-subheader>
  </md-list>

  <sortable-list
    handle=".drag-handle"
    data-id-attr="sorting-id"
    :sort-order="sortOrder"
    @sortChanged="onSortChanged"
    class="md-double-line">

    <md-list-item
      v-for="item in items"
      v-if="Boolean(archiveView) === item.archived"
      :key="item.id + archiveView"
      :sorting-id="item.id"
      @click="onItemClicked(item)">

      <md-icon class="drag-handle" v-if="sortable">drag_handle</md-icon>
      <div class="list-container__list-item md-list-text-container">
        <span>{{ item.name }}</span>
        <span v-if="item.projectId && category === 'favorites'">{{ projectName(item) }}</span>
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

  <md-list class="md-transparent md-dense" v-if="editable && !archiveView">
    <md-list-item @click="onAddItemClicked">
      <md-icon>add</md-icon>
      <span>{{ addNewItemLinkText }}</span>
    </md-list-item>
    <md-list-item @click="showArchived = !showArchived">
      <md-icon>archive</md-icon>
      <span v-if="!showArchived">Show archived {{ category }}</span>
      <span v-else>Hide archived {{ category }}</span>
    </md-list-item>
  </md-list>

  <list-control v-if="!archiveView && showArchived" :category="category" editable="true" archiveView="true"></list-control>

</div>
</template>

<script>
import EditMenu from './EditMenu';
import SortableList from './SortableList';

export default {
  name: 'list-control',
  props: ['editable', 'title', 'category', 'archiveView', 'sortable'],

  data() {
    return {
      addNewItemLinkText: `Add new ${this.category === 'projects' ? 'project' : 'task'}`,
      showArchived: false,
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

    onAddItemClicked() {
      // TODO: Replace with popup modal
      const name = prompt('Enter name of item'); // eslint-disable-line no-alert
      if (!name || name.trim() === '') return;
      this.$store.dispatch('ITEM_ADDED', {
        category: this.category,
        name,
      });
    },

    projectName(item) {
      const project = this.$store.getters.projects.find((element) => {
        if (element.id !== item.projectId) return false;
        return true;
      });
      return project ? project.name : '';
    },
  },

  components: {
    EditMenu,
    SortableList,
  },
};
</script>

<style lang="less">
.list-container {
  &__title > li {
    padding-top: 25px;
  }
}

.drag-handle {
  margin-right: 10px !important;
  color: rgba(0, 0, 0, 0.30) !important;
}
</style>
