<template>
  <div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'popular', name: 'Popular' },
        { title: 'upcoming', name: 'Próximos' },
        { title: 'top_rated', name: 'Mais votados' },
        { title: 'now_playing', name: 'Nos cinemas' },
      ],
      generos: [],
    }),
    mounted(){
    },
    methods: {
        seleciona( selecionado ){
            alert( selecionado )
        }
    }
  }
</script>