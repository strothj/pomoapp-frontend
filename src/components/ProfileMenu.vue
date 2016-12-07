<template>
<md-menu md-direction="bottom left" md-align-trigger ref="profileMenu">
  <div md-menu-trigger><slot></slot></div>
  <md-menu-content v-md-theme="'popupMenu'">
    <md-menu-item>
      <span>Profile</span>
      <md-icon>person</md-icon>
    </md-menu-item>

    <md-menu-item>
      <span>Settings</span>
      <md-icon>settings</md-icon>
    </md-menu-item>

    <md-menu-item>
      <span>Sign out</span>
      <md-icon>power_settings_new</md-icon>
    </md-menu-item>
  </md-menu-content>
</md-menu>
</template>

<script>
export default {
  methods: {
    open: function open() {
      this.$refs.profileMenu.open();
    },
  },
};
</script>
