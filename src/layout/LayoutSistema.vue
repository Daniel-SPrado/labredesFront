<template>
  <v-app class="grey lighten-4">
    <Toolbar/>
      <v-content class="mx-4 mb-4">
          <router-view></router-view>
      </v-content>
    <Footer/>
  </v-app>
</template>



<script>
import Toolbar from "../components/Toolbar.vue"
import Footer from "../components/Footer.vue"

export default {
  components: {
    Toolbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
