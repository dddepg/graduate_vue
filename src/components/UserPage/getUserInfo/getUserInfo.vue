<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="11">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>个人信息</span>
          </div>
        </template>
        <div class="text item">用户名id：{{ id }}</div>
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
            <el-input v-model="from.myemail"></el-input>
          </el-form-item>
          <el-form-item label="电话" label-width="30%" prop="mytele">
            <el-input v-model.number="from.mytele" >
            </el-input>
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
import { getInfo } from "@/hooks/getInfo";
export default defineComponent({
  name: "getUserInfo",
  async setup() {
    const store = useStore();
    const id = ref();
    const name = ref();
    const email = ref();
    const tele = ref();
    const from = ref({
      myemail: "no",
      mytele: 123,
    });
    const rules = ref({
      mytele: [{ type: "number", required: true, message: "电话必须为数字值" }],
    });
    const labelPosition = ref("right");
    const getApi = store.state.userInfoApi;
    const info: Promise<{
      name: string;
      id: string;
      email: string;
      tele: string;
    }> = getInfo(getApi);
    info.then((value) => {
      id.value = value["id"];
      name.value = value["name"];
      email.value = value["email"];
      tele.value = value["tele"];
      from.value["myemail"] = email.value;
      from.value["mytele"] =parseInt(tele.value);
    });
    const change = () => {
      email.value = from.value["myemail"];
      tele.value = from.value["mytele"];
    };
    
    return { id, name, email, tele, from, labelPosition, change, rules };
  },
});
</script>
<style lang="stylus" scoped>
.item
  text-align justify
.el-form-item
  margin-left 0
</style>
