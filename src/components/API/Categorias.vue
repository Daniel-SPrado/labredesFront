<template>
    <v-container>
        <v-hover>
            <template>
                <v-card class="mx-auto cartao" outlined :elevation="hover ? 24 : 1">
                    <div class="overline mb-4">
                        <v-list-item three-line="">
                        <v-list-item-content>
                        <v-list-item-title class="headline mb-1"> Categorias </v-list-item-title> 
                        </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-card>
            </template>
        </v-hover>
  <v-tabs>
    <v-tab @click="selecionaCat('popular')">Popular</v-tab>
    <v-tab @click="selecionaCat('upcoming')">Próximos</v-tab>
    <v-tab @click="selecionaCat('top_rated')">Mais votados</v-tab>
    <v-tab @click="selecionaCat('now_playing')">Nos cinemas</v-tab>
  </v-tabs>

        <v-hover v-for="votado in votados" :key="votado.id"  class="cartao">
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
                    <review v-bind:film_id="votado.id"></review>
                </v-card-actions>
            </v-card>
            </template>
        </v-hover>
        <div class="text-center">
            <v-pagination
            v-model="pagina"
            :length="paginacao.total_pages"
            @input="next"
        ></v-pagination>
  </div>
    </v-container>
</template>

<script>
import axios from 'axios';
import filme from '../API/Filme.vue';
import review from '../API/Review.vue'
// import seletorGenero from './SeletorGenero.vue'


export default {
    name: "populares",
    components: {
        filme,
        review
        // seletorGenero
    },
    data(){
        return {
            categoria: "upcoming",
            pagina: 1,
            votados: null,
            film_id: null,
            paginacao: null,
            items: [
                { title: 'popular', name: 'Popular' },
                { title: 'upcoming', name: 'Próximos' },
                { title: 'top_rated', name: 'Mais votados' },
                { title: 'now_playing', name: 'Nos cinemas' },
            ],
        }
    },
    mounted(){
        this.getRated();
    },
    methods: {
        getRated( ){
            axios
            .get('https://api.themoviedb.org/3/movie/'+this.categoria+'?api_key=41ddd1e8aded97e6f2d7b1c232632004&language=pt-br&page='+this.pagina)
            .then(response => {
                this.votados = response.data['results']
                this.paginacao = response.data
                this.pagina = response.data['page']
            })
        },
        next(){
            axios
            .get('https://api.themoviedb.org/3/movie/top_rated?api_key=41ddd1e8aded97e6f2d7b1c232632004&language=pt-br&page='+this.pagina)
            .then(response => {
                this.votados = response.data['results']
            })
        },
        selecionaCat( categoria ){
             this.categoria = categoria
             this.getRated();
        },
        review(){
            axios
            .get('/movie/{movie_id}/reviews')
        }
    }
}
</script>

<style scoped>
.cartao{
    margin-bottom: 10px;
}
</style>