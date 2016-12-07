<template>
<div>
  <header>
    <md-toolbar v-md-theme="'default'">
      <md-button class="md-icon-button" @click="$refs.sideNav.toggle()">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
  </header>
  <nav>
    <side-nav ref="sideNav"></side-nav>
  </nav>
</div>
</template>

<script>
import SideNav from './SideNav';

export default {
  components: {
    SideNav,
  },
};
</script>
