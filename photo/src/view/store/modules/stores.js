import val from '../../data/data'
const state = {
  stocks: []
}
const getters = {
  del: state => {
    return state.stocks
  }
}
const mutations = {
  'SET_STOCKS' (state, val) {
    state.stocks = val
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(element => {
      element.price = Math.round((1 + Math.random() - 0.5) * element.price)
    })
  }
}
const actions = {
  buyStock: ({
    commit
  }, order) => {
    commit('BUY-STOKCS', order)
  },
  initstock: ({
    commit
  }) => {
    commit('SET_STOCKS', val)
    // console.log(data)
  },
  randmizestocks: ({
    commit
  }) => {
    commit('RND_STOCKS')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
