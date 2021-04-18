<template>
  <div class="my_paper_page_back">
    <el-row>
      <el-col :span="19">
        <div class="my_paper_page_back">
          <el-divider></el-divider>
          <Suspense>
            <template #default>
              <get-all-user :key="store.state.adduser"/>
            </template>
            <template #fallback>
              <el-skeleton :rows="10" animated />
            </template>
          </Suspense>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="upload_back">
          <creat-user title="新增一个用户" :which="1" ref="creatuser1" />
          <div class="buttonbetween" />
          <creat-user title="新增多个用户" :which="2" ref="creatuser1" />
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
import GetAllUser from "@/components/ManagePage/getAllUser.vue";
import CreatUser from "@/components/ManagePage/creatUser.vue";

export default defineComponent({
  name: "administratorsUserManage",
  components: { GetAllUser, CreatUser },
  setup() {
    const store = useStore();
    if (parseInt(store.state.userpower) == 1) {
      router.push("/");
      return ElMessage("您没有权限访问该页面");
    }
    return {store}
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