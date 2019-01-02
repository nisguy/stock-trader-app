import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portfolio: [
      {
        title: 'BMW',
        price: 110
      },
      {
        title: 'Apple',
        price: 203
      },
      {
        title: 'Google',
        price: 170
      },
      {
        title: 'Microsoft',
        price: 95
      }
    ],
    funds: 10000,
    stocks: []
  },
  mutations: {
    buyStock (state, payload) {
      payload.quantity = Number(payload.quantity)
      let cost = payload.quantity * payload.price
      state.funds -= cost
      let record = state.stocks.find(element => element.title == payload.title)
      if (record) {
        record.quantity += payload.quantity
      } else {
        state.stocks.push({quantity: payload.quantity, title: payload.title})
      }
    },
    sellStock (state, payload) {
        payload.quantity = Number(payload.quantity)
      let cost = payload.quantity * payload.price
      state.funds += cost
      let record = state.stocks.find(element => element.title == payload.title)
      if (payload.quantity < record.quantity) {
        record.quantity -= payload.quantity
      } else if (payload.quantity = record.quantity) {
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }
    }
  },
  actions: {
    buyStock ({commit}, payload) {
      commit('buyStock', payload)
    },
    sellStock ({commit}, payload) {
      commit('sellStock', payload)
    }
  },
  getters: {
    portfolio (state) {
      return state.portfolio
    },
    stocks (state) {
      return state.stocks
    },
    funds (state) {
      return state.funds
    }
  }
})
