<template>
  <div>
      A입니다.
      {{text}}
      <B :text="text"></B>
  </div>
</template>

<script>
import B from "./B"
export default {
    components:{
        B
    },
    props:{
        text:String
    }
}
</script>

<style>

</style>