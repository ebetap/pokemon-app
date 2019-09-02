import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './views/pokemon-list'
import MyPokemonList from './views/my-pokemon-list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PokemonList',
      component: PokemonList
    },
    {
      path: '/detail/:name',
      name: 'PokemonDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/pokemon-detail')
    },
    {
      path: '/my-pokemon',
      name: 'MyPokemonList',
      component: MyPokemonList
    },
  ]
})
