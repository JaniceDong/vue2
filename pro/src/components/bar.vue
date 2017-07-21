<template>
 <div class="bar">
   <p>{{ message }}</p>
 </div>

</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      message: '我是bar的插值'
    }
  }
}
</script>
<style type="text/css">
.bar{
  width:100%;
  height: 500px;
  color:blue;
}
</style>
