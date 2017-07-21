import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Foo
    },{
      path:'/foo',
      component:Foo
    },{
      path:'/bar',
      component:Bar
    }
  ]
})
