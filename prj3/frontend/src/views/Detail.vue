<template>
  <div>
      <div class="w-50 ml-auto mr-auto mt-5 shadow p-3">
          <div class="h1 text-center">{{post.title}}</div>
          <div>
              <div v-if="post.updatedAt" class="mt-2 text-right">
                  {{post.updatedAt}}
              </div>
              <div v-if="post.file"
                    class="download mt-3 text-right text-primary"
                    @click="download(post.file)"
            >
                {{post.file}}
          </div>
          <b-form-textarea
            disabled
            class="bg-white mt-3"
            id="textarea-rows"
            v-model="post.content"
            rows="8">

          </b-form-textarea>
      </div>
      </div>
    <div class="small mt-3" v-if="datacollection">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "../utils/LineChart"

export default {
    components:{
        LineChart
    },
    data(){
        return{
            datacollection: null,
            post: {},
            chartData: [],
            arr: [],
        }
    },
    methods:{
        renameFile(data){
        const fileName = `${data.split("&&")[0]}.${data.split("&&")[1].split(".")[1]}`;
        return fileName;
        },
        async download(file){
        const res = await axios({
            method:"GET",
            url:"http://localhost:8000/api/download",
            responseType:"blob",
            fileName: file
        });
        console.log("res", res);

        let blob = new Blob([res.data], {type:res.headers["content-type"]});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download",file);
        document.body.appendChild(link);
        link.click();
        },

        fillData () {
            // label에는 날짜
            // 에러 발생 시각
            this.datacollection = {
            labels: this.arr.map(li => new Date(li[0]).getDate() + "일"),
            datasets: this.chartData
            }
        },
    },
    async mounted(){
        const id = this.$route.params.id;
        const {data} = await axios.get(`http://localhost:8000/api/post/${id}`);
        console.log(data);
        this.post = data.post;
        console.log(data.log);
        if(data.log){
            const newArr = data.log.split("&&&&").reduce((acc,cur)=>{
                if(cur){
                    acc.push(cur.trim().split("__"))
                }
                return acc
            },[]);
            this.arr = newArr;
            const datasets = [
                {
                    label:"에러 발생 시각",
                    backgroundColor:"#f87979",
                    data: newArr.map(li=>new Date(li[0]).getHours()).sort(),
                }
            ];

            this.chartData = datasets;
            this.fillData();
            console.log(newArr);
        }
    }
    
}
</script>

<style>

</style>