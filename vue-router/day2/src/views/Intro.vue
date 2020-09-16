<template>
  <div>
      <h1>Intro Page 입니다.</h1>
      {{text}}
      <A :text="text"></A>
      <FriedChicken :text="salt"></FriedChicken>
      <Delicious></Delicious>
  </div>
</template>

<script>
// component 가져오기
import A from "../components/A"
import FriedChicken from '../components/FriedChicken'
import Delicious from "../components/Delicious"
export default {
  data(){
    return{
      text:"hello",
      salt:30
    }
  },
  components:{
    A,
    FriedChicken,
    Delicious
  }
}
</script>

<style>

</style>