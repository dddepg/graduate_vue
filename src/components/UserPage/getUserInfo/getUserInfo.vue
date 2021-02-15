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
        <div class="text item">用户名id：{{ id }}</div>
        <div class="text item">用户名：{{ name }}</div>
        <div class="text item">电子邮件：{{ email }}</div>
        <div class="text item">电话：{{ tele }}</div>
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
    // const getApi =
    //   "https://www.fastmock.site/mock/0fdbe709330c1a68f26cbef61c777772/graduateSign/api/userInfo";
     const getApi =store.state.userInfoApi
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
    });
    return { id, name, email, tele };
  },
});
</script>
<style lang="stylus" scoped>
.item
  text-align justify
</style>