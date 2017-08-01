import Vue from 'vue'
import Router from 'vue-router'

import First from '@/components/foo'
import Second from '@/components/bar'
import Third from '@/components/foo2'
import Page404 from '@/components/page404'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {path:'/'},
    {path:'/params/:aaa/:bbb'},
    {path:'/params-regex/:id(\\w+)'},
    {path:"/first",component:First},
    {path:"/second",component:Second},
    {path:"/third",component:Third},
    {path:"*",component:Page404}
  ]
})
