<template>
<router-view :style="styles" style="min-height: 100vh"></router-view>
</template>

<script>
const materialDesignBlue600 = '#1E88E5';
const materialDesignBlue900 = '#0D47A1';
const materialDesignGrey50 = '#FAFAFA';

const lightColor = materialDesignBlue600;
const darkColor = materialDesignBlue900;

const standardBackground = {
  'background-color': materialDesignGrey50,
};

const accountPagesBackground = {
  background: `linear-gradient(${lightColor}, ${darkColor})`,
};

// Sets the proper background colors depending on which page is being viewed.
// The Vue Material theme engine defaults to white. Here the background color
// is set to grey without altering the white background color on child
// components. Also set the blue gradient color for account pages.
export default {
  data() {
    return {
      styles: standardBackground,
    };
  },

  watch: {
    $route(to) {
      if (to.name === 'Signup' || to.name === 'Signin') {
        this.styles = accountPagesBackground;
        return;
      }
      this.styles = standardBackground;
    },
  },
};
</script>
