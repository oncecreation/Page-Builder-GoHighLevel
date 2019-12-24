import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      elements: []
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore