<template>
  <div>
    <!-- <el-table :data="show['data']" style="width: 100%">
      <el-table-column prop="title" label="日期" width="180"> </el-table-column>
      <el-table-column prop="URL" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="author" label="地址"> </el-table-column>
    </el-table> -->
    {{ word["data"] }}
    <el-table
      :data="word['data']['data']"
      style="width: 100%"
    >
      <el-table-column prop="title" label="标题" width="400" fixed>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="230" sortable>
      </el-table-column>
      <el-table-column prop="date" label="上传日期" width="230" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import { getLinks } from "@/hooks/getLinks";
import { useStore } from "vuex";
// import { ElLoading } from "element-plus";
import axios from "axios";
import qs from "qs";
export default defineComponent({
  name: "getTest",
  async setup() {
    const store = useStore();
    const result = ref();
    // const loadingInstance = ElLoading.service({
    //   lock: false,
    //   text: "Loading",
    //   spinner: "el-icon-loading",
    //   background: "rgba(0, 0, 0, 0.7)",
    // });
    // const url = store.state.testApi;
    // const data = { id: store.state.userid };
    // result.value = await await axios({
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   method: "post",
    //   url: url,
    //   data: qs.stringify(data),
    // })
    //   .then(function (response) {
    //     return response.data;
    //   })
    //   .catch(function () {
    //     return "error";
    //   });
    const show = ref();
    // const getApi = store.state.allPaperApi;
    const data = { type: 1 };
    const postApi = store.state.typePaperApi;
    const word = await axios({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
      url: postApi,
      data: qs.stringify(data),
    });

    return {
      result,
      word,
      show,
    };
  },
});
</script>
<style lang="stylus" scoped>
.div
  height 80px
</style>
