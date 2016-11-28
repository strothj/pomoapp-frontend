<template lang="pug">
div(class='sign-in-box container')
  div(class='row')
    div(class='col s12 l4 offset-l4')
      div(class='card small')
        div(class='card-content')
          span(class='card-title') Sign In
          form
            div(class='input-field')
              input(placeholder='Email' id='email' type='email' required)
              label(for='email')
            div(class='input-field')
              input(placeholder='Password' id='password' type='password' required)
            div(class='card-action right-align')
              button(class='btn' type='submit' ':class'='themeColorLighten2') Sign In
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['themeColorLighten2']),
  },
};
</script>

<style lang="less" scoped>
.sign-in-box {
  padding-top: 100px;

  @media only screen and (max-width: 700px) {
    padding-top: 40px;
  }
}
</style>
