<template>
  <div>
      test for emit
      <!-- 여기서 이벤트를 받음 -->
      <Emit @check="showAlert" @updateTwo="showFinalAlert"></Emit>
      <Delicious></Delicious>
  </div>
</template>

<script>
import Emit from "../components/Emit"
import Delicious from "../components/Delicious"
export default {
    components:{
        Emit, Delicious
    },
    methods:{
        showAlert(num){
            alert("Emit 도착 완료" + String(num))
        },
        showFinalAlert(num){
            alert("Emit 2단계 거쳐서 도착 완료" + String(num))
        }
    }
}
</script>

<style>

</style>