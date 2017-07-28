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
  mode:'history',
  base:__dirname,
  routes: [
    {path: '/', component: First},
    {path:'/foo', component:First},
    {path:'/bar', component:Second},
    {path:'/foo2', component:Guodu,
      children:[
        {path:'/', component:Third},
        {path:'fo', component:ThirdFirst},
        {path:'ba', redirect:'/'}
      ]},
    {path:'/bar2', component:Fourth}
  ]
})
