import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    lists: [{
      id: '0',
      name: '张三',
      done: true
    }, {
      id: '1',
      name: '李四',
      done: false
    }]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {
    doneTodos: state => {
      return state.lists.filter(todo => todo.done)
    }
  },
  actions: {
    increment3(context) {
      context.commit('increment')
    }
  }
})

export default store;
