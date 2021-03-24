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
        <div class="text item">用户名：{{ name }}</div>
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
        <el-form :label-position="labelPosition" :rules="rules" :model="from">
          <el-form-item label="电子邮件" label-width="30%">
            <el-input v-model="myemail"></el-input>
          </el-form-item>
          <el-form-item label="电话" label-width="30%" prop="mytele">
            <el-input v-model.number="mytele"> </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="change">修改</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts">
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
    const email = ref("924144294@qq.com");
    const myemail = ref("924144294@qq.com");
    const tele = ref("17717071745");
    const mytele = ref("17717071745");
    const rules = ref({
      mytele: [{ type: "number", required: true, message: "电话必须为数字值" }],
    });
    const labelPosition = ref("right");
    // const getApi = store.state.userInfoApi;
    // try {
    //   const data = {
    //     id: store.state.userid,
    //   };
    //   const result = await axios({
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     method: "post",
    //     url: getApi,
    //     data: qs.stringify(data),
    //   });
    //   const theresult = await axios.post(getApi, {
    //     id: store.state.userid,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });
    //   console.log(theresult)
    //   if (result.data["result"] == "2") {
    //     return ElMessage(result.data["msg"]);
    //   } else if (result.data["result"] == "1") {
    //     // from.value["myemail"] = result.data["email"];
    //     // from.value["mytele"] = result.data["tele"];
    //     email.value = result.data["email"];
    //     tele.value = result.data["tele"];
    //     myemail.value = result.data["email"];
    //     mytele.value = result.data["tele"];
    //   }
    // } catch {
    //   return ElMessage("哎呀，网络似乎有问题呢");
    // }
    const change = async () => {
      const changeApi = store.state.changeApi;
      try {
        const changedata = {
          id: store.state.userid,
          tele: mytele.value,
          email: myemail.value,
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
          email.value = myemail.value;
          tele.value = mytele.value;
        }
      } catch {
        return ElMessage("哎呀，网络似乎有问题呢");
      }
    };
    return { id, name, email, tele, myemail, labelPosition, change, rules,mytele };
  },
});
</script>
<style lang="stylus" scoped>
.item
  text-align justify

.el-form-item
  margin-left 0
</style>
