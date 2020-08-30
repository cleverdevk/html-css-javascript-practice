<template>
  <div>
      <section id="link-part" class="sort-center pt-5" style="height: 100%;">
            <div class="h1 bg-dark p-4 text-white w-100 text-center text-shadow-2-gray">
                Projects Link
            </div>
            <h3 class="mt-5" style="padding-right: 80%;">Projects what I did.</h3>
            <div class="d-flex flex-wrap p-5">
                

                <div class="card m-3" style="width: 18rem;">
                    <img src="../assets/guava.png" class="card-img-top" alt="guava" style="width: 17.5rem; height: 11rem;">
                    <div class="card-body">
                      <h5 class="card-title">GUAVA</h5>
                      <p class="card-text" style="height: 6rem;">Grab UAV Accurately - Low Cost UAV Surveilance System.</p>
                      <b-button v-b-modal.modal-lg variant="primary" @click="modalClick(0)">Detail</b-button>
                    </div>
                  </div>
                  <div class="card m-3" style="width: 18rem;">
                    <img src="../assets/ddoyak.png" class="card-img-top" alt="ddoyak" style="width: 17.5rem; height: 11rem;">
                    <div class="card-body">
                      <h5 class="card-title">DDOYAK(또약)</h5>
                      <p class="card-text" style="height: 6rem;">약을 규칙적으로 복용해야하는 사람들에게 복용을 도와줄 수 있도록 돕는 디바이스와 안드로이드 Application</p>
                            <b-button v-b-modal.modal-lg variant="primary" @click="modalClick(1)">Detail</b-button>
                    </div>
                  </div>
                  <div class="card m-3" style="width: 18rem;">
                    <img src="../assets/pf.jpg" class="card-img-top" alt="cat" style="width: 17.5rem; height: 11rem;">
                    <div class="card-body">
                      <h5 class="card-title">Portfolio</h5>
                      <p class="card-text" style="height: 6rem;">Linux Shell 컨셉의 Portfolio <br> (미완성)</p>
                      <b-button v-b-modal.modal-lg variant="primary" @click="modalClick(2)">Detail</b-button>
                    </div>
                  </div>
                  <div class="card m-3" style="width: 18rem;">
                    <img src="../assets/weather.jpg" class="card-img-top" alt="cat" style="width: 17.5rem; height: 11rem;">
                    <div class="card-body">
                      <h5 class="card-title">날씨 알리미</h5>
                      <p class="card-text" style="height: 6rem;">날씨 알리미</p>
                      <b-button v-b-modal.modal-lg variant="primary" @click="modalClick(3)">Detail</b-button>
                    </div>
                  </div>
                  <div class="card m-3" style="width: 18rem;">
                    <img src="../assets/cat.jpg" class="card-img-top" alt="cat" style="width: 17.5rem; height: 11rem;">
                    <div class="card-body">
                      <h5 class="card-title">CAT</h5>
                      <p class="card-text" style="height: 6rem;">feline animal cat sample</p>
                      <a href="https://ko.wikipedia.org/wiki/CAT" class="btn btn-primary">Go</a>
                    </div>
                  </div>
                  <div class="card m-3" style="width: 18rem;">
                    <img src="../assets/cat.jpg" class="card-img-top" alt="cat" style="width: 17.5rem; height: 11rem;">
                    <div class="card-body">
                      <h5 class="card-title">CAT</h5>
                      <p class="card-text" style="height: 6rem;">feline animal cat sample</p>
                      <a href="https://ko.wikipedia.org/wiki/CAT" class="btn btn-primary">Go</a>
                    </div>
                  </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Detail</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="full-name" class="col-form-label" style="font-weight: bold;"></label>
                      <label for="content" class="col-form-label"></label>
                      <label for="picture-text" class="col-form-label" style="font-weight: bold;">결과물 사진</label>
                      <img for="modal-image" src="../assets/cat.jpg" style="width: 100%; margin-bottom: 20px;"/>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                    <a href="" class="btn btn-primary" target="_blank">Go To Project Page</a>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- modal -->
        <b-modal id="modal-lg" size="lg" title="Detail">
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label v-bind="currentData.fullname" class="col-form-label" style="font-weight: bold;">{{currentData.full_name}}</label>
                        <label v-bind="currentData.content" class="col-form-label">{{currentData.content}}</label>
                        <label for="picture-text" class="col-form-label" style="font-weight: bold;">결과물 사진</label>
                        <img v-if="currentData.idx===0" src="../assets/guava2.jpg" style="width: 100%; margin-bottom: 20px;"/>
                        <img v-if="currentData.idx===1" src="../assets/ddoyak2.jpg" style="width: 100%; margin-bottom: 20px;"/>
                        <img v-if="currentData.idx===2" src="../assets/pf2.jpg" style="width: 100%; margin-bottom: 20px;"/>
                        <img v-if="currentData.idx===3" src="../assets/weather2.jpg" style="width: 100%; margin-bottom: 20px;"/>
                        <img v-if="currentData.idx===4" src="../assets/cat.jpg" style="width: 100%; margin-bottom: 20px;"/>
                        <img v-if="currentData.idx===5" src="../assets/cat.jpg" style="width: 100%; margin-bottom: 20px;"/>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                      <a v-bind:href="currentData.page" class="btn btn-primary" target="_blank">Go To Project Page</a>
                  </div>
                </b-modal>
  </div>
</template>

<script>
export default {
    data(){
      return{
        currentData:{
          idx:0,
          title:"",
          full_name:"",
          content:"",
          image:"../assets/cat.jpg",
          page:""
        },
        modalData:[
          {
            idx:0,
            title:"GUAVA",
            full_name:"Grab UAV Accurately",
            content:`IITP에서 주관한 2019 Fall Purdue University Capstone Project로 진행된 프로젝트이며, Purdue University와 Argonne National Labs.의 지원을 받아 진행했다.
                                            레이더와 카메라를 이용한 저비용 무인 항공기 탐지 시스템. 카메라 사진과 SAR Image를 통해 UAV를 탐지하는 시스템. 
                                            라즈베리파이, Synthetic Aperture Radar, Pi Camera, ROS, Flask를 이용해 개발했다.`,
            image:"../assets/cat.jpg",
            page:"https://github.com/seonghapark/cuav"
          },
          {
            idx:1,
             title:"DDOYAK (또 약)",
                            full_name:"또 약 안 먹었어?",
                            content:`교내 학술동아리 CLUG에서 팀을 이루어 공모전 출품을 목표로 진행한 IoT 프로젝트이며, 교내 학술제 수상 및 전국 임베디드소프트웨어 경진대회에 본선 진출 및 작품 전시를 하였다.
                                            또약 프로젝트는 약을 규칙적으로 복용해야하는 사람들에게 복용을 도와줄 수 있도록 돕는 라즈베리파이 기반 디바이스와 안드로이드 Application이다.
                                            라즈베리파이, 초음파 센서, 스텝 모터를 사용하여 디바이스를 제작하고, Google Cloud Platform의 Cloud Messaging, Realtime Database를 사용하여 개발하였다.`,
                            image:"../assets/ddoyak2.jpg",
                            page:"https://github.com/cleverdevk/DDOYAK"
          },
          {
            idx:2,
            title:"Portfolio",
                            full_name:"Shell Concept Portfolio",
                            content:"HTML/CSS/Javascript만으로 개발 중인 Linux Shell Concept의 Portfolio이다. 현재 진행중이며, 아직 기기간 호환성이 보장되지 않는다.",
                            image:"../assets/pf2.jpg",
                            page:"https://cleverdevk.github.io/portfolio/load.html"
          },
          {
            idx:3,
            title:"날씨 알리미",
                            full_name:"날씨 알리미",
                            content:"HTML/CSS/Javascript 및 OpenWeatherMap API를 활용한 날씨 알림 WEB Application.",
                            image:"../assets/weather2.jpg",
                            page:"../assets/prj2/index.html"
          }
        ]
      }
    },
    methods:{
      modalClick(n){
        this.currentData = this.modalData[n];
        console.log(this.currentData);
      },
    }
}
</script>

<style>

</style>