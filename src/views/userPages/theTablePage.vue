<template>
  <div class="my_paper_page_back">
    <el-row>
      <el-col :span="19">
        <div class="my_paper_page_back">
          <div>
            <h1>我的申请表</h1>
          </div>
          <el-divider></el-divider>
          <Suspense>
            <template #default>
              <get-my-table />
            </template>
            <template #fallback>
              <el-skeleton :rows="10" animated />
            </template>
          </Suspense>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="upload_back">
          <el-button size="small" type="primary" @click="creatTable()"
            >新建申请表</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import GetMyTable from "@/components/UserPage/TablePage/getMyTable.vue";
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  // 我的主页——申请表管理页面
  components: { GetMyTable },
  name: "thetablePage",
  setup() {
    // 点击新建申请表后跳转至新页面
    const creatTable = () => {
      router.push("./newTable/table");
    };
    return { creatTable };
  },
});
</script>
<style lang="stylus" scoped>
.my_paper_page_back
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  overflow-y auto

.uploadbutton
  padding-top 10px
  height 80%

.el-col
  height 80%

.upload_back
  background-color rgb(255, 255, 255)
  margin-top 40px
  height 100%
  overflow-y auto
</style>