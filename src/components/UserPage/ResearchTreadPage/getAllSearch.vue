<template>
  <div
    class="all_tread_back"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <ul>
      <li v-for="(value, key) in result" :key="key" class="all_tread_li">
        <el-link :href="value['URL']" target="_blank" class="all_tread_link"
          ><span class="all_tread_link_word">{{
            value["title"]
          }}</span></el-link
        >
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { getTrueLinks } from "@/hooks/getTrueLink";
export default defineComponent({
  name: "getAllSearch",
  async setup() {
    const store = useStore();
    const loading = ref(true);
    const getApi = store.state.allSearchApi;
    const result = ref();
    const words: Promise<{ URL: string; title: string }> = getTrueLinks(getApi);
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
