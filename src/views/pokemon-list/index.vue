<template>
  <div class="wrapper">
    <h2 class="title">Pokemon List</h2>
    <ListPokemon 
      :data="pokemons"
      :onClick="listClicked" 
    />
  </div>
</template>

<script>
import ListPokemon from '@/components/list';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'list-pokemon',
  components: {
    ListPokemon,
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemons,
    }),
  },
  methods: {
    ...mapActions({
      getPokemonList: 'getPokemonList',
    }),

    listClicked(data) {
      const { $router } = this;
      const { name, url} = data;
      $router.push({
        path: `/detail/${name}`,
        query: {
          url: btoa(url),
        }
      })
    }
  },
  created() {
    const { getPokemonList } = this;
    getPokemonList();
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 767px;
  margin: auto;
  padding: 15px;
  padding-top: 70px;
}
.title {
  margin-bottom: 15px;
}
</style>
