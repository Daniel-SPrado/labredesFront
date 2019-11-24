<template>
  <div>
    <v-btn
      text
      @click.stop="dialog = true"
    >
      Conheça
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="80%"
    >
      <v-card>
        <v-container fluid>
            <v-row> 
                <v-col cols="8">
                    <v-card-title class="headline"> {{ filme.original_title }} ( {{ filme.title }} )  </v-card-title>
                    <v-card-subtitle> 
                        <v-avatar color="indigo" size="40px">
                            <span class="white--text headline"> {{ filme.vote_average }}  </span>
                        </v-avatar>
                        <span v-if="filme.adult == false">
                        <v-avatar color="green" size="40px" tile>
                            <span class="white--text headline"> L </span>
                        </v-avatar> 
                        </span>
                        <span v-else>
                        <v-avatar color="black" size="40px" tile>
                            <span class="white--text headline"> 18 </span>
                        </v-avatar> 
                        </span>

                        <span v-for="genero in filme.genres" :key="genero.id">
                            {{genero.name}} ,
                        </span>
                    </v-card-subtitle>
                    <v-card-text>
                    {{ filme.overview }}
                    </v-card-text>


                </v-col>
                <v-col cols="4">
                <v-list-item-avatar
                    tile
                    size="100%"
                    color="grey"
                    
                ><v-img :src="'https://image.tmdb.org/t/p/w500/'+filme.poster_path"></v-img>
                </v-list-item-avatar>
                <v-card-text>
                </v-card-text>
                </v-col>
            </v-row>
        </v-container>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Axios from 'axios';

  export default {
    props: [ 'film_id' ],
    data () {
      return {
        dialog: false,
        filme: null
      }
    },
    mounted(){
        this.getFilme();
    },
    methods: {
        getFilme(){
            Axios
            .get('https://api.themoviedb.org/3/movie/'+this.film_id+'?api_key=41ddd1e8aded97e6f2d7b1c232632004&language=pt-br')
            .then( response => {
                this.filme = response.data
            })
        }
    }
  }
</script>

<style scoped>

</style>