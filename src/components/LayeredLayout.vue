<template>
<!-- Layout wrapper -->
<div class="layout">
  <div class="layout__row">

    <!-- Left side -->
    <div class="layout__col-left layout-sidebar layout-sidebar--theme-dark">
      <projects-view></projects-view>
    </div>

    <!-- Right side -->
    <div class="layout__col-right">
      <div class="">

        <!-- App bar -->
        <header class="layout-appbar">
          <md-whiteframe md-elevation="3">
            <md-toolbar>
              <md-button class="layout-appbar__menu-button md-icon-button" @click="$refs.sideNav.toggle()">
                <md-icon>menu</md-icon>
              </md-button>
              <div class="layout-appbar__title md-title">{{ selectedItemName }}</div>
            </md-toolbar>
          </md-whiteframe>
        </header>

        <!-- Slide out sidenav -->
        <nav>
          <side-nav ref="sideNav"></side-nav>
        </nav>

        <main class="main-content">
          <section class="container-fluid">

            <!-- Projects View -->
            <article class="col-xs-12 col-md-5" :class="classesProjectsView">
              <div class="box">
                <projects-view></projects-view>
              </div>
            </article>

            <!-- Tasks View -->
            <article class="col-xs-12 col-md-5" :class="classesTasksView" v-if="selectedProject">
              <div class="box">
                <tasks-view></tasks-view>
              </div>
            </article>

          </section>

          <md-button class="fab md-fab md-fab-bottom-center" @click.native="toggleEditMode">
            <md-icon class="fab__icon">{{ mainFabIcon }}</md-icon>
          </md-button>

          <!-- Add a gap so floating action button does not cover input box on mobile -->
          <div class="vertical-padding-large"></div>

        </main>

      </div><!-- Right side container -->
    </div><!-- Right side -->

  </div><!-- Layout row -->
</div><!-- Layout wrapper -->
</template>

<script>
import ProjectsView from './ProjectsView';
import TasksView from './TasksView';
import SideNav from './SideNav';

export default {
  computed: {
    classesProjectsView() {
      const base = 'main-content main-content--medium-hide';
      return this.$route.name === 'ProjectsView' ? base : `${base} main-content--small-hide`;
    },

    classesTasksView() {
      const base = 'main-content';
      return this.$route.name === 'TasksView' ? base : `${base} main-content--small-hide`;
    },

    editMode: {
      get() { return this.$store.state.editMode; },
      set(editMode) { this.$store.commit('EDIT_MODE', { editMode }); },
    },

    selectedProject() {
      return this.$store.getters.selectedProject;
    },

    selectedItemName() {
      // TODO: If there is a task selected, the task name should be returned.
      return this.$store.getters.selectedProjectName;
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
