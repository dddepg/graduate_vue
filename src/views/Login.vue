<template>
  <el-container>
    <el-header
      ><h1 class="title">科研管理系统</h1>
      <h2></h2>
    </el-header>
    <el-main>
      <el-row class="loginrow" type="flex" justify="center">
        <el-col
          :span="6"
          :offset="15"
          :xs="{ span: 20, offset: 2 }"
          class="logincol"
        >
          <div id="loginarea">
            <el-row>
              <el-col :span="24">
                <h1 class="logintitle">用户登录</h1>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" :offset="3" class="inputarea">
                <el-input
                  placeholder="请输入账号"
                  v-model="usernum"
                  clearable
                  @input="setUserName(usernum)"
                  class="logininput"
                >
                  <template #prepend>
                    <i class="iconfont icon-yonghu"></i>
                  </template>
                </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" :offset="3" class="inputarea">
                <el-input
                  placeholder="请输入密码"
                  v-model="password"
                  show-password
                  @input="setPassWord(password)"
                  class="logininput"
                >
                  <template #prepend>
                    <i class="iconfont icon-mima"></i>
                  </template>
                </el-input>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="forgetpassword">
              <el-col :span="4" :offset="10">
                <forget-dio :title="tit" :which="1" />
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" class="loginbutton">
              <el-col :span="12">
                <el-button @click="postLogin()">登录</el-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { mapMutations } from "vuex";
import { ElMessage } from "element-plus";
import axios from "axios";
import router from "@/router";
import { useStore } from "vuex";
import { ElLoading } from "element-plus";
import { useCookies } from "@vueuse/integrations";
import forgetDio from "@/components/forgetDio.vue";
import qs from "qs";
export default defineComponent({
  name: "Login",
  components: { forgetDio },
  setup() {
    const store = useStore();
    const cookie = useCookies();
    const usernum = ref("");
    const password = ref("");
    onMounted(() => {
      if (cookie.get("user")) {
        store.commit("setUserName", cookie.get("user")["user"]);
        store.state.userTruename = cookie.get("user")["name"];
        store.state.userid = cookie.get("user")["id"];
        store.state.userpower = cookie.get("user")["power"];
        store.commit("setLogin", true);
        store.commit("setPassWord", "cookieLogin");
        router.push("/User/first");
      }
    });
    const postLogin = async () => {
      const loadingInstance = ElLoading.service({
        lock: false,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      try {
        const data = {
          username: store.state.username,
          password: store.state.password,
        };
        const result = await axios({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "post",
          url: store.state.loginApi,
          data: qs.stringify(data),
        });
        if (result.data["result"] == "2") {
          loadingInstance.close();
          return ElMessage("用户名或密码错误");
        } else if (result.data["result"] == "1") {
          store.commit("setLogin", true);
          store.state.userTruename = result.data["userTrueName"];
          store.state.userid = result.data["userID"];
          store.state.userpower = parseInt(result.data["userPower"]);
          loadingInstance.close();
          cookie.set(
            "user",
            {
              user: store.state.username,
              name: store.state.userTruename,
              id: store.state.userid,
              power: store.state.userpower,
            },
            { maxAge: 86400 }
          );
          if (store.state.userpower == 1) {
            router.push("/User/first");
          } else {
            router.push("/User/first");
          }
        }
      } catch {
        loadingInstance.close();
        return ElMessage("哎呀，网络似乎有问题呢");
      }

      return null;
    };
    const tit = ref("忘记密码");
    return {
      usernum,
      password,
      postLogin,
      tit,
    };
  },
  methods: mapMutations(["setUserName", "setPassWord", "setLogin"]),
});
</script>

<style lang="stylus" scoped>
max_size = 100%

.el-main
  align-items center

.el-container
  height max_size
  background-image url('../assets/backgroung.jpg')
  background-size 100%, cover

.loginrow
  height max_size

.logincol
  margin-top 60px

#loginarea
  background-color #EEEEEE
  opacity 0.9
  height 300px

.title
  font-size 30px
  font-weight bold
  margin-top 10px
  color black

.logintitle
  font-size 20px
  font-weight bold
  margin-top 10px
  color black

.inputarea
  margin-top 10px
  margin-bottom 10px

.loginbutton
  margin-top 15px

.forgetpassword
  margin-top 5px
  margin-bottom 5px

.el-button
  background-color blue
  color white
  font-size 20px
  width max_size
</style>
