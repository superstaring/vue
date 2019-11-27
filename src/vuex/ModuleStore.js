import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const ModuleA = {
  state: {
    countA: 1,
    lists: [{
      id: '0',
      name: '张三a'
    }, {
      id: '1',
      name: '李四a'
    }]
  }

}
const ModuleB = {
  state: {
    countB: 10,
    lists: [{
      id: '0',
      name: '张三b'
    }]
  }
}

import getters from './getters'
const store = new Vuex.Store({
  modules: {
    a: ModuleA,
    b: ModuleB
  },
  getters
})

export default store;
