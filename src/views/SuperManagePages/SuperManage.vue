<template>
  <div class="my_paper_page_back">
    <el-row>
      <el-col :span="24">
        <div class="my_paper_page_back">
          <el-divider></el-divider>
          <Suspense>
            <template #default>
              <set-manage/>
            </template>
            <template #fallback>
              <el-skeleton :rows="10" animated />
            </template>
          </Suspense>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import SetManage from "@/components/SuperManagePage/SetManage.vue";

export default defineComponent({
  name: "administratorsUserManage",
  components: { SetManage },
  setup() {
    const store = useStore();
    if (parseInt(store.state.userpower) <= 2) {
      router.push("/");
      return ElMessage("您没有权限访问该页面");
    }
    return { store };
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

.upformback
  background-color white
  width 100%
  margin auto
  max-width 408px

.buttonbetween
  height 20px
</style>