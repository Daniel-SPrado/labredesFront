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
      <v-card>
        <v-container fluid>
            <v-row> 
                {{ review }}
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
            Axios
            .get('https://api.themoviedb.org/3/movie/'+this.film_id+'/reviews?api_key=41ddd1e8aded97e6f2d7b1c232632004&language=pt-br')
            .then(response =>{
                this.review = response.data
            })
        }
    }
  }
</script>

<style scoped>

</style>