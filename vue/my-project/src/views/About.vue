<template>
  <div>
    <div v-for="data in hello" v-bind:key="data">
      {{data.id}}. {{data.title}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      hello:""
    } 
  },
  methods:{
    async getData(){
      const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.hello = data.data;
    }
    // lifecycle 중에 mounted에서 실행하자
  },
  mounted(){
    this.getData();
  }
}
</script>

<style>

</style>