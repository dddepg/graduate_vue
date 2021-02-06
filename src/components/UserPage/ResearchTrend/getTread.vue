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

<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "getTread",
  async setup() {
    const store = useStore();
    const getApi = store.state.researchTreadApi;
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