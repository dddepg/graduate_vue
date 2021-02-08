<template>
  <el-link
    v-for="(value, key) in result"
    :key="key"
    :href="value['URL']"
    target="_blank"
    class="tread_link"
    ><span class="tread_link_word">{{ value["title"] }}</span></el-link
  >
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { getLinks } from "@/hooks/getLinks";
export default defineComponent({
  name: "getAllPaper",
  async setup() {
    const store = useStore();
    const getApi = store.state.researchTreadApi;
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
.tread_link
  width 100%
  height 22%
  margin 2px 0
  text-align left
  

.tread_link:nth-child(2n)
  background-color rgb(224, 224, 224)

.tread_link:nth-child(2n + 1)
  background-color rgb(240, 240, 240)

.tread_link_word
  width 100%
</style>