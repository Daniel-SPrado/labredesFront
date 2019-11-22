<template>
    <v-form v-model="valid" ref="form" >
        <v-row>
            <v-col cols="6" sm="6" md="4">
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="100px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="date"
                        label="Picker in menu"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="4" md="4">
                <v-text-field
                    v-model="destino"
                    :rules="lugarRules"
                    :counter="10"
                    label="Destino"
                ></v-text-field>
            </v-col>
            <v-col
            cols="2"
            >
                <v-btn class="mr-4" text="" to="/home" @click="validar"> Entrar </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
    methods: {
    validar () {
        console.log("Destino é: ", this.destino, "E a data é em: ", this.date)
    }
  }
}
</script>

<style scoped>
</style>
