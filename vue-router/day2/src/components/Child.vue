<template>
  <div>
      Child
      {{$store.state.name}}
      <button @click="changeData">클릭</button>
      <input v-model="inputData"/>
      <button @click="CHANGE_NAME('밥')">밥으로</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
export default {
    computed:{
        // mapstate는 꼭 computed 안에 정의해야 한다.
        ...mapState("name")
    },
    data(){
        return{
            inputData:""
        }
    },
    methods:{
        ...mapMutations(['CHANGE_NAME']),
        changeData(){
            this.$store.commit("CHANGE_NAME", this.inputData);
        }
    }
}
</script>

<style>

</style>