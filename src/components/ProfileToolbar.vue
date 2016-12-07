<template>
<md-toolbar class="md-account-header">
  <md-list class="md-transparent">
    <md-list-item class="md-avatar-list" disabled>
      <md-avatar class="md-large"><img :src="avatar" alt="Profile Icon"></md-avatar>
    </md-list-item>

    <profile-menu>
      <md-list-item>
        <div class="md-list-text-container">
          <span>{{ fullName }}</span>
          <span>{{ emailAddress }}</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>arrow_drop_down</md-icon>
        </md-button>
      </md-list-item>
    </profile-menu>

  </md-list>
</md-toolbar>
</template>

<script>
import ProfileMenu from './ProfileMenu';

export default {
  computed: {
    user: function user() {
      return this.$store.state.user || { avatar: '', fullName: '', emailAddress: '' };
    },
    avatar: function avatar() { return this.user.avatar; },
    fullName: function fullName() { return this.user.fullName; },
    emailAddress: function emailAddress() { return this.user.emailAddress; },
  },
  components: {
    ProfileMenu,
  },
};
</script>
