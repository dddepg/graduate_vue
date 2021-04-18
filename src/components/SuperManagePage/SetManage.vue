<template>
  <el-table
    ref="allusertable"
    :data="result"
    style="width: 100%"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="my_paper_table"
  >
    <el-table-column label="用户名" prop="name" sortable> </el-table-column>
    <el-table-column label="用户权限" prop="power" :formatter="showitem">
    </el-table-column>
    <el-table-column align="center">
      <template #header>
        <h3>操作</h3>
      </template>
      <template #default="scope">
        <el-tooltip
          class="item"
          effect="dark"
          content="修改用户权限"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-s-tools"
            circle
            @click="
              updatethestate(scope.$index, scope.row['id'], scope.row['power'])
            "
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { getAllInfo } from "@/hooks/getInfo";
import { changeUserPower } from "@/hooks/managePassWord";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "setManage",
  setup() {
    const loading = ref(true);
    const store = useStore();
    const getApi = store.state.getSuperAllUserPaperApi;
    const result = ref();
    const words: Promise<{
      result: string;
      data: Array<{ title: string }>;
      msg?: string;
    }> = getAllInfo(getApi);
    words.then(function (response) {
      if (response["result"] == "1") {
        result.value = response["data"];
        loading.value = false;
      }
    });
    const showitem = (cellValue: { power: number }) => {
      if (cellValue["power"] == 1) {
        return "普通用户";
      } else {
        return "管理员";
      }
    };

    const updatethestate = (ind: number, id: string, power: number) => {
      const res = changeUserPower(store.state.changeUserPowerApi, id, power);
      res.then(function (response) {
        if (response["result"] == "1") {
          if (power == 1) {
            result.value[ind]["power"] = 2;
          } else {
            result.value[ind]["power"] = 1;
          }
          return ElMessage("修改成功");
        } else {
          return ElMessage("网络异常");
        }
      });
    };

    return {
      result,
      loading,
      updatethestate,
      showitem,
    };
  },
});
</script>
<style lang="stylus" scoped>
.my_paper_table
  height 85%
  overflow-y auto
</style>
