<template>
  <div class="imgback">
    <h2>请选择想使用的申请表模板</h2>
    <el-row type="flex" justify="space-around">
      <el-col :span="10"
        ><el-image
          class="img"
          style="width: 250px; height: 250px"
          :src="url1"
          :preview-src-list="preurl1"
        >
        </el-image
      ></el-col>
      <el-col :span="10"
        ><el-image
          style="width: 250px; height: 250px"
          :src="url2"
          :preview-src-list="preurl2"
        >
        </el-image
      ></el-col>
    </el-row>
    <h5>点击图片可进行预览，点击下方按钮进行模板选择</h5>
    <el-row type="flex" justify="space-around">
      <el-col :span="10"
        ><el-button
          type="primary"
          @click="opendialog('您选择了国家社会科学基金项目申请书模板')"
          border
          >选择该模板</el-button
        >
      </el-col>
      <el-col :span="10"
        ><el-button
          type="primary"
          @click="
            opendialog(
              '您选择了全国教育科学规划课题（其他类别）-申请书申请书模板'
            )
          "
          border
          >选择该模板</el-button
        >
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around"> </el-row>
  </div>

  <el-dialog
    title="确认选择"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>{{ title }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closdialog()">取 消</el-button>
        <el-button type="primary" @click="go()"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "selectTemplate",
  setup() {
    const url1 = ref("https://dddepg.top/getimg/word1.png");
    const url2 = ref("https://dddepg.top/getimg/word2.png");
    const preurl1 = ref(["https://dddepg.top/getimg/word1.png"]);
    const preurl2 = ref(["https://dddepg.top/getimg/word2.png"]);
    const dialogVisible = ref(false);
    const title = ref("");
    const opendialog = (word: string): void => {
      title.value = word;
      dialogVisible.value = true;
    };
    const closdialog = (): void => {
      dialogVisible.value = false;
    };
    const go = (): void => {
      dialogVisible.value = false;
      router.push("/tablePage/basic");
    };
    return {
      url1,
      url2,
      preurl1,
      preurl2,
      dialogVisible,
      title,
      opendialog,
      closdialog,
      go
    };
  },
});
</script>
<style lang="stylus" scoped>
.imgback
  height 100%
  overflow-y auto
</style>