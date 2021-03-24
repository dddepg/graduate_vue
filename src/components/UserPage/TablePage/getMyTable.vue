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
            @click="handleDelete(scope.$index)"
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
            @click="gopaper(scope.row['URL'])"
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
import { getLinks } from "@/hooks/getLinks";
export default defineComponent({
  name: "getMyPaper",
  setup() {
    let seletindex = 0;
    const dialogVisible = ref(false);
    const loading = ref(true);
    const store = useStore();
    const getApi = store.state.myPaperApi;
    const result = ref();
    const words: Promise<{
      URL: string;
      title: string;
      date: string;
    }> = getLinks(getApi);
    words.then((value) => {
      result.value = value;
      loading.value = false;
    });
    const gopaper = (url: string): void => {
      window.open(url, "_blank");
    };
    const handleDelete = (ind: number): void => {
      seletindex = ind;
      dialogVisible.value = true;
    };
    const sureDelet = (): void => {
      dialogVisible.value = false;
      result.value.splice(seletindex, 1);
    };
    return {
      result,
      dialogVisible,
      seletindex,
      gopaper,
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
