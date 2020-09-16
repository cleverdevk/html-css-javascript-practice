import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data를 정의
    name: "파이리",
    message:'치킨은 맛있다.',
    salt:30
  },
  mutations: {
    CHANGE_NAME(state,data){
      state.name = data;
    },
    CHANGE_MESSAGE(state, data){
      state.message = message;
    },
    CHANGE_SALT(sate, data){
      state.salt = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
