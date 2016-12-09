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
      <div class="row">
        <div class="col-xs-12">

          <div class="box">
            <div class="vertical-padding"></div>
            <list-control title="Favorites" category="favorites"></list-control>
            <div class="vertical-padding"></div>
            <list-control title="Projects" category="projects" editable="true"></list-control>
          </div>

        </div>
      </div>
    </div>

    <md-button class="fab md-fab md-fab-bottom-center" @click.native="toggleEditMode">
      <md-icon class="fab__icon">{{ mainFabIcon }}</md-icon>
    </md-button>
  </main>

</div>
</template>

<script>
import ListControl from './ListControl';
import SideNav from './SideNav';

export default {
  computed: {
    editMode: {
      get() { return this.$store.state.editMode; },
      set(editMode) { this.$store.commit('EDIT_MODE', { editMode }); },
    },

    mainFabIcon() { return this.editMode ? 'done' : 'edit'; },
  },

  methods: {
    toggleEditMode() { this.editMode = !this.editMode; },
  },

  components: {
    ListControl,
    SideNav,
  },
};
</script>
