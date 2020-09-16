<template>
  <div id="app">
    <div id="nav" class="d-flex align-items-center justify-content-between p-3 border-bottom">
      <div class="d-flex align-items-center">
        <router-link to="/" class="ml-3 h2 text-primary text-decoration-none">EveryRoom</router-link>
      </div>

      <div class="d-flex align-items-center">
        <ul class="d-flex">
          <li @click="$router.push('/list')">방 찾기</li>
          <li v-if="Number(loginData.auth)===3">관심목록</li>
          <li @click="$router.push('/post')" v-if="Number(loginData.auth)===2">방 내놓기</li>
        </ul>
        <ul class="d-flex ml-5 text-secondary">
          <div v-if="!loginData.id" @click="SET_LOGIN_MODAL(true)">회원가입 · 로그인</div>
          <div v-else class="d-flex">
            <!-- 로그인 후에 이름 및 로그아웃 나올 예정 -->
            <li>{{loginData.name}}</li>
            <li v-if="loginData.id" @click="logout" class="ml-3">로그아웃</li>
          </div>
        </ul>
      </div>
    </div>
    <Login v-if="modal.login"></Login>
    <Register v-if="modal.register"></Register>
    <router-view/>
  </div>
</template>
<script>
import Login from "./components/Login"
import Register from "./components/Register"
import {mapMutations, mapState} from "vuex";
export default {
  components:{
    Login, Register
  },
  computed:{
    ...mapState(["modal","loginData"])
  },
  methods:{
    ...mapMutations(["SET_LOGIN_MODAL","SET_LOGIN_DATA"]),
    logout(){
      this.SET_LOGIN_DATA("");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("auth");
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
body{
  font-family: 'Noto Sans KR', sans-serif !important;
}
ul{
  margin: 0 !important;
  padding: 0;
  font-weight: 400;
  list-style: none;
}
ul li:hover{
  color: #1564f9;
  cursor: pointer;
}
ul li:not(:first-child){
  margin-left: 20px;
}
.router-link-exact-active{
  color:#1564f9;
}
.router-link {
  color: #888888;
  text-decoration: none;
}
.router-link:hover{
  color:#1564f9;
  cursor: pointer;
}
</style>
