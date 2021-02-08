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
                    <i class="iconfont icon-bussiness-man"></i>
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
                    <i class="iconfont icon-password"></i>
                  </template>
                </el-input>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="forgetpassword">
              <el-col :span="4" :offset="16">
                <el-link type="primary" disabled>忘记密码</el-link>
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
export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const cookie = useCookies();
    const usernum = ref("");
    const password = ref("");
    onMounted(() => {
      if (cookie.get("user")) {
        store.commit("setUserName", cookie.get("user")["user"]);
        store.commit("setLogin", true);
        store.commit("setPassWord", "cookieLogin");
        router.push("/User/first");
      }
    });
    const postLogin = async () => {
      cookie.set("user", store.state.username);
      const loadingInstance = ElLoading.service({
        lock: false,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      try {
        const result = await axios({
          method: "post",
          url: store.state.loginApi,
          data: {
            username: store.state.username,
            password: store.state.password,
          },
        });
        if (result.data["result"] == "2") {
          loadingInstance.close();
          return ElMessage("用户名或密码错误");
        } else if (result.data["result"] == "1") {
          store.commit("setLogin", true);
          loadingInstance.close();
          cookie.set("user", { user: store.state.username }, { maxAge: 86400 });
          router.push("/User/first");
        }
      } catch {
        loadingInstance.close();
        return ElMessage("哎呀，网络似乎有问题呢");
      }

      return null;
    };

    return {
      usernum,
      password,
      postLogin,
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
  height 250px

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