<template>
  <div class="home">
    <Toolbar class="toolbar"></Toolbar>

              <Pesquisa></Pesquisa>          

      
    
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import Pesquisa from "@/components/Pesquisa.vue";

export default {
  name: "home",
  components: {
    Toolbar,
    Footer,
    Pesquisa
  }
};
</script>

<style scoped>
.toolbar{
}
.home{
  color: aqua;
}
.conteudo{
  padding-left: 10%;
  padding-right: 10%;
}
</style>
