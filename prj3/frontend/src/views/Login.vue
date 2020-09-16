<template>
  <div>
      <!-- v-on 같은 걸 @로 가능하다. :는 binding @는 function -->
    <b-form @submit.prevent="login" class="w-50 ml-auto mr-auto mt-5">
      <b-form-group
        id="input-group-1"
        label="이메일"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="이메일을 입력하세요"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="비밀번호" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="비밀번호를 입력하세요."
        ></b-form-input>
      </b-form-group>
    <div class="mt-5">
        <b-button class="w-100" type="submit" variant="primary">로그인</b-button>
      <b-button href="/signup" class="w-100 mt-3" type="button" variant="success">회원가입</b-button>
    </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
      }
    },
    methods: {
      async login(e){
          const {email, password} = this.form;
          if(email && password){
              try{
                  const {data} = await axios.post("http://localhost:8000/api/login",{
                      email, password, name
                  });
                  console.log(data);
                  if(data.login){
                    //   로그인을 유지.
                    //   세션을 활용
                    sessionStorage.setItem("id", data.id);
                    
                    //   vuex 활용 - store에 로그인 정보 저장.
                    this.$store.commit("SET_LOGIN_DATA", data.id);
                    console.log(this.$store.state.loginData);
                    
                    //   메인페이지로 이동
                    this.$router.push("/");
                  }
                  else{
                    alert("아이디 비밀번호를 확인하세요.");
                  }
                  
              } catch (err) {
                  console.log(err);
              }
          } else {
              alert("이메일, 비밀번호, 이름을 입력하세요.");
          }
      }
    }
  }
</script>

<style>

</style>