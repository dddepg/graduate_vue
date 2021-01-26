import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      username: "",
      password: ""
    }
  },

  mutations: {
    setUserName(username, name) {
      username = name
    },
    setPassWord(password, word) {
      password = word
    },
    getUserName(username) {
      return username
    },
    getPassWord(password) {
      return password
    }
  },
  actions: {
  },
  modules: {
  }
})
