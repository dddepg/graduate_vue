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
    <el-table-column label="用户密码" prop="password"> </el-table-column>
    <el-table-column align="center">
      <template #header>
        <h3>操作</h3>
      </template>
      <template #default="scope">
        <el-tooltip
          class="item"
          effect="dark"
          content="删除用户"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.$index, scope.row['id'])"
          ></el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="重置用户"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-s-tools"
            circle
            @click="updatethestate(scope.$index, scope.row['id'])"
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="警告" v-model="dialogVisible" width="30%">
    <span>一旦删除无法恢复，确定删除用户？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="sureDelet()">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { getAllInfo } from "@/hooks/getInfo";
import { rebackUser } from "@/hooks/managePassWord";
import { deleUser } from "@/hooks/dele";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "getAllUser",
  setup() {
    let seletindex = 0;
    const dialogVisible = ref(false);
    const statemanageDialog = ref(false);
    const loading = ref(true);
    const store = useStore();
    const getApi = store.state.getAllUserApi;
    const result = ref();
    const managepaperid = ref();
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
    let deleid = "er";
    const handleDelete = (ind: number, id: string): void => {
      seletindex = ind;
      deleid = id;
      dialogVisible.value = true;
    };
    const sureDelet = (): void => {
      dialogVisible.value = false;
      const res: Promise<{
        result: string;
        msg: string;
      }> = deleUser(store.state.deleUserApi, deleid);
      res.then(function (response) {
        if (response["result"] == "1") {
          result.value.splice(seletindex, 1);
          return ElMessage(response["msg"]);
        } else {
          return ElMessage(response["msg"]);
        }
      });
    };

    const updatethestate = (ind: number, id: string) => {
      const res = rebackUser(store.state.rebackUserApi, id);
      res.then(function (response) {
        if (response["result"] == "1") {
          result.value[ind]["password"] = result.value[ind]["name"];
          return ElMessage("修改成功");
        } else {
          return ElMessage(response["msg"]);
        }
      });
    };

    return {
      result,
      dialogVisible,
      seletindex,
      handleDelete,
      sureDelet,
      loading,
      statemanageDialog,
      updatethestate,
      managepaperid,
    };
  },
});
</script>
<style lang="stylus" scoped>
.my_paper_table
  height 85%
  overflow-y auto
</style>
