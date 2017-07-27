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
    {path: '/', components: {
      default: First,
      left:Second,
      right:Third
    }},
    {path:'/foo', components:{
      default: First,
      left:Second,
      right:Third
    }},
    {path:'/bar', components:{
      default: Second,
      left:First,
      right:Third
    }},
    {path:'/foo2', components:{
      default: Third,
      left:First,
      right:Second
    }}
  ]
})
