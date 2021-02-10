import { createStore } from 'vuex'
export default createStore({
  state: {
    username: "noname",
    password: "nopassword",
    islogin: false,
    loginApi: "https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/loginTest",
    researchTreadApi: "https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/tread",
    newlyResearchApi: "https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/newlyResaerch",
    allTreadApiFirst: "https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/getAllTread",
    allPaperApi: "https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/getAllTread",
    myPaperApi:"https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/Mypaper",

    testApi:"https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/test",
  },
  mutations: {
    setUserName(state, name) {
      state.username = name
    },
    setPassWord(state, word) {
      state.password = word
    },
    setLogin(state, whichStyle) {
      state.islogin = whichStyle
    }
  },
  actions: {
  },
  modules: {
  }
})
