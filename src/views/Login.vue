<template>
  <div
    class="loadback"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
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
                <el-col :span="4" :offset="10" :xs="{ span: 16, offset: 8 }">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { mapMutations } from "vuex";
import { ElMessage } from "element-plus";
import router from "@/router";
import { useStore } from "vuex";
import { useCookies } from "@vueuse/integrations";
import forgetDio from "@/components/forgetDio.vue";
import { gologin } from "@/hooks/login";
// 登录界面
export default defineComponent({
  name: "Login",
  // 加载组件：忘记密码组件
  components: { forgetDio },
  setup() {
    const store = useStore();
    const cookie = useCookies();
    const usernum = ref("");
    const password = ref("");
    const loading = ref(false);

    // 当浏览器内cookie未过期时，直接访问系统
    // 安全性较低，日后建议修改
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
    // 登录操作，不进行表单格式验证
    const postLogin = async () => {
      // 开启遮罩
      loading.value = true;
      try {
        // 发送登录信息并取得结果
        const result = await gologin(
          store.state.loginApi,
          store.state.username,
          store.state.password
        );
        // 验证
        if (result["result"] == "2") {
          loading.value = false;
          return ElMessage("用户名或密码错误");
        } else if (result["result"] == "1") {
          // 验证成功，存储基本信息
          store.commit("setLogin", true);
          store.state.userTruename = result["userTrueName"];
          store.state.userid = result["userID"];
          store.state.userpower = parseInt(result["userPower"]);
          // 关闭遮罩
          loading.value = false;
          // 设置cookie
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
          // 前往首页
          router.push("/User/first");
        }
      } catch {
        loading.value = false;
        return ElMessage("哎呀，网络似乎有问题呢");
      }
    };
    // 首页按钮上的文字
    const tit = ref("忘记密码");
    return {
      usernum,
      password,
      postLogin,
      tit,
      loading,
    };
  },
  // 获取store中的设置方法（正确的使用方法）
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

.loadback, .loginrow
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
