<template>
  <div class="movie-detail">
      <div
      v-if="movieDetail && movieDetail.backdrop_path"
      class="movie-detail-image"
      :style="{backgroundImage: `url(${image(movieDetail.backdrop_path)})`}">
      </div>
      <div class="movie-content d-flex">
        <div>
          <img
          class="mt-2"
          style="height:80vh;"
          :src="image(movieDetail.poster_path)"/>
        </div>
        <div class="ml-4 w-75">
        <h1 class="movie-title">{{movieDetail.title}}</h1>
        <div class="text-white movie-information-wrapper mt-4 d-flex align-items-center">
          <div v-if="movieDetail && movieDetail.release_date">{{movieDetail.release_date.split("-")[0]}} </div>
          <span class="ml-1"> · </span>
          <div>{{movieDetail.runtime}} 분</div>
          <span class="ml-1"> · </span>
          <div class="ml-2 d-flex">
            <div class="genres"
                  v-for="genre in movieDetail.genres"
                  :key="genre.id">
                  {{genre.name}}
                  </div>
          </div>
          <span v-if="movieDetail.homepage" class="ml-1">·</span>
          <a
          v-if="movieDetail.homepage"
          class="ml-1 h4 homepage-link text-white"
          target="_blank"
          :href="movieDetail.homepage">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg></a>
        </div>

        <div class="movie-overview mt-3">{{movieDetail.overview}}</div>
        <div class="text-left mt-5" v-if="movieDetail.videos && movieDetail.videos.results">
          <iframe
           v-if="movieDetail.videos.results[0]"
           class="mt-5"
           :key="movieDetail.videos.results[0].key"
           width="640"
           height="360"
           frameborder="0"
           allow="fullscreen"
           :src="youtube(movieDetail.videos.results[0].key)"
           ></iframe>
        </div>
      </div>
      
      </div>
  </div>
</template>

<script>
import {movieApi} from "../utils/axios"
import {mapMutations} from "vuex"
export default {
  data(){
    return {
      movieDetail: {}
    }
  },
  async mounted(){
    this.SET_LOADING(true);
    const {id} = this.$route.params;
    const {data} = await movieApi.movieDetail(id);
    this.movieDetail = data;
    this.SET_LOADING(false);
  },
  methods:{
    ...mapMutations(["SET_LOADING"]),
    image(img){
      return `https://image.tmdb.org/t/p/original/${img}`;
    },
    youtube(src){
      return `https://www.youtube.com/embed/${src}`;
    }
  },
  
}
</script>

<style>
.movie-detail{
  position: relative;
  padding: 40px;

}
.movie-detail-image{
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.movie-detail-image::after{
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  background-color: rgb(40,40,40);
  opacity: 0.8;
  content: "";
  display: block;
}
.movie-content{
  position: relative;
  z-index: 999;
}
.movie-title{
  margin-left: 5px;
}
.movie-information-wrapper{
  font-size:13px
}
.genres{
  display: flex;
  align-items: center;
}
.genres:not(:first-of-type)::before{
  content:"/";
  margin-bottom: 4px;
  margin-left: 6px;
  margin-right: 1px;
  font-size: 20px;
}
.movie-overview{
  max-width: 60%;
  font-size: 14px;
  color:#dddddd;
}
.homepage-link:hover{
  opacity: 0.5;
}
</style>