<template>
  <div>
      Vuex
      <!-- state data를 가져오는 방식 -->
      {{$store.state.name}}
      <Child></Child>
      <Delicious></Delicious>
    <div>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
    </div>
  </div>
</template>

<script>
import Child from "../components/Child"
import Delicious from "../components/Delicious"
export default {
    components:{
        Child,Delicious
    }
}
</script>

<style>

</style>