<template>
<div class="split-container">

  <header class="split-container__appbar-row appbar-row">
    <div class="appbar-row__logo">
      <span class="md-title">pomoapp</span>
    </div>

    <div class="appbar-row__appbar appbar">
      <md-whiteframe md-elevation="1">
        <md-toolbar>
          <md-button class="appbar__menu-button md-icon-button"
            @click="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <div class="appbar__title md-title">{{ selectedProjectName }}</div>

          <profile-menu class="appbar__user">
            <md-list class="md-dense md-transparent" style="flex: 0">
              <md-list-item>
                <span>{{ userFullName }}</span>
                <md-button class="md-icon-button md-list-action">
                  <md-icon style="color: white">arrow_drop_down</md-icon>
                </md-button>
              </md-list-item>
            </md-list>
          </profile-menu>

        </md-toolbar>
      </md-whiteframe>
    </div>
  </header>

  <main class="split-container__content-row main-container">
    <nav class="main-container__sidenav">
      <projects-view></projects-view>
    </nav>

    <article class="main-container__content">
      <div class="container">
        <tasks-view v-if="selectedProjectName"></tasks-view>
      </div>
    </article>
  </main>

  <nav>
    <md-sidenav class="md-left" ref="sidenav" @close="sideNavClosed">
      <profile-toolbar></profile-toolbar>
      <projects-view @linkClicked="toggleSidenav"></projects-view>
    </md-sidenav>
  </nav>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProfileMenu from './ProfileMenu';
import ProfileToolbar from './ProfileToolbar';
import ProjectsView from './ProjectsView';
import TasksView from './TasksView';

export default {
  computed: {
    ...mapGetters(['selectedProjectName', 'userFullName']),

    /**
     * Storing the sidenav open/close state externally so that navigation events
     * can cause the sidenav to close.
     **/
    sideNavOpen: {
      get() { return this.$store.getters.sideNavOpen; },
      set(val) { this.$store.commit('SIDE_NAV_OPEN', { open: val }); },
    },
  },

  watch: {
    sideNavOpen(val) { this.$refs.sidenav[val ? 'show' : 'close'](); },
  },

  methods: {
    toggleSidenav() { this.sideNavOpen = !this.sideNavOpen; },
    sideNavClosed() { this.sideNavOpen = false; },
  },

  components: {
    ProfileMenu,
    ProfileToolbar,
    ProjectsView,
    TasksView,
  },
};
</script>

<style lang="less">
@import '../assets/css/colors.less';
@import '../assets/css/keylines.less';

.split-container {
  &__appbar-row {
    position: fixed;
    width: 100%;
  }

  &__content-row {
    width: 100%;
    height: 100vh;
  }
}

.appbar-row {
  &__logo {
    // Hide app title navbar section on mobile
    display: none;
    border-bottom: @divider-width @color-divider solid;

    .large-screen({
      display: block;
      float: left;
      width: @sidenav-pinned-width;
      height: @navbar-height;
      line-height: @navbar-height;
      padding-left: @padding-large-screen;
    });
  }

  &__appbar {
    // Shift menu bar right to make room for pinned sidenav.
    .large-screen({
      margin-left: @sidenav-pinned-width;
    });
  }

  &__appbar::after {
    clear: both;
  }
}

.appbar {
  &__menu-button {
    // Hide menu button on large screen resolution. Sidenav is pinned.
    .large-screen({
      display: none;
    });
  }

  &__title {
    flex: 1;
    .large-screen({
      // Increase the left padding of the title because the menu button is not
      // there on larger screen resolution.
      padding-left: @padding-large-screen;
    });
  }

  &__user {
    display: none;
    .large-screen({
      display: block;
    });
  }
}

.main-container {
  &__sidenav {
    // Hide sidenav on mobile
    display: none;
    .large-screen({
      display: block;
      padding-top: @navbar-height;
      width: @sidenav-pinned-width;
      float: left;
      border-right: @divider-width @color-divider solid;
      min-height: 100vh;
    });
  }

  &__content {
    padding-top: @navbar-height;
    .large-screen({
      background-color: @color-background;
      margin-left: @sidenav-pinned-width;
      min-height: 100vh;
    });
  }
}
</style>
