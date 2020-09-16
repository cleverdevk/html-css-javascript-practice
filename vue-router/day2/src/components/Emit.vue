<template>
  <div>
      Emit
      <button @click="serveToParent">부모로 이벤트 전달하기</button>
      <Emit2 @update="serveToTestForEmit"></Emit2>
  </div>
</template>

<script>
import Emit2 from './Emit2'
export default {
    components:{
        Emit2
    },
    methods:{
        serveToParent(){
            // 넘겨줄 이벤트 명, 값
            this.$emit("check",5);
        },
        serveToTestForEmit(num){
            alert("EmitTwo로부터 전달 완료" + String(num));
            this.$emit("updateTwo", num);
        }
    }
}
</script>

<style>

</style>