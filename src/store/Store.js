import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoList: [{
    id: '0',
    title: '标题1'
  }, {
    id: '1',
    title: '标题2'
  }],
  personList: [{
    id: '0',
    userName: '王先生1'
  }, {
    id: '1',
    userName: '王先生2'
  }]
}

const store = new Vuex.Store({
  state,
})


export default store
