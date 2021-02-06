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
import axios from "axios";
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "getAllTread",
  async setup() {
    const store = useStore();
    const getApi = store.state.allTreadApiFirst;
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