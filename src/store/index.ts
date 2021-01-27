import { createStore } from 'vuex'
export default createStore({
  state: {
    username: "noname",
    password: "nopassword",
    islogin : false
  },
  mutations: {
    setUserName(state, name) {
      state.username = name
    },
    setPassWord(state, word) {
      state.password = word
    },
    setLogin(state, whichStyle) {
      state.islogin=whichStyle
    }
  },
  actions: {
  },
  modules: {
  }
})
