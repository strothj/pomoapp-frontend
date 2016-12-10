<template>
<div class="list">
  <!--  Using a manually created list control to work around vue-material
        capturing the events needed for sortablejs and input box. -->
  <span class="list__title md-title">{{ title }}</span>
  <ul class="md-list md-dense md-transparent" ref="list">

    <li class="md-list-item" v-for="item in items" :sorting-id="item.id">
      <button class="md-button md-list-item-container"
        @click="primaryAction($event, item)">
        <div class="md-list-item-holder">

          <!-- Edit icon (shown in edit mode) -->
          <!-- Hide when item is being edited -->
          <i class="list__icon md-icon material-icons" v-if="editMode && editable && item.id !== editTarget">edit</i>

          <!-- Show span when item is not being edited -->
          <span class="list__text" v-if="item.id !== editTarget">{{ item.name }}</span>
          <!-- Show input when item is being edited -->
          <div class="list__input md-input-container md-has-value md-input-focused" v-if="item.id === editTarget">
            <input class="md-input" v-model="editTargetValue" v-focus
              @blur="editItemDone($event, item)"
              @keyup="editItemDone($event, item)"></md-input>
          </div>

          <!-- Secondary action button -->
          <button type="button" class="md-button md-icon-button md-list-action" @click="secondaryAction($event, item)">
            <!-- Show favorite toggle button in normal mode -->
            <i class="list__icon md-icon material-icons" v-if="!editMode">{{ item | favoriteIcon }}</i>
            <!-- Show sorting grip button in edit mode -->
            <i class="list__icon md-icon material-icons" v-if="sortable && editMode && item.id !== editTarget" :class="sortableId + '-handle'">drag_handle</i>
          </button>

        </div>
      </button>
    </li>

  </ul>

  <!-- Show new item input in edit mode -->
  <md-button class="md-icon-button" v-if="editMode && editable && !editTarget"
    @click="addItem">
    <md-icon>add</md-icon>
  </md-button>

</div>
</template>

<script>
import Sortable from 'sortablejs';
import uniqueId from 'lodash.uniqueid';

export default {
  props: ['title', 'category', 'sortable', 'editable'],

  data: () => ({
    // Sortable instance
    sortableJs: null,
    sortableId: uniqueId('sortable-list-'),
    editTarget: null,
    editTargetValue: null,
  }),

  filters: {
    favoriteIcon(item) { return item.favorited ? 'bookmark' : 'bookmark_border'; },
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
      const newItem = Object.assign({}, item);
      newItem.favorited = !newItem.favorited;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },

    addItem() {
      const name = prompt('Enter name of item'); // eslint-disable-line no-alert
      if (!name || name.trim() === '') return;
      this.$store.dispatch('ITEM_ADDED', {
        category: this.category,
        name,
      });
    },

    editItem(item) {
      if (item.id === this.editTarget) return;
      this.editTarget = item.id;
      this.editTargetValue = item.name;
    },

    editItemDone(event, item) {
      if (event.keyCode && event.keyCode !== 13) return;
      if (this.editTarget === null) return;
      if (this.editTarget === item.id) this.editTarget = null;
      if (this.editTargetValue === item.name) {
        this.editTargetValue = null;
        return;
      }
      const newItem = Object.assign({}, item);
      newItem.name = this.editTargetValue.trim();
      this.editTargetValue = null;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },

    primaryAction(event, item) {
      if (this.editMode && this.editable) {
        this.editItem(item);
        return;
      }
      this.$router.push(item.href);
    },

    secondaryAction(event, item) {
      // Stop propagation to prevent primaryAction handler from firing.
      event.stopPropagation();
      if (this.editMode) return;
      this.toggleFavorite(item);
    },
  },

  mounted() {
    this.sortableJs = new Sortable(this.$refs.list, {
      handle: `.${this.sortableId}-handle`,
      dataIdAttr: 'sorting-id',
      store: {
        get: () => (this.sortOrder),
        set: (sortable) => { this.sortOrder = sortable.toArray(); },
      },
    });
  },

  directives: {
    focus: {
      inserted(el) { el.focus(); },
    },
  },

  updated() {
    /**
     * Force Sortable to sort the list items when the state changes.
     * Don't perform sort when an item is being edited because the item will
     * loose focus.
     */
    if (this.editTarget) return;
    this.sortableJs.sort(this.sortOrder);
  },
};
</script>
