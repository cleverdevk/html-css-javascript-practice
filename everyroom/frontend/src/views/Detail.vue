<template>
  <div>
      <div class="bg primary p-3 text-white text-center h3"></div>
      <div class="h3 ml-auto mr-auto text-center w-75 border-bottom">{{title}}</div>
      <div class="mt-3 ml-auto mr-auto text-center w-75">{{content}}</div>
      <div class="mt-3 ml-auto mr-auto text-center w-75">주소 : {{address}}</div>
      <div class="h3 mt-5 ml-auto mr-auto text-center w-75 border-bottom">방 사진</div>
      <div
      v-if="imageList.length"
      class="d-flex flex-wrap justify-content-center ml-auto mr-auto p-3 w-75"
      >
      <div class="border-top shadow ml-3 mt-3 card-wrapper"
          v-for="list in imageList" :key="list.src">
          <div
          v-if="list.image"
          class="post-image"
          :style="{backgroundImage: `url(${list.image})` }"
          ></div>
      </div>
    </div>
    <div class="h3 mt-5 ml-auto mr-auto text-center w-75 border-bottom">옵션</div>
      <div
      v-if="optionList.length"
      class=" ml-auto mr-auto w-100 d-flex flex-wrap justify-content-center p-3"
      >
      <div class="h5 m-2"
          v-for="list in optionList" :key="list.item">
          {{list.item}}
      </div>
      </div>
  </div>
</template>

<script>
import {postApi} from '../../utils/axios'
export default {
    data(){
        return{
            imageList:[],
            title:'',
            content:'',
            address:'',
            optionList:[]
        }
    },
    async mounted(){
        const params = this.$route.params.id
        const {data} = await postApi.getOne(params);
        this.title = data.room.title;
        this.content = data.room.content;
        this.address = data.room.address;
        console.log(data.room)
        if(data.room.Images.length){
            data.room.Images.forEach(async (img) => {
                const res = await postApi.getFile(img.src);
                const blob = new Blob([res.data],{
                    type: res.headers["content-type"],
                });
                this.imageList.push({image: window.URL.createObjectURL(blob)});
            });   
        }
        if(data.room.Options.length){
            data.room.Options.forEach(async (op) => {
                this.optionList.push({item:op.item});
            });   
        }
    }
}
</script>

<style>

</style>