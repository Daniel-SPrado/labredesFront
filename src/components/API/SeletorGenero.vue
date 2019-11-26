<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Genero
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in generos" :key="item.id"
          @click="seleciona(item.id)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import axios from 'axios'; 
  export default {
    data: () => ({
      items: [
        { title: 'Comédia' },
        { title: 'Romance' },
        { title: 'Ação' },
        { title: 'Aventura' },
      ],
      generos: [],
    }),
    mounted(){
      this.getGeneros()
    },
    methods: {
        seleciona( selecionado ){
            alert( selecionado )
        },
        getGeneros(){
            axios
            .get('http://api.themoviedb.org/3/genre/movie/list?api_key=41ddd1e8aded97e6f2d7b1c232632004&language=pt-br')
            .then(response => {
                this.generos = response.data['genres']
            })

        }
    }
  }
</script>