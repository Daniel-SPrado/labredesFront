<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <v-text-field
            v-model="filme"
            :rules="nameRules"
            label="Digite o nome do filme"
            required
          ></v-text-field>
          
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-btn outlined class="mr-4" text @click="validar"> Entrar </v-btn>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,

    }),
    mounted: {

    },
    methods: {
      validar(){
        alert(this.filme)
      }
    }
  }
</script>

<style scoped>

</style>