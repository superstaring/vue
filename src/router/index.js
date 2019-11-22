import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableListTotal from '@/components/TableListTotal'
import TableRout from '@/components/TableRout'
import StoreShow from '../store/StoreShow'
import Form from '../form/Form'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'TableListTotal',
      component: TableListTotal
    },
    {
      path: '/about/:id',
      name: 'TableRout',
      component: TableRout
    },
    {
      path: '/Vue/Vuex',
      name: 'StoreShow',
      component: StoreShow
    }, {
      path: '/Vue/Form',
      name: 'Form',
      component: Form
    }
  ],
  mode: 'history' // 去掉路径的#
})
