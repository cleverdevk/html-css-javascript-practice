<template>
    <div v-if="movieList" class="d-flex flex-wrap">
          <div v-for="li in movieList" :key="li.id" class="movie-card" style="width:125px;">
              <b-img @click="goDetail(li.id)" v-if="li.poster_path" 
                        :src="image(li.poster_path)" 
                        fluid
                        style="width:125px; height:180px">
              </b-img>
              <b-img  v-else 
                        :src="noImage" 
                        fluid
                        style="width:125px; height:180px">
              </b-img>
              <div class="movie-information">
                <div class="movie-title">{{li.title}}</div>
                <div class="movie-date" v-if="li.release_date">
                    {{li.release_date.split("-")[0]}}
                </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    props:['movieList'],
    data(){
        return{
            noImage: require("../assets/error.png"),
        }
    },
    methods:{
        image(img){
            return `https://image.tmdb.org/t/p/w300/${img}`;
        },
        goDetail(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style>

</style>