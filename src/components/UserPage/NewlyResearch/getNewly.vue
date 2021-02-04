<template>
  <el-link
    v-for="(value, key) in result"
    :key="key"
    :href="value['URL']"
    target="_blank"
    class="newly_link"
    ><span class="newly_link_word">{{ value["title"] }}</span></el-link
  >
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "getnewly",
  async setup() {
    const store = useStore();
    const getApi = store.state.newlyResearchApi;
    try {
      const words = await axios.get(getApi);
      return {
        result: words.data["data"]["list"],
      };
    } catch {
      ElMessage("哎呀，网络似乎有问题呢");
    }
  },
});
</script>

<style lang="stylus" scoped>
.newly_link
  width 100%
  height 22%
  margin 2px 0
  text-align left

.newly_link:nth-child(2n)
  background-color rgb(224, 224, 224)

.newly_link:nth-child(2n + 1)
  background-color rgb(240, 240, 240)

.newly_link_word
  width 100%
</style>