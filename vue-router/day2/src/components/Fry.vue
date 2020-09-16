<template>
  <div>
      <Chicken :salt="salt" @updateText="updateText"></Chicken>
  </div>
</template>

<script>
import Chicken from './Chicken'
export default {
    props:{
        salt:Number
    },
    components:{
        Chicken
    },
    methods:{
        updateText(text){
            this.$emit("updateText2",text);
        }
    }
}
</script>

<style>

</style>