<template>
  <div class="delicious">
    <div>{{message}}</div>
    <div>Salt:{{salt}}</div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState(['message']),
    ...mapState(['salt'])
  }
}
</script>

<style>
    .delicious{
        background-color: coral;
        color: white;
        text-shadow: black 1px 1px 1px;
    }
</style>
