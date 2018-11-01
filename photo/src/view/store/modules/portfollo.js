const state = {
  summoth: 10000,
  stocks: []
}
const mutations = {
  // 卖出去的股票
  'SEll-STOKCS' (state, {id, price, index}) {
    const recond = state.stocks.find(Element => Element.id === id)
    if (recond.index > index) {
      recond.index -= index
    } else {
      state.stocks.splice(state.stocks.indexOf(recond), 1)
    }
    state.summoth += index * price
  },
  // 买入
  'BUY-STOKCS' (state, {id, index, price}) {
    const recond = state.stocks.find(Element => Element.id === id)
    if (recond) {
      recond.index += index
    } else {
      state.stocks.push({
        id: id,
        index: index
      })
    }
    state.summoth -= index * price
  }
}
const actions = {
  sellstocks ({commit}, orden) {
    commit('SEll-STOKCS', orden)
  }
}
const getters = {
  // 展示的数据
  datasur (state, getters) {
    return state.stocks.map(stock => {
      const recond = getters.del.find(Element => Element.id === stock.id)
      return {
        id: stock.id,
        index: stock.index,
        name: recond.name,
        price: recond.price

      }
    })
  },
  fund: state => {
    return state.summoth
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
