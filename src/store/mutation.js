import { pattern } from '../config';

const mutations = {
  GET_POKEMON_SUCCESS(state, data) {
    const myPokemonList = state.myPokemons;
    let newPokemonsData;

    if (myPokemonList.length === 0) {
      const pokemonData = data.map(pokemon => ({...pokemon, count: 0}));
      state.pokemons = pokemonData;
    } else {
      newPokemonsData = data.map(pokemon => {
        let id = Number(pokemon.url.match(pattern)[1]);
        let matchData = myPokemonList.filter(myPokemon => myPokemon.id === id);
        
        if (matchData.length > 0) {
          pokemon.count = matchData[0].count;
        } else {
          pokemon.count = 0;
        }
        return pokemon;
      });

      state.pokemons = newPokemonsData;
    }
  },

  POKEMON_DETAIL_SUCCESS(state, data) {
    const currentPokemons = state.myPokemons;
    const localData = currentPokemons.filter(pokemon => pokemon.id === data.id);
    let pokemonDetail;

    if (localData.length > 0) {
      pokemonDetail = localData[0];
    } else {
      pokemonDetail = {
        ...data,
        nickname: '',
        count: 0,
      }
    }

    state.pokemonDetail = pokemonDetail;
  },

  ERROR(state, data) {
    state.err = {
      status: true,
      message: data
    }
  },

  FETCHING(state, data) {
    state.isFetching = data
  },

  RESET_ERROR(state) {
    state.err = {
      status: false,
      message: ''
    }
  },

  ADD_POKEMONS(state, data) {
    let currentPokemons = state.myPokemons;
    const isFound = currentPokemons.filter(pokemon => pokemon.id === data.id);

    if (isFound.length > 0) {
      currentPokemons = currentPokemons.map(currPokemon => {
        if(data.id === currPokemon.id) return { ...currPokemon, count: currPokemon.count + 1 }
        return currPokemon;
      });
      state.myPokemons = currentPokemons;
    } else {
      state.myPokemons.push({ ...data, count: 1});
    }
  },

  RELEASE_POKEMON(state, id) {
    const myNewPokemons = state.myPokemons.filter(pokemon => pokemon.id !== id);
    state.myPokemon = myNewPokemons;
  }
}

export default mutations;