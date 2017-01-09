<template>
<div>
  <!-- Start add new item prompt -->
  <md-dialog-prompt
    :md-title="'Add new ' + this.itemType"
    ref="addItemDialog"
    v-model="addItemValue"
    @close="addItemDialogClosed">
  </md-dialog-prompt>
  <!-- End add new item prompt -->

  <!-- Start edit item prompt -->
  <md-dialog-prompt
    :md-title="'Edit ' + this.itemType"
    ref="editItemDialog"
    v-model="editItem.value"
    @close="editItemDialogClosed">
  </md-dialog-prompt>
  <!-- End edit item prompt -->

  <!-- Start top navigation bar -->
  <app-bar>
  </app-bar>
  <!-- End top navigation bar -->

  <main class="manager-main">
    <div class="page-content" style="max-width: 960px">

      <!-- Start items list -->
      <md-table-card class="list-card">

        <!-- Start toolbar -->
        <md-toolbar>
          <h1 class="md-title" v-if="!archiveView">{{ title }}</h1>
          <h1 class="md-title" v-else>Archived {{ itemType }}s</h1>

          <md-button class="md-icon-button" v-if="!archiveView" @click="onAddItemClicked">
            <md-icon>add</md-icon>
            <md-tooltip>Add new {{ itemType }}</md-tooltip>
          </md-button>

          <md-button-toggle class="md-primary">
          <md-button class="md-icon-button" @click="onToggleArchiveViewClicked">
            <md-icon>archive</md-icon>
            <md-tooltip>Toogle archive view</md-tooltip>
          </md-button></md-button-toggle>
        </md-toolbar>
        <!-- End toolbar -->

        <!-- Start edit mode toolbar -->
        <md-table-alternate-header md-selected-label="selected">
          <md-button class="md-icon-button" @click="onToggleArchiveItemClicked">
            <md-icon v-if="!archiveView">archive</md-icon>
            <md-icon v-else>unarchive</md-icon>
          </md-button>

          <md-button class="md-icon-button" @click="onDeleteClicked">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-alternate-header>
        <!-- End edit mode toolbar -->

        <md-table @select="onSelect" ref="mdtable">
          <md-table-header>
            <md-table-row>
              <!-- TODO: Implement sorting -->
              <md-table-head>Name</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row
              v-for="item in currentList"
              :key="item.id"
              :md-item="item"
              md-selection>

              <md-table-cell class="list-card__list-item" :key="item.id + 'cell'" @click.native="onItemClick(item)">
                <span>{{ item.name }}</span>

                <md-button class="md-icon-button" @click.stop="onEditItemClicked(item)">
                  <md-icon>edit</md-icon>
                </md-button>
              </md-table-cell>

            </md-table-row>
          </md-table-body>
        </md-table>

      </md-table-card>
      <!-- End items list -->

    </div>
  </main>
</div>
</template>

<script>
import AppBar from '../../shared/app-bar.component';

export default {
  props: ['title', 'list', 'itemType'],

  data() {
    return {
      addItemValue: '',
      editItem: {
        selected: null,
        value: '',
      },
      archiveView: false,
      selected: null,
      currentList: null,
    };
  },

  watch: {
    list() {
      this.pre06VueMaterialWorkAround();
    },

    archiveView() {
      this.pre06VueMaterialWorkAround();
    },
  },

  methods: {
    pre06VueMaterialWorkAround() {
      // Work around for bug in md-table. The row count keeps doubles when
      // archive view is toggled. Issue is slated to be fixed in vue-material
      // v0.6
      // TODO: Remove fix when issue is fixed in vue-material.
      this.$refs.mdtable.numberOfRows = 0;
      if (!this.list) return;
      this.currentList = this.list.filter(item => item.archived === this.archiveView);
    },

    onAddItemClicked() {
      this.$refs.addItemDialog.open();
    },

    addItemDialogClosed(state) {
      if (state !== 'ok' || this.addItemValue.length === 0) return;
      this.$emit('addItem', { name: this.addItemValue });
      this.addItemValue = '';
    },

    onEditItemClicked(item) {
      this.editItem = { selected: item, value: item.name };
      this.$refs.editItemDialog.open();
    },

    editItemDialogClosed(state) {
      if (state !== 'ok' ||
        this.editItem.value.length === 0 ||
        this.editItem.value === this.editItem.selected.name) return;
      const editedItem = Object.assign({}, this.editItem.selected);
      editedItem.name = this.editItem.value;
      this.$emit('editItems', [editedItem]);
    },

    onToggleArchiveViewClicked() {
      this.$refs.mdtable.data.splice(0);
      this.$refs.mdtable.numberOfRows = 0;
      this.archiveView = !this.archiveView;
    },

    resetMdTableState() {
      this.$refs.mdtable.numberOfSelected = 0;
      this.$refs.mdtable.$children[0].checkbox = false;
      this.$refs.mdtable.selectedRows = {};
    },

    onToggleArchiveItemClicked() {
      const archivedItems = Object.values(this.selected).map((item) => {
        const archivedItem = Object.assign({}, item);
        archivedItem.archived = !archivedItem.archived;
        return archivedItem;
      });
      this.resetMdTableState();
      this.$emit('editItems', archivedItems);
    },

    onSelect(items) {
      this.selected = items;
    },

    onDeleteClicked() {
      const deletedItems = Object.values(this.selected);
      this.$emit('deleteItems', deletedItems);
      this.resetMdTableState();
    },

    onItemClick(item) {
      this.$emit('itemClicked', item);
    },
  },

  mounted() {
    this.pre06VueMaterialWorkAround();
  },

  components: {
    AppBar,
  },
};
</script>

<style lang="less">
@import "~assets/layout.less";

.manager-main {
  padding-top: 64px;

  .not-mobile({ padding-top: 100px; });

  .page-content {
    .mobile({ padding: 0; });
  }
}

.list-card {
  box-shadow: inherit;

  // Fix sorting icon spacing when there is only a single column
  .md-table-head-text { padding-right: 28px !important };

  &__list-item {
    cursor: pointer;
  }
}
</style>
