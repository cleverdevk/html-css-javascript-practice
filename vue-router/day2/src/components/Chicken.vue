<template>
  <div>
      <button @click="Salt()">간 맞추기</button>
      <button @click="updateText()">치킨은 맛있다</button>
  </div>
</template>

<script>
export default {
    props:{
        salt:Number
    },
    methods:{
        Salt(){
            alert(this.salt)
        },
        updateText(){
            this.$emit("updateText","치킨은 맛있다.");
        }
    }
}
</script>

<style>

</style>