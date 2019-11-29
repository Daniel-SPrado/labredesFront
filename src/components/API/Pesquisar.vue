<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="filme"
            label="Digite o nome do filme"
          >

          </v-text-field>
        </v-col>
        <v-col>
          <v-btn
          text
          @click="procuraFilme"
          >
            Procurar
          </v-btn>
        </v-col>
      </v-row>
        <v-hover v-for="votado in votado" :key="votado.id"  class="cartao">
            <template v-slot="{ hover }">
            <v-card
                class="mx-auto"
                outlined
                :elevation="hover ? 24 : 6"
            >
                <v-list-item three-line>
                <v-list-item-content>
                    
                    <div class="overline mb-4">

                        <span v-if="votado.vote_average >= 8">
                            <v-avatar color="green" size="40px">
                                <span class="white--text headline"> {{ votado.vote_average }}  </span>
                            </v-avatar>
                        </span>
                        <span v-if="votado.vote_average >= 6 && votado.vote_average < 8">
                            <v-avatar color="indigo" size="40px">
                                <span class="white--text headline"> {{ votado.vote_average }}  </span>
                            </v-avatar>
                        </span>
                        <span v-if="votado.vote_average >= 4 && votado.vote_average < 6">
                            <v-avatar color="yellow" size="40px">
                                <span class="white--text headline"> {{ votado.vote_average }}  </span>
                            </v-avatar>
                        </span>
                        <span v-if="votado.vote_average < 4">
                            <v-avatar color="red" size="40px">
                                <span class="white--text headline"> {{ votado.vote_average }}  </span>
                            </v-avatar>
                        </span>

                         {{ votado.original_language }} 
                    </div>
                    <v-list-item-title class="headline mb-1"> {{ votado.original_title }} ( {{ votado.title }} ) </v-list-item-title>
                    <v-list-item-subtitle> {{ votado.overview }}  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="10%"
                    color="grey"
                    
                ><v-img :src="'https://image.tmdb.org/t/p/w500/'+votado.poster_path"></v-img>
                </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <filme v-bind:film_id="votado.id"></filme>
                    <review v-bind:filme_id="votado.id"></review>
                </v-card-actions>
            </v-card>
            </template>
        </v-hover>    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios';
import filme from '../API/Filme.vue';
import review from '../API/Review.vue';

export default {
  components: { filme, review },
  data(){
    return {
      filme: null,
      votado: null
    }
  },
  methods: {
    procuraFilme(   ){
      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=41ddd1e8aded97e6f2d7b1c232632004&query='+this.filme)
      .then(response => {
        this.votado = response.data['results'];
      })
    }
  }
}
</script>

<style scoped>
.cartao{
    margin-bottom: 10px;
}
</style>