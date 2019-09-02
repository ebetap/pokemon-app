import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

import mutations from './store/mutation';
import actions from './store/actions';
import state from './store/state';

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ myPokemons: state.myPokemons }),
});

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [vuexLocal.plugin]
})
