<template>
  <el-table
    :data="result"
    style="width: 100%"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="my_paper_table"
  >
    <el-table-column label="申请表标题" prop="title"> </el-table-column>
    <el-table-column label="创建时间" prop="date" sortable> </el-table-column>
    <el-table-column align="center">
      <template #header>
        <h3>操作</h3>
      </template>
      <template #default="scope">
        <el-tooltip
          class="item"
          effect="dark"
          content="删除申请表"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row['id'])"
          ></el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="下载申请表"
          placement="bottom-start"
        >
          <el-button
            icon="iconfont icon-download"
            circle
            @click="downloadword(scope.row['url'])"
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="警告" v-model="dialogVisible" width="30%">
    <span>申请表一经删除无法恢复，确定删除申请表？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="sureDelet()">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { getMyTable } from "@/hooks/tableMethos";
import { ElMessage } from "element-plus";
import { postDropRow } from "@/hooks/tableMethos";
export default defineComponent({
  name: "getMyTable",
  setup() {
    let seletindex = 0;
    const dialogVisible = ref(false);
    const loading = ref(true);
    const store = useStore();
    const getApi = store.state.getTableApi;
    const result = ref();
    const words: Promise<{
      result: string;
      data: Array<{ title: string }>;
    }> = getMyTable(getApi, store.state.userid);
    words.then((value) => {
      result.value = value["data"];
      loading.value = false;
    });

    const downloadword = (url: string) => {
      const name = url.split("/");
      const filename = name[name.length - 1];
      const api = store.state.downloadWordApi;
      window.open(api + "/" + filename, "_blank");
    };
    let deleid = "0";
    const handleDelete = (ind: number, truedeleid: string): void => {
      seletindex = ind;
      deleid=truedeleid
      dialogVisible.value = true;
    };
    const sureDelet = (): void => {
      const res = postDropRow(
        store.state.postDropRowApi,
        deleid
      );
      res.then(function (response: { result: number }) {
        if (response["result"] == 0) {
          dialogVisible.value = false;
          result.value.splice(seletindex, 1);
          return ElMessage("删除成功");
        } else {
          return ElMessage("哎呀，网络出问题了");
        }
      });
    };
    return {
      result,
      dialogVisible,
      seletindex,
      downloadword,
      handleDelete,
      sureDelet,
      loading,
    };
  },
});
</script>
<style lang="stylus" scoped>
.my_paper_table
  height 85%
  overflow-y auto
</style>
