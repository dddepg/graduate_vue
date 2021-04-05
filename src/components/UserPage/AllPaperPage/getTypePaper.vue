<template>
  <div
    class="all_tread_back"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-table
      :data="result['data']"
      style="width: 100%"
      border
      stripe
      height="480"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column type="expand" fixed>
        <template #default="props">
          <el-table :data="props.row.keyWord" style="width: 100%" stripe border>
            <el-table-column prop="key" label="关键字" width="180">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="400" fixed>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="230" sortable>
      </el-table-column>
      <el-table-column prop="date" label="上传日期" width="230" sortable>
      </el-table-column>
      <el-table-column align="center" fixed="right">
        <template #default="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="查看论文"
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
            content="下载论文"
            placement="bottom-start"
          >
            <el-button
              icon="iconfont icon-download"
              circle
              @click="downloadpdf(scope.row['URL'])"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script >
import { defineComponent, ref } from "vue";
import qs from "qs";
import { useStore } from "vuex";
import axios from "axios";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "getTypePaper",
  props: ["type"],
  async setup(props) {
    const store = useStore();
    const loading = ref(true);
    const result = ref();
    const postApi = store.state.typePaperApi;
    const data = { type: props.type };
    const word = await axios({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
      url: postApi,
      data: qs.stringify(data),
    }).then((value) => {
      // console.log(value["data"]);
      if (value["data"]["result"] == "1") {
        result.value = value["data"];
        loading.value = false;
      } else {
        loading.value = false;
        return ElMessage(value["msg"]);
      }
    });
    const gopaper = (url) => {
      window.open(url, "_blank");
    };
    const downloadpdf = (url) => {
      const name = url.split("/");
      const filename = name[name.length - 1];
      const api = store.state.downloadPaperApi;
      window.open(api + "/" + filename, "_blank");
    };
    return { result, gopaper, word, loading, downloadpdf };
  },
});
</script>

<style lang="stylus" scoped>
.all_tread_back
  height 80%
  overflow-y auto

.all_tread_li
  margin-left 30px

.all_tread_link
  width 90%
  height 30px
  margin 2px 0 2px 30px
  display flex
  justify-content flex-start

.all_tread_link:nth-child(2n)
  background-color rgb(224, 224, 224)

.all_tread_link:nth-child(2n + 1)
  background-color rgb(240, 240, 240)

.all_tread_link_word
  width 100%
  text-align left
</style>
