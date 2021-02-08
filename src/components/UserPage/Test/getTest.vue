<template>
  <div>
    <el-link v-for="(value, i) in result" :key="i" :href="value['URL']">
      {{ value["title"] }}
    </el-link>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import { getLinks } from "@/hooks/getLinks";
import { useStore } from "vuex";
export default defineComponent({
  name: "getTest",
  setup() {
    const store = useStore();
    const result =ref()
    const words: Promise<{'URL': string;'title': string}> = getLinks(store.state.testApi);
    words.then((value) => {
      result.value=value
    });
    return {
      result
    };
  },
});
</script>
<style lang="stylus" scoped></style>