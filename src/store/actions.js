import { API_ENDPOINT } from '../config';

const actions = {
  getPokemonList: ({commit}) => {    
    commit('FETCHING', true);

    fetch(`${API_ENDPOINT}/pokemon`)
      .then(res => res.json())
      .then(data => {
        commit('GET_POKEMON_SUCCESS', data.results);
        commit('FETCHING', false);
      })
      .catch(err => {
        commit('ERROR',err);
        commit('FETCHING', false);
      });
  },

  getPokemonDetail: ({commit}, url) => {
    commit('FETCHING', true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        commit('POKEMON_DETAIL_SUCCESS', data);
        commit('FETCHING', false);
      })
      .catch(err => {
        commit('ERROR',err);
        commit('FETCHING', false);
      });
  }
}

export default actions;