<template>
  <div id="pg404">
    <h2>error:404</h2>
  </div>
</template>
<script type="text/ecmascript-6">
 export default{
   data(){
     return {

     }
   },
   beforeRouteEnter:(to,from,next) => {
    console.log(to);
     console.log(from);
     next();
   },
   beforeRouteLeave:(to,from,next) => {
     console.log(to);
     console.log(from);
     next();
   }
 }
</script>
<style scoped>

</style>
