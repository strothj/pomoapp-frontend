<template lang="pug">
div(class="projects-page-layout mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs")
  header(class="mdl-layout__header mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top")
    header-title-row
    header-tabs-row
  main(class="mdl-layout__content")
    section(class="mdl-layout__tab-panel is-active" id="projects-list-tab")
      slot(name="projects-list-tab")
    section(class="mdl-layout__tab-panel" id="tasks-list-tab")
      slot(name="tasks-list-tab")
    section(class="mdl-layout__tab-panel" id="pomodoro-clock-tab")
      slot(name="pomodoro-clock-tab")
</template>

<script>
import HeaderTitleRow from 'components/ProjectsPage/HeaderTitleRow';
import HeaderTabsRow from 'components/ProjectsPage/HeaderTabsRow';

export default {
  components: {
    HeaderTitleRow,
    HeaderTabsRow,
  },
};
</script>

<style lang="less">
.projects-page-layout {
  .mdl-layout__header-row {
    .mdl-navigation__link:last-of-type {
      padding-right: 0;
    }
  }
}
</style>
