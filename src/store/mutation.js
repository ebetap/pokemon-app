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
          pokemon.count = matchData.length;
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
        nick_name: '',
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
      state.myPokemons.push({...data, count: isFound.length +1 });

      const updateCount = currentPokemons.filter(pokemon => pokemon.id === data.id);

      currentPokemons = currentPokemons.map(currPokemon => {
        if(data.id === currPokemon.id) return { ...currPokemon, count: updateCount.length }
        return currPokemon;
      });

      state.myPokemons = currentPokemons;
      
    } else {
      state.myPokemons.push({ ...data, count: 1});
    }
  },

  RELEASE_POKEMON(state, bothId) {
    let currentPokemons = state.myPokemons;
    let myNewPokemons = currentPokemons.filter(pokemon => pokemon.unique_id !== bothId.unique_id);
    const updateCount = myNewPokemons.filter(pokemon => pokemon.id === bothId.id);

    myNewPokemons = myNewPokemons.map(currPokemon => {
      if(bothId.id === currPokemon.id) return { ...currPokemon, count: updateCount.length }
      return currPokemon;
    });

    state.myPokemons = myNewPokemons;
  }
}

export default mutations;