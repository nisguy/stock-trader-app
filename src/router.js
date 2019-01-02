import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import stocks from './components/stocks.vue'
import portfolio from './components/portfolio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: stocks
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    }
  ],
  mode: 'history'
})
