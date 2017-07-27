<template>
  <div id="app">
    <h1>路由url传值</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/params/111/222">/params/111/222</router-link></li>
      <li><router-link to="/params-regex/333">/params-regex/333</router-link></li>
    </ul>
    <p>Show</p>
    <pre>
      <code>
        {{ JSON.stringify($route,null,2) }}
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
