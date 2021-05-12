<template>
  <div class="tread_back_area">
    <!-- <el-tabs type="border-card" class="tread_back">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs> -->
    <!-- <Suspense>
      <template #default>
        <get-my-table/>
    </template>
      <template #fallback>
        <div>正在拼了命的加载…</div>
      </template>
    </Suspense> -->
    <!-- <el-form
      :model="e"
      label-width="100px"
      class="demo-ruleForm"
      ref="numberValidateForm"
    >
      <el-form-item
        label="年龄"
        prop="age"
      >
        <el-input
          type="age"
          v-model.number="e.age"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form> -->
    <forget-dio :title="fgpass" :which="1"/>
  </div>
</template>
<script >
// 测试用文件，暂时废弃中
// import getMyTable from "@/components/UserPage/TablePage/getMyTable"
import forgetDio from "@/components/forgetDio.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { forgetDio },
  // components: {
  //   getMyTable
  // },
  name: "test",
  setup() {
    const numberValidateForm = {
      age: "",
    };
    const e = ref(numberValidateForm);
    // const word="https://www.dddepg.top/graduate_back/static/word/wenjianceshi"
    const fgpass=ref('忘记密码')
    return {
      e,fgpass
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // if (valid) {
          const name=this.e['age'].split("/")
          console.log(name[name.length-1])
          console.log(valid)
        //   this.b()
        //   console.log(this.a)
        // } else {
        //   console.log("error submit!!");
        //   return false;
        // }
      });
    },
  },
});
</script>
<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  display flex
  justify-content center

.tread_back
  border box-shadow
  height 90%
  width 95%
  margin-top 20px
  overflow-y auto
</style>
