import Vue from 'vue'
import Router from 'vue-router'

import First from '@/components/foo'
import Second from '@/components/bar'

import Third from '@/components/foo2'
import Fourth from '@/components/bar2'

import Guodu from '@/components/guodu'
import ThirdFirst from '@/components/fo'
import ThirdSecond from '@/components/ba'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: First, name:"Home"},
    {path:'/foo', component:First, name:"First"},
    {path:'/bar', component:Second, name:"Second"},
    {path:'/foo2', component:Guodu,
      children:[
        {path:'/', component:Third, name:"Third"},
        {path:'fo', component:ThirdFirst, name:"ThirdFirst"},
        {path:'ba', component:ThirdSecond, name:"ThirdSecond"}
      ]},
    {path:'/bar2', component:Fourth, name:"Fourth"}
  ]
})
