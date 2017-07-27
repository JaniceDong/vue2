import Vue from 'vue'
import Router from 'vue-router'

import First from '@/components/foo'
import Second from '@/components/bar'
import Third from '@/components/foo2'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {path:'/'},
    {path:'/params/:aaa/:bbb'},
    {path:'/params-regex/:id(\\w+)'}
  ]
})
