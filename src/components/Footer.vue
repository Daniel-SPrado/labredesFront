<template>
  <v-card height="50px" class="footer"> 
    <v-footer
      height="50px"
      fixed
      color="white"
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }}/2 — <strong>LabRedes - API</strong>
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