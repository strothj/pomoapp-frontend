<template>
<div>
  <md-menu @click.native.stop md-size="4" md-align-trigger>
    <slot></slot>

    <md-menu-content>
      <md-menu-item @click="onArchiveToggleClicked">
        <md-icon>archive</md-icon>
        <span v-if="!archiveView">Archive</span>
        <span v-else>Unarchive</span>
      </md-menu-item>
      <md-menu-item @click="onEditClicked">
        <md-icon>edit</md-icon>
        <span>Edit</span>
      </md-menu-item>
      <md-menu-item @click="onDeleteClicked">
        <md-icon>delete_forever</md-icon>
        <span>Delete</span>
      </md-menu-item>
    </md-menu-content>

  </md-menu>
  <md-dialog-prompt
    md-title="Edit"
    md-ok-text="ok"
    md-cancel-text="cancel"
    @close="onEditDialogClose"
    ref="editDialog"
    v-model="newName">
  </md-dialog-prompt>
</div>
</template>

<script>
export default {
  props: ['item', 'category', 'archiveView'],

  data() {
    return {
      newName: this.item.name,
    };
  },

  computed: {
  },

  methods: {
    onArchiveToggleClicked() {
      const newItem = Object.assign({}, this.item);
      newItem.archived = !newItem.archived;
      if (newItem.archived && newItem.favorited) newItem.favorited = false;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },

    onEditClicked() {
      /**
       * Waiting for vue-material prompt to be fixed. As it stands, when a
       * letter is typed, the dialog closes.
       **/
      // this.$refs.editDialog.open();
      // FIX: Replace window prompt with vue-material prompt.
      this.newName = prompt('Edit', this.item.name); // eslint-disable-line no-alert
      if (!this.newName) this.newName = '';
      this.onEditDialogClose('ok');
    },

    onEditDialogClose(button) {
      if (button === 'cancel') return;
      if (this.newName === '') {
        this.newName = this.item.name;
        return;
      }
      const newItem = Object.assign({}, this.item);
      newItem.name = this.newName;
      this.$store.dispatch('ITEM_EDITED', {
        category: this.category,
        item: newItem,
      });
    },

    onDeleteClicked() {
      this.$store.dispatch('ITEM_DELETE', {
        category: this.category,
        item: this.item,
      });
    },
  },
};
</script>
