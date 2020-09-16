<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <!-- 라우터 링크 말고도 이동 방법 -->
      <button @click="moveRouter">Intro</button> | 
      <a href="https://www.google.com">Google</a> | 
      <button @click="alert('HI')">alert</button> | 
      <router-link to="/testforemit">TestForEmit</router-link> | 
      <router-link to="/vuexex">VuexEx</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods:{
    moveRouter(){
      this.$router.push("/intro");
    },
    alert(text){
      alert(text)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
