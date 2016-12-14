<template>
<md-menu md-direction="bottom left" md-align-trigger ref="profileMenu">
  <div md-menu-trigger><slot></slot></div>
  <md-menu-content>
    <md-menu-item disabled>
      <span>Profile</span>
      <md-icon>person</md-icon>
    </md-menu-item>

    <md-menu-item disabled>
      <span>Settings</span>
      <md-icon>settings</md-icon>
    </md-menu-item>

    <md-menu-item @click="logOff">
      <span>Sign out</span>
      <md-icon>power_settings_new</md-icon>
    </md-menu-item>
  </md-menu-content>
</md-menu>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    open: function open() {
      this.$refs.profileMenu.open();
    },
    ...mapActions({
      logOff: 'LOG_OFF',
    }),
  },
};
</script>
