<template lang="pug">
div(class="page-content")
  ul(class="mdl-list-item mdl-list" ref="projectsList")
    li(class="mdl-list__item" "v-for"="project in this.$store.state.projects")
      span(class="mdl-list__item-primary-content")
        i(class="material-icons mdl-list__item-icon drag-handle") reorder
        button(class="mdl-button mdl-js-button mdl-button--primary") {{ project.name }}
      a(class="mdl_list__item--secondary-action" ":id"="'project-menu-' + project.id")
        i(class="material-icons") more_vert
      ul(class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" ":for"="'project-menu-' + project.id")
        li(class="mdl-menu__item") Edit
        li(class="mdl-menu__item") Delete
  button(class="add-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored")
    i(class="material-icons") add
</template>

<script>
import Sortable from 'sortablejs';

export default {
  data() {
    return { sortable: null };
  },
  mounted() {
    this.sortable = new Sortable(this.$refs.projectsList, {
      handle: '.drag-handle',
    });
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}

.drag-handle {
  cursor: move;
  cursor: -webkit-grabbing;
}

.add-button {
  position: fixed;
  bottom: 12px;
  right: 12px;
}

.page-content {
  padding-bottom: 42px;
}
</style>
