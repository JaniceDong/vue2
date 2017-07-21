<template>
  <div id="app">
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  width:100%;
  height:100%;
  overflow: hidden;
  text-align: center;
}
  #app a{
    display: inline-block;
    height: 20px;
    text-decoration: none;
  }
  .router-link-active{
    color: red;
  }
</style>
