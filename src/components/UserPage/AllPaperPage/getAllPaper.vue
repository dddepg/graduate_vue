<template>
  <div class="all_tread_back">
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
import { getLinks } from "@/hooks/getLinks";
export default defineComponent({
  name: "getAllPaper",
  async setup() {
    const store = useStore();
    const getApi = store.state.allPaperApi;
    const result = ref();
    const words: Promise<{ URL: string; title: string }> = getLinks(getApi);
    words.then((value) => {
      result.value = value;
    });
    return { result };
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