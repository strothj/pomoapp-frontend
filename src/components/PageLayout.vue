<template lang="pug">

</template>

<script>
// import Navbar from 'components/Navbar';
// import ProjectList from 'components/ProjectList';
export default {
//   components: {
//     Navbar,
//     ProjectList,
//   },
//   computed: {
//     // Create a gap on the right for the ProjectList side-bar component on all
//     // pages but the landing page.
//     constrain() {
//       return this.$route.name !== 'Root';
//     },
//   },
};
</script>

<style lang="less">
.constrain {
  header, main, footer {
    padding-right: 0;

    @media only screen and (min-width: 992px) {
      padding-right: 300px;
    }
  }
}
</style>
