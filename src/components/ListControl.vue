<template>
<div class="list">
  <!--  Using a manually created list control to work around vue-material
        capturing the events needed for sortablejs and input box. -->
  <span class="list__title md-display-1">{{ title }}</span>
  <ul class="md-list md-dense md-transparent" ref="list">

    <li class="md-list-item" v-for="item in items" :sorting-id="item.id">
      <button class="list__button md-button md-list-item-container"
        @click="primaryAction($event, item)"
        v-if="Boolean(archiveView) === item.archived">

        <!-- Hide list item contents while it is being edited -->
        <div class="md-list-item-holder" v-if="item.id !== editTarget">

          <!-- Drag handle icon -->
          <img class="list__icon list__icon--grabbable md-icon"
            :class="sortableId + '-handle'"
            v-if="sortable"
            @click.stop src="~assets/icons/drag-vertical.png"
            style="color: white;">

          <span class="list__text md-body-1">{{ item.name }}</span>

          <!--- Edit drop down menu button, hidden in edit mode -->
          <md-menu @click.native.stop md-size="4" md-align-trigger
            v-if="!editMode && editable">
            <md-button md-menu-trigger class="md-icon-button">
              <i class="list__icon md-icon material-icons">more_vert</i>
            </md-button>
            <md-menu-content>
              <md-menu-item @click="toggleArchive(item)">
                <md-icon>archive</md-icon>
                <span v-if="!archiveView">Archive</span>
                <span v-else="archiveView">Unarchive</span>
              </md-menu-item>
              <md-menu-item @click="editItem(item)">
                <md-icon>edit</md-icon>
                <span>Edit</span>
              </md-menu-item>
              <md-menu-item @click="deleteItem(item)">
                <md-icon>delete_forever</md-icon>
                <span>Delete</span>
              </md-menu-item>
            </md-menu-content>
          </md-menu>

          <!-- Star button, hidden in edit mode -->
          <i class="list__icon md-icon material-icons"
            :class="{ 'md-accent': item.favorited }"
            v-if="!editMode && !archiveView" @click="toggleFavorite($event, item)">
              {{ item | favoriteIcon }}
          </i>

          <!-- Show edit icon when in edit mode -->
          <i class="list__icon md-icon material-icons"
            v-if="editMode && editable">edit</i>

        </div>

        <!-- Replace list item contents with edit form while it is being edited-->
        <!-- Show input when item is being edited -->
        <div class="list__input md-input-container md-has-value md-input-focused"
           v-if="item.id === editTarget">
          <input class="md-input" v-model="editTargetValue" v-focus
            @blur="editItemDone($event, item)"
            @keyup.enter="editItemDone($event, item)">
        </div>

      </button>
    </li>

  </ul>

  <!-- Show new item input when list is editable -->
  <button class="list__add-item-button md-button"
    @click="addItem" v-if="editable && !archiveView">
    <i class="md-icon material-icons">add</i>
    <span class="md-body-1">{{ addNewItemLinkText }}</span>
  </button>

</div>
</template>

<script>
import Sortable from 'sortablejs';
import uniqueId from 'lodash.uniqueid';

export default {
  props: ['title', 'category', 'sortable', 'editable', 'archiveView'],

  data() {
    return {
      // Sortable instance
      sortableJs: null,
      sortableId: uniqueId('sortable-list-'),
      editTarget: null,
      editTargetValue: null,
      addNewItemLinkText: `Add new ${this.category === 'projects' ? 'project' : 'task'}`,
    };
  },

  filters: {
    favoriteIcon(item) { return item.favorited ? 'star' : 'star_border'; },
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
    addItem() {
      const name = prompt('Enter name of item'); // eslint-disable-line no-alert
      if (!name || name.trim() === '') return;
      this.$store.dispatch('ITEM_ADDED', {
        category: this.category,
        name,
      });
    },

    toggleArchive(item) {
      const newItem = Object.assign({}, item);
      newItem.archived = !newItem.archived;
      if (newItem.archived && newItem.favorited) newItem.favorited = false;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },

    editItem(item) {
      if (item.id === this.editTarget) return;
      this.editTarget = item.id;
      this.editTargetValue = item.name;
    },

    editItemDone(event, item) {
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

    deleteItem(item) {
      this.$store.dispatch('ITEM_DELETE', {
        category: this.category,
        item,
      });
    },

    primaryAction(event, item) {
      if (this.editMode && this.editable) {
        this.editItem(item);
        return;
      }
      this.$store.dispatch('NAVIGATED');
      this.$router.push(item.href);
    },

    toggleFavorite(event, item) {
      // Stop propagation to prevent primaryAction handler from firing.
      event.stopPropagation();
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
