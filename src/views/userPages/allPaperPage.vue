<template>
  <div class="tread_back_area">
    <el-tabs v-model="active" type="border-card" class="paper_tabs">
      <el-tab-pane label="全部论文" name="allpaper">
        <Suspense>
          <template #default>
            <get-all-paper type="all" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="基础科学"  type="1">
        <Suspense>
          <template #default>
            <get-type-paper type="1" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="工程科技" name="gongcheng">
        <Suspense>
          <template #default>
            <get-type-paper type="2" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="农业科技" name="nongye">
        <Suspense>
          <template #default>
            <get-type-paper type="3" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="医药卫生科技" name="yiyao">
        <Suspense>
          <template #default>
            <get-type-paper type="4" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="哲学与人文科学" name="zhexue">
        <Suspense>
          <template #default>
            <get-type-paper type="5" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="社会科学" name="shehui">
        <Suspense>
          <template #default>
            <get-type-paper type="6" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="信息科技" name="xinxi">
        <Suspense>
          <template #default>
            <get-type-paper type="7" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="经济与管理科学" name="jingji">
        <Suspense>
          <template #default>
            <get-type-paper type="8" />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GetAllPaper from "@/components/UserPage/AllPaperPage/getAllPaper.vue";
import GetTypePaper from "@/components/UserPage/AllPaperPage/getTypePaper.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "allPaperPage",
  // 全部论文界面，通过设置不同的type显示不同的结果
  // 当时全部设置为通过type来决定结果时，发生了报错，因此全部论文单独列出
  components: {
    GetAllPaper,
    GetTypePaper,
  },
  setup() {
    // 设置进入该页面时激活的页面
    const active = ref("allpaper");
    const name = ref();
    return { active, name };
  },
});
</script>

<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  display flex
  justify-content center

.paper_tabs
  border box-shadow
  height 90%
  width 95%
  margin-top 20px
  overflow-y auto
</style>
