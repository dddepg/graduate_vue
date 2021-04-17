<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="11">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>个人信息</span>
          </div>
        </template>
        <div class="text item">用户id：{{ id }}</div>
        <div class="text item">真实姓名：{{ name }}</div>
        <div class="text item">电子邮件：{{ email }}</div>
        <div class="text item">电话：{{ tele }}</div>
      </el-card>
    </el-col>
    <el-col :span="11">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>修改页面</span>
          </div>
        </template>
        <el-form
          :label-position="labelPosition"
          :model="showForm"
          :rules="rules"
          status-icon
          ref="form"
        >
          <el-form-item label="真实姓名" label-width="30%" prop="myname">
            <el-input v-model="showForm.myname"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件" label-width="30%" prop="myemail">
            <el-input v-model="showForm.myemail"></el-input>
          </el-form-item>
          <el-form-item label="电话" label-width="30%" prop="mytele">
            <el-input v-model.number="showForm.mytele"> </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')"
              >修改信息</el-button
            >
          </el-form-item>
        </el-form>
        <forget-dio :title="tit" :which="2" />
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";
import axios from "axios";
import qs from "qs";
import forgetDio from "@/components/forgetDio.vue";
export default defineComponent({
  components: { forgetDio },
  name: "getUserInfo",
  async setup() {
    const store = useStore();
    const id = ref(store.state.userid);
    const name = ref(store.state.userTruename);
    const email = ref("");
    const tele = ref();
    const rules = ref({
      mytele: [
        { required: true, message: "电话不能为空" },
        { type: "number", message: "电话必须为数字值" },
      ],
      myemail: [{ required: true, message: "邮箱不能为空" }],
      myname: [{ required: true, message: "姓名不能为空" }],
    });
    const labelPosition = ref("right");
    const getApi = store.state.userInfoApi;
    const changeForm = {
      myemail: "",
      mytele: "",
      myname: store.state.userTruename,
    };
    const showForm = ref(changeForm);
    try {
      const data = {
        id: store.state.userid,
      };
      const result = await axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        url: getApi,
        data: qs.stringify(data),
      }).then(function (response) {
        return response.data;
      });
      if (result["result"] == "2") {
        return ElMessage(result["msg"]);
      } else if (result["result"] == "1") {
        email.value = result["email"];
        tele.value = result["tele"];
        showForm.value["myemail"] = result["email"];
        showForm.value["mytele"] = Number.parseInt(result["tele"]);
      }
    } catch {
      return ElMessage("哎呀，网络似乎有问题呢");
    }

    const change = async () => {
      const loadingInstance = ElLoading.service({
        lock: false,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      const changeApi = store.state.changeApi;
      try {
        const changedata = {
          id: store.state.userid,
          tele: showForm.value["mytele"],
          email: showForm.value["myemail"],
          name: showForm.value["myname"],
        };
        const changeresult = await axios({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "post",
          url: changeApi,
          data: qs.stringify(changedata),
        });
        if (changeresult.data["result"] == "2") {
          loadingInstance.close();
          return ElMessage(changeresult.data["msg"]);
        } else if (changeresult.data["result"] == "1") {
          email.value = showForm.value["myemail"];
          tele.value = showForm.value["mytele"];
          store.state.userTruename = showForm.value["myname"];
          name.value = showForm.value["myname"];
          loadingInstance.close();
          return ElMessage("修改成功");
        }
      } catch {
        loadingInstance.close();
        return ElMessage("哎呀，网络似乎有问题呢");
      }
    };
    const tit = ref("修改密码");
    return {
      id,
      name,
      email,
      tele,
      labelPosition,
      change,
      rules,
      showForm,
      tit,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.change();
        } else {
          return ElMessage("请正确填写字段");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
});
</script>
<style lang="stylus" scoped>
.item
  text-align justify

.el-form-item
  margin-left 0
</style>
