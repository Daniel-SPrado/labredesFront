<template>
    <div class="index">
        <v-container >
            <v-card
                hover
                color="brown darken-1"
                class="mx-auto"
                max-width="90%"
                outlined
            >
                <div class="d-flex flex-no-wrap justify-space-between">
                    <v-card-title class="formulario">
                        <div>
                            <v-form v-model="valid">
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <h1 id="titulo"> Conheça </h1>
                                        </v-col>
                                        <v-col cols="12">
                        <v-img
                        height="100px"
                            src="../assets/roloFilmeFundo.png"
                        ></v-img><br>
                                            <v-btn class="mr-4" flat text="" to="/boasvindas" @click="submit"> Entrar </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </div>  
                    </v-card-title>
                    <v-avatar
                        class="ma-3"
                        width="30%"
                        height="30%"
                    >

                    </v-avatar>
                </div>
            </v-card>
        </v-container>
    </div>    
</template>

<script>
export default {

}
</script>

<style scoped>  
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');
.index{
    
    height: 100%;
    vertical-align: 50%;
    align-content: center;
}
.formulario{
    background-color: rgb(255, 255, 255);
    width: 50%;
    text-align: center;
}
#titulo{
    margin-bottom: 5%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: rgb(75, 75, 75);
    align-content: center;
}
</style>