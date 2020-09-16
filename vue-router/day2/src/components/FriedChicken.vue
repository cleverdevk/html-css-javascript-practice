<template>
  <div>
      <Fry :salt="salt" @updateText2="updateText2"></Fry>
      {{text}}
  </div>
</template>

<script>
import Fry from './Fry'
export default {
    data(){
        return{
            text:"값 기다리는중",
            salt:30
        }
    },
    components:{
        Fry
    },
    methods:{
        updateText2(text){
            this.text = text;
        }
    }

}
</script>

<style>

</style>