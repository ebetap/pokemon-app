<template>
  <div id="app">
    <div class="nav-menu d-flex">
      <div class="menu-item" @click="$router.push('/')">Home</div>
      <div class="menu-item" @click="$router.push('/my-pokemon')">My Pokemon</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'PokemonApp'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
html, 
body,
h1,h2,h3,h4,h5 {
  margin: 0;
}

.d-flex {
  display: flex;
}

.nav-menu {
  justify-content: space-around;
  background: #2f6f7d;
  font-weight: bold;
  color: #ffffff;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 9999;
}

.nav-menu .menu-item {
  padding: 17px 15px;
  width: 50%;
  text-align: center;
  cursor: pointer;
}

.nav-menu .menu-item:first-child {
  border-right: 1px solid #ffffff;
}

.btn {
  position: relative;
  border-radius: 25px;
  background: linear-gradient(to left,#0fa399 0,#0d4a68 100%);
  text-transform: uppercase;
  transition: all .5s;
  -webkit-transition: all .5s;
  padding: 13px 25px;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
