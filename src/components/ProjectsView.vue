<template>
<div>
  <header>
    <md-toolbar>
      <md-button class="md-icon-button" @click="$refs.sideNav.toggle()">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
  </header>

  <nav>
    <side-nav ref="sideNav"></side-nav>
  </nav>

  <main>
    <div class="container-fluid">
      <div class="vertical-padding"></div>
      <div class="row">
        <div class="col-xs-12">

          <div class="box">
            <list-control title="Favorites" category="favorites"></list-control>
            <div class="vertical-padding"></div>
            <!-- <list-control title="Projects" category="projects" editable="true"></list-control>
            -->
          </div>

        </div>
      </div>
    </div>

    <md-button class="fab md-fab md-fab-bottom-center">
      <md-icon class="fab__icon" @click.native="toggleEditMode">{{ mainFabIcon }}</md-icon>
    </md-button>
  </main>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListControl from './ListControl';
import SideNav from './SideNav';

export default {
  computed: {
    ...mapGetters([
      'favoritedItems',
    ]),
    editMode: {
      get: function getEditMode() {
        return this.$store.state.editMode;
      },
      set: function setEditMode(editMode) {
        this.$store.commit('editMode', editMode);
      },
    },
    mainFabIcon: function mainFabIcon() {
      return this.editMode ? 'done' : 'edit';
    },
  },
  methods: {
    toggleEditMode: function toggleEditMode() {
      this.editMode = !this.editMode;
    },
  },
  components: {
    ListControl,
    SideNav,
  },
};
</script>
