<template>
  <div id="app">
    <p> {{ $route.name }}</p>
    <ol>
      <li><router-link to="/foo">Go to 1</router-link></li>
      <li><router-link to="/bar">Go to 2</router-link></li>
      <li><router-link to="/foo2"> Go to 3</router-link></li>
      <ol>
        <li><router-link to="/foo2/fo">Go to 1/1 </router-link></li>
        <li><router-link to="/foo2/ba">Go to 1/2</router-link></li>

        <li><router-link :to="{name:'ThirdFirst',params:{id:123}}">Go to 1/1 </router-link></li>
        <li><router-link :to="{name:'ThirdSecond',params:{id:321}}">Go to 1/2</router-link></li>
      </ol>
      <li><router-link to="/bar2">Go to 4</router-link></li>
    </ol>
    <router-view></router-view>
  </div>
</template>
<script>
/*import child from './components/foo2.vue';*/
export default {
  name: 'app',
 /* components:{
    child:child
  }*/
}
</script>

<style>

</style>
