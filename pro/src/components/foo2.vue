<template>
  <div class="foo2">
    动态路由{{ $route.params.id }}
    <router-link to="fo">Go to Fo</router-link>
    <router-link to="ba">Go to Ba</router-link>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped>

</style>
