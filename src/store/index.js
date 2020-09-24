import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibG9uZ3dheSIsImV4cCI6MTYwMTAwMTM1MywiaWF0IjoxNjAwOTE0OTUzfQ.6pryxQvXOeGY0sDIT5sEh2l3pD5AZqIa5_dBtXs2fWA"
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
