<template>
    <div>
      <b-form @submit.prevent="onSearch">
          <b-form-input class="border-black" v-model="keyword" placeholder="영화제목을 입력하세요">

          </b-form-input>
          <MovieText v-if="searchList" :text="'Search Result'"></MovieText>
          <MovieList :movieList="searchList"></MovieList>
      </b-form>
    </div>
</template>

<script>
import MovieList from "../components/MovieList";
import MovieText from "../components/MovieText";
import {movieApi} from "../utils/axios";
import {mapMutations} from "vuex";
export default {
    components:{
        MovieList,MovieText
    },
    data(){
        return{
            keyword:"",
            searchList:"",
        }
    },
    methods:{
        ...mapMutations(["SET_LOADING"]),
        async onSearch(){
            this.SET_LOADING(true);
            if(!this.keyword){
                alert("영화 제목을 입력하세요");
                return;
            }
            const {data} = await movieApi.search(this.keyword);
            this.searchList = data.results;
            this.SET_LOADING(false);
        }
    },
    mounted(){
        this.SET_LOADING(false);
    }
}
</script>

<style>

</style>