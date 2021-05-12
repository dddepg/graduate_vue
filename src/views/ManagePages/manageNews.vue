<template>
  <div class="my_paper_page_back">
    <el-row>
      <el-col :span="19">
        <div class="my_paper_page_back">
          <div>
            <h1>所有新闻</h1>
          </div>
          <el-divider></el-divider>
          <el-tabs v-model="active" type="border-card" class="paper_tabs">
            <el-tab-pane label="科研动态" name="active">
              <Suspense>
                <template #default>
                  <get-all-news-man :type="1" :key="store.state.allnewsflag"/>
                </template>
                <template #fallback>
                  <el-skeleton :rows="10" animated />
                </template>
              </Suspense>
            </el-tab-pane>
            <el-tab-pane label="最新研究" name="tread">
              <Suspense>
                <template #default>
                  <get-all-news-man :type="2" :key="store.state.allnewsflag"/>
                </template>
                <template #fallback>
                  <el-skeleton :rows="10" animated />
                </template>
              </Suspense>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="buttonbetween" />
        <add-newly />
      </el-col>
    </el-row>
  </div>
</template>
<script >
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import AddNewly from "@/components/ManagePage/addNewly.vue";
import GetAllNewsMan from "@/components/ManagePage/getAllNewsMan.vue";
import { ElMessage } from "element-plus";
import router from "@/router";
export default defineComponent({
  components: { AddNewly, GetAllNewsMan },
  name: "manageNews",
  setup() {
    // 管理新闻界面
    const store = useStore();
    // 访问权限判断
    if (parseInt(store.state.userpower) == 1) {
      router.push("/");
      return ElMessage("您没有权限访问该页面");
    }
    // 同样设置进入时激活的页面
    const active=ref('active')
    return {
      store,
      active
    };
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

.paper_tabs
  border box-shadow
  height 90%
  width 95%
  margin-top 20px
  overflow-y auto

.buttonbetween
  height 40px
</style>
