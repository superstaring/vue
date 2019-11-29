import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableListTotal from '@/components/TableListTotal'
import TableRout from '@/components/TableRout'
import StoreShow from '../store/StoreShow'
import Form from '../form/Form'
import VueStore from '../vuex/VueStore'
import VueStoreTwo from '../vuex/VueStoreTwo'
import VueStoreThree from '../vuex/VueStoreThree'
import KeepAlive from '../keep-alive/KeepAlive'

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
    },
    {
      path: '/Vue/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/Vue/KeepAlive',
      name: 'KeepAlive',
      component: KeepAlive
    },
    {
      path: '/Vue/VuexOne',
      name: 'VueStore',
      component: VueStore
    },
    {
      path: '/Vue/VuexTwo',
      name: 'Vuex',
      component: VueStoreTwo
    },
    {
      path: '/Vue/VuexThree',
      name: 'VueStoreThree',
      component: VueStoreThree
    }
  ],
  mode: 'history' // 去掉路径的#
})
