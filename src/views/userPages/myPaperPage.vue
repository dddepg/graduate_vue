<template>
  <div class="my_paper_page_back">
    <el-row>
      <el-col :span="19">
        <div class="my_paper_page_back">
          <div>
            <h1>我的论文</h1>
          </div>
          <el-divider></el-divider>
          <Suspense>
            <template #default>
              <get-my-paper />
            </template>
            <template #fallback>
              <el-skeleton :rows="10" animated />
            </template>
          </Suspense>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="upload_back">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            accept=".pdf"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <template #tip>
              <div class="el-upload__tip">
                只能上传 pdf 文件
              </div>
            </template>
          </el-upload>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import getMyPaper from "@/components/UserPage/MyPaperPage/getMyPaper.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { getMyPaper },
  name: "myPaperPage",
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
