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

    <section class="main-content container-fluid">
      <div class="row">

        <!-- Projects View -->
        <article class="col-xs-12" :class="classesProjectsView">
          <div class="box">
            <projects-view></projects-view>
          </div>
        </article>

        <!-- Tasks View -->
        <article class="col-xs-12" :class="classesTasksView">
          <div class="box">
            <tasks-view></tasks-view>
          </div>
        </article>

      </div>
    </section>

    <md-button class="fab md-fab md-fab-bottom-center" @click.native="toggleEditMode">
      <md-icon class="fab__icon">{{ mainFabIcon }}</md-icon>
    </md-button>

    <!-- Add a gap so floating action button does not cover input box on mobile -->
    <div class="vertical-padding-large"></div>
  </main>

</div>
</template>

<script>
import ProjectsView from './ProjectsView';
import TasksView from './TasksView';
import SideNav from './SideNav';

export default {
  computed: {
    classesProjectsView() {
      const base = 'main-content__view main-content__view--medium-hide';
      return this.$route.name === 'ProjectsView' ? base : `${base} main-content__view--small-hide`;
    },

    classesTasksView() {
      const base = 'main-content__view';
      return this.$route.name === 'TasksView' ? base : `${base} main-content__view--small-hide`;
    },

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
    ProjectsView,
    TasksView,
    SideNav,
  },
};
</script>
