<template>
  <div class="tableback">
    <div class="tableform">
      <el-form
        ref="form"
        :model="f"
        label-width="100px"
        label-position="right"
        :rules="rules"
      >
        <el-form-item label="课题设计论证">
          <el-input
            type="textarea"
            :rows="8.9"
            placeholder="请输入内容"
            v-model="f.ketishejilunzheng"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="研究基础">
          <el-input
            type="textarea"
            :rows="9"
            placeholder="请输入内容"
            v-model="f.yanjiujichu"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="go()">生成并下载</el-button>
          <el-button @click="goback">放弃填写</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import { ElMessage } from "element-plus";
import { postTableLastDate,postDropRow } from "@/hooks/tableMethos";
export default defineComponent({
  name: "finalTableInfo",
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      if (store.state.tableNowAction != 3) {
        router.push("/User/newTable/table");
        return ElMessage("请先选择模板");
      }
    });
    const form = {
      ketishejilunzheng: "",
      yanjiujichu: "",
    };
    const f = ref(form);
    const go = () => {
      const res = postTableLastDate(
        store.state.postLastTableDataApi,
        store.state.nowCreatTableid,
        store.state.nowCreatTablename,
        f.value['ketishejilunzheng'],
        f.value['yanjiujichu']
      );
      res.then(function (response) {
        if (response["result"] == 0) {
          store.state.tableNowAction = 0;
          router.push("/User/tablePage");
          return ElMessage("创建成功");
        } else {
          return ElMessage("哎呀，网络出问题了");
        }
      });
    };
    const goback = () => {
      const res = postDropRow(
        store.state.postDropRowApi,
        store.state.nowCreatTableid
      );
      res.then(function (response) {
        if (response["result"] == 0) {
          store.state.selectTableType = 0;
          router.push("/User/tablePage");
        } else {
          return ElMessage("哎呀，网络出问题了");
        }
      });
    };
    return { f,go,goback};
  },
});
</script>
<style lang="stylus" scoped>
.tableback
  height 100%
  background-color white
  display flex
  justify-content center

.tableform
  height 100%
  width 100%
</style>