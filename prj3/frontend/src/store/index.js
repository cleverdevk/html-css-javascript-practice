import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 데이터를 관리해주는 집합소라고 생각하면 된다.

export default new Vuex.Store({
  state: {
    loginData: sessionStorage.getItem("id") ? sessionStorage.getItem("id")  : false
  },
  mutations: {
    // state를 변경할 때 mutations 활용
    SET_LOGIN_DATA(state, data){
      state.loginData = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
