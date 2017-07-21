import Vue from 'vue'
import Router from 'vue-router'

import Foo from '@/components/foo'
import Bar from '@/components/bar'

import Foo2 from '@/components/foo2'
import Bar2 from '@/components/bar2'

import Fo from '@/components/fo'
import Ba from '@/components/ba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Foo,
    },{
      path:'/foo',
      component:Foo
    },{
      path:'/bar',
      component:Bar
    },{
      path:'/foo/:id',
      component:Foo2,
      children:[
        {
          path:'fo',
          component:Fo
        },
        {
          path:'ba',
          component:Ba
        }
      ]
    },{
      path:'/bar/:id',
      component:Bar2
    }
  ]
})
