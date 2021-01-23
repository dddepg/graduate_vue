<template>
  <el-container>
    <el-header><h1>科研管理系统</h1></el-header>
    <el-main>
      <el-row>
        <el-col
          :span="8"
          :offset="8"
          :xs="{ span: 20, offset: 2 }"
          class="logincol"
        >
          <div id="loginarea">
            <el-row>
              <el-col :span="24">
                <h1 class="title">密码登录</h1>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20" :offset="2" class="inputarea">
                <el-input placeholder="请输入账号" v-model="input" clearable>
                </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20" :offset="2" class="inputarea">
                <el-input placeholder="请输入密码" v-model="input" clearable>
                </el-input>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" class="loginbutton">
              <el-col :span="12">
                <el-button >登录</el-button>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" class="loginbutton">
              <el-col :span="12">
                <el-button >注册</el-button>
              </el-col>
            </el-row>
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
      input: ref(""),
    };
  },
});
</script>
<style lang="stylus" scoped>
max_size = 100%

.el-container
  height max_size
  background-image url('../assets/backgroung.jpg')
  background-size 100%, cover

.logincol
  margin-top 30px

#loginarea
  background-color black
  opacity 0.6
  height 350px

.title
  font-weight bold
  margin-top 10px
  color white

.inputarea
  margin-top 5px
  margin-bottom 5px

.loginbutton
  margin-top 15px

.el-button
  background-color blue
  color white
  font-size 20px
  width max_size
</style>