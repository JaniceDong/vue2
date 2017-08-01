<template>
  <div id="app">
    <p> {{ $route.name }}</p>
    <ol>
      <li><router-link to="/foo">Go to 1</router-link></li>
      <li><router-link to="/bar">Go to 2</router-link></li>
      <li><router-link to="/foo2"> Go to 3</router-link></li>
    </ol>
    <router-view class="route2"></router-view>
    <router-view class="route1" name="left" style="width:50%;float:left;background-color:#6600ff"></router-view>
    <router-view class="route3" name="right" style="width:50%;float: right; background-color: #ff6600;"></router-view>
    <tran></tran>
  </div>
</template>
<script>
/*import child from './components/foo2.vue';*/
import Tran from './components/transition.vue'
export default {
  name: 'app',
  components:{
    Tran
  }
}
</script>

<style>

</style>
