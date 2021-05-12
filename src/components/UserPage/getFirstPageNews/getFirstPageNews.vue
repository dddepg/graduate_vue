<template>
  <div
    class="loadback"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-link
      v-for="(value, key) in result"
      :key="key"
      :href="value['URL']"
      target="_blank"
      class="tread_link"
      >{{ value["title"] }}</el-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { getFirstPageNews } from "@/hooks/getNews";
export default defineComponent({
  props: ["type"],
  name: "getFirstPageNews",
  async setup(props) {
    const loading = ref(true);
    const result = ref();
    {
      const store = useStore();
      if (props.type == "科研动态") {
        const getTreadApi = store.state.researchTreadApi;
        const words: Promise<{
          URL: string;
          title: string;
        }> = await getFirstPageNews(getTreadApi);
        result.value = words;
      } else if (props.type == "最新研究") {
        const getNewsApi = store.state.newlyResearchApi;
        const words: Promise<{
          URL: string;
          title: string;
        }> = await getFirstPageNews(getNewsApi);
        result.value = words;
      }
    }
    loading.value = false;
    return { result, loading };
  },
});
</script>
<style lang="stylus" scoped>
.tread_link
  width 100%
  height 22%
  margin 0.5% 0
  text-align left
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  display flex
  justify-content flex-start

.tread_link:nth-child(2n)
  background-color rgb(224, 224, 224)

.tread_link:nth-child(2n + 1)
  background-color rgb(240, 240, 240)

.tread_link_word
  width 100%
  overflow hidden
  text-overflow ellipsis

.loadback
  height 100%
</style>
