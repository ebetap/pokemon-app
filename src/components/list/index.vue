<template>
  <div class="container">
    <div
      v-for="(pokemon, key) in data"
      :key="key"
      class="list-item"
      @click="onClick(pokemon)"
    >
     <div class="info">
        <h3 class="pokemon-name">{{pokemon.name}}</h3>
        <h5 class="own-total">Owned total : {{pokemon.count}}</h5>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPokemon',
  props: {
    data: { type: Array, required: true },
    onClick: { type: Function },
    onRemoveClick: { type: Function }
  }
}
</script>

<style scoped>
.list-item {
position: relative;
padding: 15px;
background: linear-gradient(90deg,#0d4a68 0,#0fa399 100%);
color: #ffffff;
border-radius: 5px;
cursor: pointer;
-webkit-box-shadow: 1px 4px 18px -1px rgba(199, 199, 199, 0.3);
-moz-box-shadow: 1px 4px 18px -1px rgba(199, 199, 199, 0.3);
box-shadow: 1px 4px 18px -1px rgba(199, 199, 199, 0.3);
transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;
display: flex;
justify-content: space-between;
align-items: center;
}

.list-item:hover {
  box-shadow: 0 12px 19px -7px rgba(0, 0, 0, 0.3);
  transform: translateY(-3px);
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  -moz-transform: translateY(-3px);
}

.list-item:not(:first-child) {
  margin-top: 10px;
}

.pokemon-name {
  text-transform: capitalize;
}
</style>