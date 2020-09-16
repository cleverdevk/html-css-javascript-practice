<template>
  <button @click="toEmit">클릭하면 Emit으로 가자(2단계)</button>
</template>

<script>
export default {
    methods:{
        toEmit(){
            this.$emit("update", 10);
        }
    }
}
</script>

<style>

</style>