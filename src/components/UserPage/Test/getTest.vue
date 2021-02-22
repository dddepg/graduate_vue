<template>
  <div>
    <el-link v-for="(value, i) in result" :key="i" :href="value['URL']">
      {{ value["title"] }}
    </el-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { getLinks } from "@/hooks/getLinks";
import { useStore } from "vuex";
import { ElLoading } from "element-plus";
export default defineComponent({
  name: "getTest",
  setup() {
    const store = useStore();
    const result = ref();
    const loadingInstance = ElLoading.service({
      lock: false,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    const words: Promise<{ URL: string; title: string }> = getLinks(
      store.state.testApi
    );
    words.then((value) => {
      result.value = value;
      loadingInstance.close();
    });

    return {
      result,
    };
  },
});
</script>
<style lang="stylus" scoped>
.div
  height 80px
</style>
