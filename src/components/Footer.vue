<template>
  <v-card height="1px"> 
    <v-footer
      fixed
      color="white"
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>