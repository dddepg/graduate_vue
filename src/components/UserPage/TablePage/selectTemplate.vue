<template>
  <div class="imgback">
    <h2>请选择想使用的申请表模板</h2>
    <el-row type="flex" justify="space-around">
      <el-col :span="10"
        ><el-image
          class="img"
          style="width: 250px; height: 250px"
          :src="preurl1[0]"
          :preview-src-list="preurl1"
        >
        </el-image
      ></el-col>
      <!-- <el-col :span="10"
        ><el-image
          style="width: 250px; height: 250px"
          :src="url2"
          :preview-src-list="preurl2"
        >
        </el-image
      ></el-col> -->
    </el-row>
    <h5>点击图片可进行预览，点击下方按钮进行模板选择</h5>
    <el-row type="flex" justify="space-around">
      <el-col :span="24"
        ><el-button
          type="primary"
          @click="opendialog('您选择了国家社会科学基金项目申请书模板', 1)"
          border
          >选择该模板</el-button
        >
      </el-col>
      <!-- <el-col :span="10"
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
      </el-col> -->
    </el-row>
    <el-row type="flex" justify="space-around"> </el-row>
  </div>

  <el-dialog title="确认选择" v-model="dialogVisible" width="30%">
    <span>{{ title }}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="go()">确 定</el-button>
        <el-button @click="closdialog()">取 消</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "selectTemplate",
  setup() {
    const store = useStore();
    store.state.tableNowAction = 0;
    store.state.selectTableType = 0;
    // 显示申请表图片
    const preurl1 = ref(["https://dddepg.top/getimg/word1.png"]);
    // const preurl2 = ref(["https://dddepg.top/getimg/word2.png"]);
    const dialogVisible = ref(false);
    const title = ref("");
    const opendialog = (word: string, type: number): void => {
      title.value = word;
      store.state.selectTableType = type;
      dialogVisible.value = true;
    };
    const closdialog = (): void => {
      store.state.selectTableType = 0;
      dialogVisible.value = false;
    };
    const go = () => {
      dialogVisible.value = false;
      store.state.tableNowAction = 1;
      router.push("/User/newTable/basic");
    };
    return {

      preurl1,
      // preurl2,
      dialogVisible,
      title,
      opendialog,
      closdialog,
      go,
    };
  },
});
</script>
<style lang="stylus" scoped>
.imgback
  height 100%
  overflow-y auto
</style>