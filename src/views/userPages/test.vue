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
    <get-test />
    </template>
      <template #fallback>
        <div>正在拼了命的加载…</div>
      </template>
    </Suspense> -->
    <el-form
      :model="e"
      label-width="100px"
      class="demo-ruleForm"
      ref="numberValidateForm"
    >
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' },
        ]"
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
    </el-form>
  </div>
</template>
<script >
// import getTest from "@/components/UserPage/Test/getTest.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  name: "test",
  setup() {
    const numberValidateForm = {
      age: "",
    };
    const e = ref(numberValidateForm);
    const a =ref(3)
    const b=()=>{
      a.value++
    }
    return {
      e,a,b
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.a)
          this.b()
          console.log(this.a)
        } else {
          console.log("error submit!!");
          return false;
        }
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
