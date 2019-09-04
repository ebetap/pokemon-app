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

      <modal
        name="catch-status"
        class="modal-catch"
        :clickToClose="false"
      >
        <div v-if="isCatchSuccess" class="success">
          <h2>You get the pokemon!</h2>

          <input 
            v-model="pokemonNickName"
            type="text"
            class="pokemon-nickname"
            placeholder="Pokemon Nickname"
          >
          
          <Button 
            label="Add to My Pokemon"
            align="center"
            :fullWidth="true"
            :onClick="onPokemonAdd"
          />

        </div>

        <div v-else class="failed">
          <h2>Failed to catch the pokemon!</h2>

          <Button 
            label="Close"
            align="center"
            :fullWidth="true"
            :onClick="hide"
          />

        </div>
      </modal>
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

export default {
  name: 'DetailPokemon',
  data() {
    return {
      isCatchSuccess: '',
      pokemonNickName: '',
      validInput: null
    }
  },
  components: {
    Loading,
    Button,
    CatchSuccess,
    CatchFailed,
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
        this.isCatchSuccess = true;
      } else {
        this.isCatchSuccess = false;       
      }

      this.show();
    },

    catchPokemonSuccess() {
      const { pokemonDetail } = this;

      let pokemonToSave = {
        ...pokemonDetail,
        nick_name: this.pokemonNickName,
        unique_id: '_' + Math.random().toString(36).substr(2, 9)
      }

      this.ADD_POKEMONS(pokemonToSave);

      this.$router.push('/my-pokemon');
    },

    onPokemonAdd() {
      const { catchPokemonSuccess, pokemonNickName } = this;
      const inputValid = pokemonNickName.length > 0;

      if (inputValid){
        catchPokemonSuccess();
      } else {
        this.validInput = false;
      }
    },

    show () {
      this.$modal.show('catch-status');
    },

    hide () {
      this.$modal.hide('catch-status');
    }
  },
  created() {
    const { query } = this.$route;
    const { getPokemonDetail } = this;
    getPokemonDetail(atob(query.url));
  }
}
</script>

<style>
.v--modal-box {
  top: 50%!important;
  left: 50%!important;
  width: 100%!important;
  height: 240px!important;
  transform: translate(-50%, 65%);
  padding: 25px;
}

.modal-catch .success,
.modal-catch .failed {
  text-align: center;
}

.modal-catch .failed h2 {
  margin: 30px 0;
}

.modal-catch h2 {
  color: #0d4a68;
}

.modal-catch .pokemon-nickname {
  width: 100%;
  border: 1px solid #0d4a68;
  font-size: 17px;
  margin: 25px 0;
  padding: 15px;
  border-radius: 5px;
  color: #0d4a68;
  font-weight: bold;
  letter-spacing: 1px;
}

.modal-catch .pokemon-nickname:focus {
  outline: none;
}
</style>

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
