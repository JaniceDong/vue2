<template>
  <div id="app">
    <p> {{ $route.name }}</p>
    <ol>
      <li><router-link to="/foo">Go to 1</router-link></li>
      <li><router-link to="/bar">Go to 2</router-link></li>
      <li><router-link to="/foo2"> Go to 3</router-link></li>
      <ol>
        <li><router-link :to="{path:'/foo2/fo',query:{aaa:'bbb'}}">Go to 1/1 </router-link></li>
        <li><router-link to="/foo2/ba">Go to ba </router-link></li>
      </ol>
      <li><router-link to="/bar2">Go to 4</router-link></li>
      <li><router-link to="/gogo">gogo</router-link></li>
      <li><router-link to="/aaa/789">Go to {{ $route.params.id }}</router-link></li>
      <li><router-link to="/bbb/135">Go Go {{ $route.params.id }}</router-link></li>
      <li><router-link to="/ccc/001">Go Go {{ $route.params.id }}</router-link></li>
    </ol>
    <router-view></router-view>
  </div>
</template>
<script>
/*import child from './components/foo2.vue';*/
export default {
  name: 'app'
}
</script>

<style>

</style>
