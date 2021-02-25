<template>
  <div
    class="all_tread_back"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-table
      :data="result"
      style="width: 100%"
      border
      height="480"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="title" label="标题" width="400" fixed> </el-table-column>
      <el-table-column prop="author" label="作者" width="230" sortable>
      </el-table-column>
      <el-table-column prop="date" label="上传日期" width="230" sortable>
      </el-table-column>
      <el-table-column align="center" fixed="right">
        <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
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
            content="查看论文"
            placement="bottom-start"
          >
            <el-button
              icon="el-icon-view"
              circle
              @click="gopaper(scope.row['URL'])"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { getLinks } from "@/hooks/getLinks";
export default defineComponent({
  name: "getAllPaper",
  async setup() {
    const store = useStore();
    const loading = ref(true);
    const getApi = store.state.allPaperApi;
    const result = ref();
    const words: Promise<{ URL: string; title: string }> = getLinks(getApi);
    words.then((value) => {
      result.value = value;
      loading.value = false;
    });
    return { result, loading };
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
