<template>
  <div class="wrapper">
    <h2 class="title">My Pokemon</h2>
    <MyPokemonList :data="myPokemons" :onClose="(id) => removePokemon(id)" />
  </div>
</template>

<script>
import MyPokemonList from '@/components/list/my-list';

import { mapState, mapActions } from 'vuex';

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
    removePokemon(id) {
      console.log('remove pokemon', id);
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
