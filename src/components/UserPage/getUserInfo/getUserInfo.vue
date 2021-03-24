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
              >修改</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import axios from "axios";
import qs from "qs";
export default defineComponent({
  name: "getUserInfo",
  async setup() {
    const store = useStore();
    const id = ref(store.state.userid);
    const name = ref(store.state.userTruename);
    const email = ref("");
    const tele = ref();
    const allow = ref(false);
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
        if (result["tele"] != "" && result["email"] != "") {
          allow.value = true;
        }
      }
    } catch {
      return ElMessage("哎呀，网络似乎有问题呢");
    }

    const change = async () => {
      if (allow.value) {
        const changeApi = store.state.changeApi;
        try {
          const changedata = {
            id: store.state.userid,
            tele: showForm.value["mytele"],
            email: showForm.value["myemail"],
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
            return ElMessage(changeresult.data["msg"]);
          } else if (changeresult.data["result"] == "1") {
            email.value = showForm.value["myemail"];
            tele.value = showForm.value["mytele"];
          }
        } catch {
          return ElMessage("哎呀，网络似乎有问题呢");
        }
      } else {
        return ElMessage("请正确填写字段");
      }
    };
    return {
      id,
      name,
      email,
      tele,
      labelPosition,
      change,
      rules,
      showForm,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.allow.value = true;
          this.change();
        } else {
          this.change();
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
