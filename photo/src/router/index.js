import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import portfollo from '@/view/portfollo/portfollo'
import stock from '@/view/stocks/stock.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/portfollo',
    name: 'portfollo',
    component: portfollo
  },
  {
    path: '/pstock',
    name: 'stock',
    component: stock
  }
  ]
})
