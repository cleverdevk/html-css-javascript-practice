<template>
  <div>
      <!-- v-on 같은 걸 @로 가능하다. :는 binding @는 function -->
    <b-form @submit.prevent="signup" class="w-50 ml-auto mr-auto mt-5">
      <b-form-group
        id="input-group-1"
        label="이메일"
        label-for="input-1"
      >
        <div class="d-flex justify-content-center">
            <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="이메일을 입력하세요"
        ></b-form-input>
        <b-button 
        @click.prevent="dupCheck"
        type="button" 
        variant="secondary" 
        class="ml-3" 
        style="min-width:100px">중복체크</b-button>
        </div>
        <div class="mt-2">
            <b-badge v-if="available===0" variant="secondary" v-bind="pass_check">{{description}}</b-badge>
          <b-badge v-else-if="available===1" variant="success" v-bind="pass_check">{{description}}</b-badge>
          <b-badge v-else variant="danger" v-bind="pass_check">{{description}}</b-badge>
        </div>
        
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

      <b-form-group id="input-group-3" label="비밀번호 확인" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password_check"
          @input="passCheck"
          type="password"
          required
          placeholder="비밀번호를 재입력하세요."
        ></b-form-input>
      </b-form-group>
      <div style="justify-content:left;">
          <b-badge v-if="pass===0" variant="secondary" v-bind="pass_check">{{pass_check}}</b-badge>
          <b-badge v-else-if="pass===1" variant="success" v-bind="pass_check">{{pass_check}}</b-badge>
          <b-badge v-else variant="danger" v-bind="pass_check">{{pass_check}}</b-badge>
      </div>
      
      <b-form-group id="input-group-4" label="이름" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.name"
          required
          placeholder="이름을 입력하세요."
        ></b-form-input>
      </b-form-group>
    <div class="mt-5 d-flex justify-content-center">
        <b-button v-if="available === 1 && pass === 1" type="submit" variant="primary">회원가입</b-button>
        <b-button v-else type="submit" variant="primary" disabled>회원가입</b-button>
      <b-button type="reset" variant="danger" class="ml-3" @click="reset">초기화</b-button>
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
          name: '',
          password: '',
          password_check: ''
        },
        description: "이메일 중복체크를 해주세요.",
        pass_check: "비밀번호를 동일하게 입력하세요",
        pass: 0,
        available: 0
      }
    },
    methods: {
      async signup(e){
          const {email, password, name} = this.form;
          if(email && password && name){
              try{
                  const {data} = await axios.post("http://localhost:8000/api/user",{
                      email, password, name
                  });
                  console.log(data);
                  if (data.signup){
                      alert("회원가입이 완료되었습니다.");
                      this.$router.push("/login");
                  } else {
                      if(data.errcode === "DUP"){
                          alert("중복된 이메일입니다.");
                      }
                  }
              } catch (err) {

              }
          } else {
              alert("이메일, 비밀번호, 이름을 입력하세요.");
          }
      },
      async dupCheck(e){
          const {email} = this.form;
          if(email){
              try{
                  const {data} = await axios.get(`http://localhost:8000/api/user?email=${email}`);
                  console.log(data);
                  if (data.duplicate){
                      this.description = "사용 가능한 이메일입니다."
                      this.available = 1;
                  } else {
                      this.description = "사용할 수 없는 이메일입니다."
                      this.available = 2;
                  }
              } catch (err) {

              }
          } else {
              alert("이메일을 입력하세요.");
          }
      },
      passCheck(){
          const {password, password_check} = this.form;
          if (password === password_check){
              this.pass_check = "비밀번호가 일치합니다.";
              this.pass = 1;
          } else {
              this.pass_check = "비밀번호가 일치하지 않습니다.";
              this.pass = 2;
          }
      },
      reset(){
          this.pass = 0;
          this.available = 0;
          this.description = "이메일 중복체크를 해주세요.";
          this.pass_check = "비밀번호를 동일하게 입력하세요";

      }
    }
  }
</script>

<style>

</style>