<template>
  <el-container>
    <el-header><h1 class="title">科研管理系统</h1></el-header>
    <el-main>
      <el-row class="loginrow" type="flex" justify="center">
        <el-col
          :span="6"
          :offset="15"
          :xs="{ span: 20, offset: 2 }"
          class="logincol"
        >
          <div id="loginarea">
            <el-row >
              <el-col :span="24">
                <h1 class="logintitle">用户登录</h1>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" :offset="3" class="inputarea">
                <el-input placeholder="请输入账号" v-model="signnum" clearable >
                  <template #prefix>
                     <i class="iconfont icon-bussiness-man"></i>
                  </template>
                </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" :offset="3" class="inputarea">
                <el-input placeholder="请输入密码" v-model="password" clearable>
                  <template #prefix>
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
                <el-button>登录</el-button>
              </el-col>
            </el-row>
            <!-- <el-row type="flex" justify="space-around" class="loginbutton">
              <el-col :span="12">
                <el-button >注册</el-button>
              </el-col>
            </el-row> -->
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    return {
      signnum: ref(""),
      password: ref(""),
    };
  },
});
</script>
<style lang="stylus" scoped>
max_size = 100%;

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