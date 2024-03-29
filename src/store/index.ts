import { createStore } from 'vuex'
// 另一种store用法,用起来没啥区别
// import { createGlobalState, useStorage } from '@vueuse/core'
// export const useGlobalState = createGlobalState(
//   () => useStorage("state", {
//     username: "noname",
//   }),
// )
// 下面是整个页面所用的全局数据
export default createStore({
  state: {
    username: "noname",
    password: "nopassword",
    userid: 111,
    userpower: 1,
    userTruename: "noname",
    islogin: false,
    droweropen: false,
    tableNowAction: 0,
    selectTableType: 0,
    nowCreatTableid: "0",
    nowCreatTablename: "no",

    adduser: true,
    allnewsflag:true,

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
    delePaperApi: "https://dddepg.top/graduate/delMyPaper",
    downloadPaperApi: "https://dddepg.top/graduate/downloadPDF",
    downloadWordApi: "https://dddepg.top/graduate/downloadword",
    changeStateApi: "https://dddepg.top/graduate/updatestate",

    postBasicTableInfoApi: "https://dddepg.top/graduate/creatTable",
    postFirstTableDataApi: "https://dddepg.top/graduate/TablefirstDate",
    postSecondTableDataApi: "https://dddepg.top/graduate/TableSecondDate",
    postLastTableDataApi: "https://dddepg.top/graduate/TableLastDate",
    postDropRowApi: "https://dddepg.top/graduate/DropRow",
    getTableApi: "https://dddepg.top/graduate/getMyTable",

    TestTrueApi: "https://dddepg.top/graduate/managePass",
    ChangePassApi: "https://dddepg.top/graduate/changePass",

    getAllUserApi: "https://dddepg.top/graduate/getAllUser",
    deleUserApi: "https://dddepg.top/graduate/deleUser",
    rebackUserApi: "https://dddepg.top/graduate/rebackUser",

    creatUserApi: "https://dddepg.top/graduate/creatUser",

    getAllUserPaperApi: "https://dddepg.top/graduate/getAllUserPaper",
    getSuperAllUserPaperApi: "https://dddepg.top/graduate/SupergetAllUser",
    changeUserPowerApi: "https://dddepg.top/graduate/changeUserPowerApi",
    addNewsApi: "https://dddepg.top/graduate/addNewsApi",
    deleNewsApi:"https://dddepg.top/graduate/deleNewsApi",
    //测试页面api
    // testApi: "https://dddepg.top/graduate/userInfo",
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
