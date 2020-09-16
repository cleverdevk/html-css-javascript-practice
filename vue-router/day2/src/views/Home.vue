<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Delicious></Delicious>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Delicious from "../components/Delicious"

export default {
  name: 'Home',
  components: {
    HelloWorld, Delicious
  }
}
</script>
