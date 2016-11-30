<template lang="pug">
div(':class'='{ hidden: hideNav }')
  ul(id='slide-out' class='side-nav fixed')
    li(class='collection-item') Projects
    project-list-item(v-for='project in projects' ':projectId'='project.id')
  a(href='#' data-activates='slide-out' class='button-collapse')

</template>

<script>
import { mapState } from 'vuex';
import ProjectListItem from './ProjectListItem';

export default {
  computed: {
    ...mapState(['projects']),
    hideNav() {
      return this.$route.name === 'Root';
    },
  },
  components: {
    ProjectListItem,
  },
  mounted() {
    // $('.button-collapse').sideNav({
    //   edge: 'right',
    // });
  },
};
</script>

<style lang="less" scoped>
/*.side-nav {
  margin-top:0;

  @media only screen and (min-width: 992px) {
    margin-top: 64px;
    z-index: 0;
  }
}

.hidden {
  display: none;
}*/
</style>
