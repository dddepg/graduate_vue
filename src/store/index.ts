import { createStore } from 'vuex'
import { createGlobalState, useStorage } from '@vueuse/core'
export const useGlobalState = createGlobalState(
  () => useStorage("state", {
    username: "noname",
  }),
)
export default createStore({
  state: {
    username: "noname",
    password: "nopassword",
    userid: 111,
    userpower: 1,
    userTruename: "noname",
    islogin: false,
    droweropen: false,
    loginApi: "https://dddepg.top/graduate/login",
    changeApi: "https://dddepg.top/graduate/changeUserInfo",
    researchTreadApi: "https://dddepg.top/graduate/newly",
    newlyResearchApi: "https://dddepg.top/graduate/tread",
    userInfoApi: "https://dddepg.top/graduate/userInfo",
    allTreadApiFirst: "https://dddepg.top/graduate/allnewly",
    allSearchApi: "https://dddepg.top/graduate/alltread",
    updataPDFApi: "https://dddepg.top/graduate/updataPDF",
    addpdfInfoApi: "https://dddepg.top/graduate/addpdfInfo",
    allPaperApi: "https://dddepg.top/graduate/getallpaper",
    typePaperApi: "https://dddepg.top/graduate/getTypePaper",
    myPaperApi: "https://dddepg.top/graduate/getMyPaper",
    delePaperApi:"https://dddepg.top/graduate/delMyPaper",
    downloadPaperApi:"https://dddepg.top/graduate/downloadPDF",


    testApi: "https://dddepg.top/graduate/userInfo",
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
    },
  },
  actions: {
  },
  modules: {
  }
})
