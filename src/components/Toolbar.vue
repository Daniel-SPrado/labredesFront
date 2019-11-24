<template>
  <nav>
    <v-app-bar flat app color="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"> Moovie </span>
        <span> API </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span> Sign Out </span>
        <v-icon right> fas fa-sign-out-alt </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="brown lighten-4" >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            API Filme
          </v-list-item-title>
          <v-list-item-subtitle>
            Esta é uma API de filmes
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "ToolBar",
  data(){
    return {
    drawer: true,
    items: [
      { icon: 'mdi-house', title: 'Home', route: '/' },
      { icon: 'mdi-view-dashboard', title: 'Populares', route: '/populares' },
      { icon: 'fas fa-circle-notch fa-spin', title: 'Routines', route: '/algo'},
      { icon: 'fas fa-sliders-h', title: 'Settings', route: '/settings'},
      { icon: 'fas fa-project-diagram', title: 'Old Board', route: '/table'}
    ],
        languages: [            
        { flag: 'us', language: 'en', title: 'English' },            
        { flag: 'es', language: 'pt-br', title: 'Portugues' }        
    ] 
    }
  }
};
</script>

<style scoped>
#title{
  background-color:rgb(161, 161, 161);
  text-align: center;
}

.menu{
  text-align: center;
}

.toolcolor{
  background-color: aqua;
}
</style>
