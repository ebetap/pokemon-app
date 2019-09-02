<template>
  <div class="wrapper">
    <div v-if="!isFetching" class="bio">
      <img class="pokemon-image" :src="pokemonDetail.sprites.front_default" alt="Pokemon Sprites">
      <h2 class="name">{{pokemonDetail.name}}</h2>

      <div class="pokemon-types d-flex align-items-center">
        <div class="label bold">Type : </div>
        <ul class="types d-flex">
          <li
            v-for="(type, key) in pokemonDetail.types"
            :key="key"
            class="type"
          >
            {{type.type.name}}
          </li>
        </ul>
      </div>

      <!-- pokemon stats -->
      <ul class="stats">
        <li
          v-for="(stat, key) in pokemonDetail.stats" :key="key"
          class="d-flex"
        >
          <div class="stat-name">
            {{stat.stat.name}}
          </div>
          <div class="base-stat">
            {{stat.base_stat}}
          </div>
        </li>
      </ul>

      <!-- button catch -->
      <div class="catch">
        <Button
          label="Catch"
          align="center"
          :fullWidth="true"
          :onClick="catchPokemon"
        />
      </div>

      <!-- popup -->
      <Popup :open="openPopup">
        <div class="catch-success">
          <h1>Catch Success</h1>
        </div>
      </Popup>
    </div>
    
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';

import Loading from '@/components/loading';
import Button from '@/components/button';
import CatchSuccess from '@/components/catch/success';
import CatchFailed from '@/components/catch/failed';
import Popup from '@/components/popup';

export default {
  name: 'DetailPokemon',
  data(){
    return {
      openPopup: false,
      isCatchSuccess: null
    }
  },
  components: {
    Loading,
    Button,
    CatchSuccess,
    CatchFailed,
    Popup,
  },
  computed: {
    ...mapState({
      pokemonDetail: state => state.pokemonDetail,
      isFetching: state => state.isFetching,
    }),
  },
  methods: {
    ...mapActions({
      getPokemonDetail: 'getPokemonDetail',
    }),

    ...mapMutations({
      ADD_POKEMONS: 'ADD_POKEMONS',
    }),

    catchPokemon() {
      if (Math.random() > 0.5) {
        const { ADD_POKEMONS, pokemonDetail } = this;
        this.openPopup = true
        this.isCatchSuccess = true
        // ADD_POKEMONS(pokemonDetail);
      } else {
        alert('failed');
      }
    },
  },
  created() {
    const { query } = this.$route;
    const { getPokemonDetail } = this;
    getPokemonDetail(atob(query.url));
  }
}
</script>

<style scoped>
  .d-flex {
    display: flex;
  }

  .align-items-center {
    align-items: center;
  }

  .bold {
    font-weight: bold;
  }

  .wrapper {
    max-width: 767px;
    margin: auto;
    padding: 15px;
    padding-top: 70px;
    padding-bottom: 60px;
  }

  .pokemon-image {
    display: block;
    margin: auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
    background: cadetblue;
    border-radius: 50%;
  }

  .name {
    text-align: center;
    color: #0d4a68;
    text-transform: capitalize;
    margin-top: 15px;
  }

  .label {
    color: #0d4a68;
  }

  .types {
    list-style: none;
    padding: 0;
    margin-left: 10px;
  }

  .type {
    background: #0d4a68;
    padding: 3px 8px;
    color: #ffffff;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
  }

  .type:not(:first-child) {
    margin-left: 5px;
  }

  .stats {
    padding: 0;
    font-weight: bold;
    margin-top: -10px;
  }

  .stats li {
    justify-content: space-between;
    padding: 9px 0;
  }

  .stat-name {
    text-transform: capitalize;
  }

  .catch {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 10px 10px;
    background: #fff;
  }

  .catch-success {
    background: #fff;
  }
</style>
