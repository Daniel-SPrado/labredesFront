<template>
    <v-container>
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

export default {
    name: "populares",
    components: {
        filme
    },
    data(){
        return {
            categoria: "upcoming",
            pagina: 1,
            votados: null,
            film_id: null,
            paginacao: null,
        }
    },
    mounted(){
        this.getRated();
    },
    methods: {
        getRated(){
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
        }
    }
}
</script>

<style scoped>
.cartao{
    margin-bottom: 10px;
}
</style>