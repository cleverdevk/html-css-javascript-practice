<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">COMPLETED</th>
          <th scope="col">USERID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in hello" v-bind:key="data">
          <th scope="row">{{data.id}}</th>
          <td>{{data.title}}</td>
          <td>{{data.completed}}</td>
          <td>{{data.UserId}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      hello: ""
    } 
  },
  methods:{
    async getData(){
      const data = await axios.get("https://koreanjson.com/todos");
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