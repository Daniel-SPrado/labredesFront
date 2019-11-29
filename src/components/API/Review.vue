<template>
  <div>
    <v-btn
      text
      @click.stop="dialog = true"
    >
      Review
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="80%"
    >
      <v-card
      outlined
      >
        <v-container fluid>
             <v-row v-for="comentario in review" :key="comentario.id"> 
                  <h2> {{ comentario.author }} </h2>
                  <p> {{ comentario.content }} </p>
              </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    props: [ 'film_id' ],
    data () {
      return {
        dialog: false,
        review: null
      }
    },
    mounted(){
        this.getReview();
    },
    created(){
      
    },
    methods: {
        getReview(){
            axios
            .get('https://api.themoviedb.org/3/movie/'+this.film_id+'/reviews?api_key=41ddd1e8aded97e6f2d7b1c232632004&language=pt-br')
            .then(response => {
                this.review = response.data['results']
            })
        }
    }
  }
</script>

<style scoped>

</style>