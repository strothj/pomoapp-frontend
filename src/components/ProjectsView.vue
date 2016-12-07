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
      <div class="row vertical-padding"></div>
      <div class="row">
        <div class="col-xs-12">

          <!-- Favorites List -->
          <div class="box">
            <span class="md-title">Favorites</span>
            <md-list class="list md-transparent">
              <md-list-item v-for="item in favoritedItems">
                <span>{{ item.name }}</span>
                <md-button class="md-icon-button md-list-action">
                  <md-icon class="list__icon">favorite</md-icon>
                </md-button>
              </md-list-item>
            </md-list>
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
import SideNav from './SideNav';

export default {
  components: {
    SideNav,
  },
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
};
</script>
