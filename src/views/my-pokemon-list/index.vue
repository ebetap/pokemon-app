<template>
  <div class="wrapper">
    <h2 class="title">My Pokemon</h2>
    <MyPokemonList :data="myPokemons" :onRemove="(list) => removePokemon(list)" />
  </div>
</template>

<script>
import MyPokemonList from '@/components/list/my-list';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'myListPokemon',
  components: {
    MyPokemonList,
  },
  computed: {
    ...mapState({
      myPokemons: state => state.myPokemons,
    }),
  },
  methods: {
    ...mapMutations({
      RELEASE_POKEMON: 'RELEASE_POKEMON',
    }),

    removePokemon(pokemon) {
      let bothId = {
        id: pokemon.id,
        unique_id: pokemon.unique_id
      }

      this.RELEASE_POKEMON(bothId);
    },
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
