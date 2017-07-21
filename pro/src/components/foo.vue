<template>
  <div class="foo">
    <p>{{ message }}</p>
  </div>

</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      message:'我是foo插值'
    }
  }
}
</script>
<style type="text/css">
.foo{
  width:100%;
  height:500px;
  color:green;
}
.router-link-active{
  color: purple;
}
</style>
