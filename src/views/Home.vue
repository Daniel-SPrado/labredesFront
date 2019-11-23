<template>
  <div class="home">
    <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex md12 lg12>
          <boasvindas></boasvindas>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Toolbar from "@/components/Toolbar.vue";
// import Footer from "@/components/Footer.vue";
// import Pesquisa from "@/components/Pesquisa.vue";
import boasvindas from "../components/Boasvindas.vue"

export default {
  name: "home",
  components: {
    boasvindas
    // Toolbar,
    // Footer,
    // Pesquisa
  }
};
</script>

<style scoped>
  
.home{
  color: aqua;
}
.conteudo{
  padding-left: 10%;
  padding-right: 10%;
}
</style>
