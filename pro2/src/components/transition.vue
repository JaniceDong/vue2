<template>
  <div class="demo">
    <button @click="show =! show"> show/hide text</button>
    <transition name="fade">
      <p v-if="show"> Hellow World!</p>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
 export default{
   name:"demo",
   data(){
     return{
       show:true
     }
   }
 }
</script>
<style scoped>
.fade-enter,.fade-leave-active{
  opacity:0;
}
  .fade-enter-active,.fade-leave{
    transition: opacity 1s;
  }
</style>
