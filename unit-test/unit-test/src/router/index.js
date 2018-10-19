import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FuncTest from '@/components/FuncTest'
import Quantity from '@/components/Quantity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/func',
      name: 'Functest',
      component: FuncTest
    },
    {
      path: '/qua',
      name: 'Quantity',
      component: Quantity
    }
  ]
})
