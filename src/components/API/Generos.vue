<template>
<v-container grid-list-xs>
     <v-layout row wrap>
        <v-flex xs2 sm2 md2 lg2 v-for="genero in generos" :key="genero.id">
            <v-card
            height="70px"
            >
              <div class="genero"> 
                <p class="texto_genero"> {{ genero.name }} </p>
              </div>
            </v-card>
          </v-flex>
     </v-layout>
</v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: 'generos',
    data(){
        return{
            generos: null
        }
    },
    mounted(){
        this.getGeneros();
    },
    methods:{
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

<style scoped>
.genero{
    line-height: 50px;
}
.texto_genero{
    text-align: center;
}
</style>