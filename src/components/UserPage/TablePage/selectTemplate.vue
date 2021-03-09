<template>
  <div class="imgback">
    <h2>请选择想使用的申请表模板</h2>
    <el-row type="flex" justify="space-around">
      <el-col :span="10"
        ><el-image
          class="img"
          style="width: 300px; height: 350px"
          :src="url1"
          :preview-src-list="preurl1"
        >
        </el-image
      ></el-col>
      <el-col :span="10"
        ><el-image
          style="width: 300px; height: 350px"
          :src="url2"
          :preview-src-list="preurl2"
        >
        </el-image
      ></el-col>
    </el-row>
    <h5>点击图片可进行预览</h5>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "selectTemplate",
  setup() {
    const url1 = ref("https://dddepg.top/getpdf/static/word1.png");
    const url2 = ref("https://dddepg.top/getpdf/static/word2.png");
    const preurl1 = ref(["https://dddepg.top/getpdf/static/word1.png"]);
    const preurl2 = ref(["https://dddepg.top/getpdf/static/word2.png"]);
    return { url1, url2, preurl1, preurl2 };
  },
});
</script>
<style lang="stylus" scoped>
.imgback
  height 100%
</style>