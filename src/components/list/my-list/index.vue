<template>
  <div class="wrapper-list">
    <div
      class="my-list-item"
      v-for="(list, key) in data"
      :key="key"
    >
      <div class="info">
        <h3 class="pokemon-name">{{list.name}}</h3>
        <h5 class="nick-name">Nickname : {{list.nick_name}}</h5>
        <h5 class="own-total">Owned total : {{list.count}}</h5>
     </div>

     <button class="close" @click="onRemove(list)">Remove</button>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    data: { type: Array, required: true },
    onRemove: { type: Function }
  },
  name: 'MyList'
}
</script>

<style scoped>
.my-list-item {
  position: relative;
  padding: 15px;
  background: -webkit-gradient(linear,left top, right top,color-stop(0, #0d4a68),to(#0fa399));
  background: linear-gradient(90deg,#0d4a68 0,#0fa399 100%);
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 1px 4px 18px -1px rgba(199, 199, 199, 0.3);
  box-shadow: 1px 4px 18px -1px rgba(199, 199, 199, 0.3);
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), -webkit-box-shadow 0.2s ease;
  transition: -webkit-transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), -webkit-box-shadow 0.2s ease;
  transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;
  transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease, -webkit-transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), -webkit-box-shadow 0.2s ease;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.my-list-item:not(:first-child) {
  margin-top: 10px;
}

.pokemon-name {
  text-transform: capitalize;
}

button.close {
  position: absolute;
  color: #ffffff;
  font-weight: bold;
  right: 15px;
  font-size: 14px;
  padding: 8px 15px;
  border: 1px solid #fff;
  border-radius: 6px;
  background: transparent;
}

button:active,
button:focus {
  outline: none;
}

button:active {
  background: #0d4a68;
  border-color: #0d4a68;
}
</style>
