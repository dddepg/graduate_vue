<template>
  <div>
    <el-button type="primary" @click="open()">添加科研新闻</el-button>
  </div>
  <el-dialog title="添加科研新闻" v-model="addN" :width="dialogwidth">
    <el-form label-width="135px" :model="f">
      <el-form-item label="请输入新闻标题">
        <el-input v-model="f.title"></el-input>
      </el-form-item>
      <el-form-item label="请输入新闻网址">
        <el-input v-model="f.url"></el-input>
      </el-form-item>
      <el-form-item label="请选择新闻类型">
        <el-radio v-model="f.radio" label="1">科研动态</el-radio>
        <el-radio v-model="f.radio" label="2">最新研究</el-radio>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="creat()">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { addNews } from "@/hooks/creatUser";
import { useWindowSize } from "@vueuse/core";
export default defineComponent({
  name: "addNewly",
  // 添加新闻页面
  // 刘老师似乎用不到这个功能
  setup() {
    const store = useStore();
    const addN = ref(false);
    const { width, height } = useWindowSize();
    const form = {
      title: "",
      url: "",
      radio: "",
    };
    const dialogwidth = ref("30%");
    const f = ref(form);
    const open = () => {
      console.log(height);
      if (width.value > 800) {
        dialogwidth.value = "30%";
      } else {
        dialogwidth.value = "100%";
      }
      addN.value = true;
    };
    const close = () => {
      addN.value = false;
      f.value["title"] = "";
      f.value["url"] = "";
    };
    // 新增新闻方法
    const creat = () => {
      const res = addNews(
        store.state.addNewsApi,
        f.value["title"],
        f.value["url"],
        f.value["radio"]
      );
      res.then(function (response) {
        if (response["result"] == 1) {
          addN.value = false;
          store.state.allnewsflag = !store.state.allnewsflag;
          return ElMessage("添加成功");
        } else {
          return ElMessage(response["msg"]);
        }
      });
    };
    return { addN, f, open, close, creat, dialogwidth };
  },
});
</script>
<style lang="stylus" scoped></style>