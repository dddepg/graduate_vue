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
    <el-table-column label="标题" prop="title" sortable> </el-table-column>
    <el-table-column align="center">
      <template #header>
        <h3>操作</h3>
      </template>
      <template #default="scope">
        <el-tooltip
          class="item"
          effect="dark"
          content="查看新闻"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-view"
            circle
            @click="gopaper(scope.row['URL'])"
          ></el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="删除新闻"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row['id'])"
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="警告" v-model="dialogVisible" width="30%">
    <span>一旦删除无法恢复，确定删除新闻？</span>
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
import { getFirstPageNews } from "@/hooks/getNews";
import { deleNews } from "@/hooks/dele";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "getAllNewsMan",
  props: ["type"],
  setup(props) {
    let seletindex = 0;
    const dialogVisible = ref(false);
    const loading = ref(true);
    const store = useStore();
    const getApi = store.state.allSearchApi;
    const getApi2 = store.state.allTreadApiFirst;

    const managepaperid = ref();
    const result = ref();

    // 获取列表信息
    {
      // 列表内容
      let words: Promise<{
        result: string;
        data: Array<{ title: string }>;
        msg?: string;
      }>;
      // 根据进入父组件传递值决定请求API
      if (props.type == 2) {
        words = getFirstPageNews(getApi);
      } else {
        words = getFirstPageNews(getApi2);
      }
      // 回传值传递，关闭遮罩
      words.then(function (response) {
        result.value = response;
        loading.value = false;
      });
    }
    // 销毁words变量
    
    let deleid = "er";
    const handleDelete = (ind: number, id: string): void => {
      seletindex = ind;
      deleid = id;
      dialogVisible.value = true;
    };
    const sureDelet = async () => {
      dialogVisible.value = false;
      const res = await deleNews(
        store.state.deleNewsApi,
        deleid,
        parseInt(props.type)
      );
      if (res["result"] == "0") {
        result.value.splice(seletindex, 1);
        return ElMessage(res["msg"]);
      } else {
        return ElMessage(res["msg"]);
      }
    };
    const gopaper = (url: string): void => {
      window.open(url, "_blank");
    };

    return {
      result,
      dialogVisible,
      seletindex,
      handleDelete,
      sureDelet,
      loading,
      managepaperid,
      gopaper,
    };
  },
});
</script>
<style lang="stylus" scoped>
.my_paper_table
  height 85%
  overflow-y auto
</style>