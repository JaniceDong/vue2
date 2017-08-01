<template>
  <div id="app">
    <h1>路由url传值</h1>
    <button @click="qianjin">前进</button>
    <button @click="houtui">后退</button>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/params/111/222">/params/111/222</router-link></li>
      <li><router-link to="/params-regex/333">/params-regex/333</router-link></li>
      <li><router-link to="/first">first</router-link></li>
      <li><router-link to="/second">second</router-link></li>
      <li><router-link to="/third">third</router-link></li>
      <li><router-link to="/skdjkf">where is no message</router-link></li>
    </ul>
    <p>Show</p>
    <transition :name="aaa" mode="out-in">
      <router-view></router-view>
    </transition>
    <pre>
      <code>
        {{ JSON.stringify($route,null,2) }}
      </code>
    </pre>

  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      aaa:"fade"
    }
  },
  watch:{
    "$route"(from,to){
      if(from.path == "/first"){
         this.aaa = "fade1";
      }else{
        this.aaa = "fade"
      }
    }
  },
  methods:{
    qianjin: function () {
      alert("前进");
      console.log(router);
      router.go(1);
    },
    houtui: function () {
      alert("后退");
      router.go(-1);
    }
  }
}
</script>

<style>
  a.router-link-active{
    color: #f66;
  }
  .fade-enter,.fade-leave-active{
    opacity:0;
  }
  .fade-enter-active,.fade-leave{
    transition: opacity .5s;
  }
  .fade1-enter,.fade1-leave-active{
    background: red;
    color: yellow;
  }
  .fade1-enter-active,.fade1-leave{
    transition: background .5s ease-in,color 0.3s ease-out;
  }
</style>
