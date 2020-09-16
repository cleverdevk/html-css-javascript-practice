<template>
  <div>
      <div class="d-flex flex-wrap" v-if="nowPlaying">
          <MovieText :movieText="'Now Playing'"/>
          <MovieList :movieList="nowPlaying"></MovieList>
      </div>
      <div class="d-flex flex-wrap" v-if="popular">
          <MovieText :movieText="'Popular'"/>
          <MovieList :movieList="popular"></MovieList>
      </div>
      <div class="d-flex flex-wrap" v-if="upComing">
          <MovieText :movieText="'Comming Soon'"/>
          <MovieList :movieList="upComing"></MovieList>
      </div>
  </div>
</template>

<script>
import {movieApi} from "../utils/axios"
import MovieList from "../components/MovieList"
import MovieText from "../components/MovieText"
import { mapMutations } from 'vuex'
export default {
    data(){
        return {
            nowPlaying:[],
            popular:[],
            upComing:[],
        }
    },
    created(){
        this.SET_LOADING(true);
    },
    async mounted(){
        // const {data} = await movieApi.nowPlaying();
        // console.log(data);
        // this.movieList = data.results;
        // console.log(this.movieList);
        try{
            const {nowPlaying, popular, upComing} = movieApi;
            const requestArr = [nowPlaying,popular,upComing];
            const [now,pop,up] = await Promise.all(
                requestArr.map(li => li().then(res => res.data.results))
            );
            this.SET_LOADING(false);
            this.nowPlaying = now;
            this.popular = pop;
            this.upComing = up;
        }catch(err){
            console.log(err);
        }
    },
    components:{
        MovieList, MovieText
    },
    methods:{
        ...mapMutations(["SET_LOADING"])
    },
    
}
</script>

<style>
.movie-card{
    margin:12px;
    width:125px;
    font-size:12px;
    font-weight: 400;
}
.movie-card:hover{
    opacity: 0.5;
    cursor: pointer;
}
.movie-title{
    color:white
}
.movie-card img{
    height: 180px;
    border-radius: 5px;
}
.movie-information{
    margin-top: 7px;
}
.movie-date{
    font-size: 10px;
    margin-top: 5px;
    color: #cccccc;
}
</style>