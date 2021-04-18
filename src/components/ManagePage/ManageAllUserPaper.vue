<template>
  <el-table
    ref="mypapertable"
    :data="result"
    style="width: 100%"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="my_paper_table"
    :key="thetable"
  >
    <el-table-column label="论文名称" prop="title"> </el-table-column>
    <el-table-column label="上传时间" prop="date" sortable> </el-table-column>
    <el-table-column
      label="共享状态"
      prop="state"
      width="100%"
      sortable
      :formatter="showitem"
    >
    </el-table-column>
    <el-table-column align="center">
      <template #header>
        <h3>操作</h3>
      </template>
      <template #default="scope">
        <el-tooltip
          class="item"
          effect="dark"
          content="删除论文"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-delete"
            circle
            @click="
              handleDelete(scope.$index, scope.row['id'], scope.row['ownerid'])
            "
          ></el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="共享管理"
          placement="bottom-start"
        >
          <el-button
            icon="el-icon-s-tools"
            circle
            @click="
              stateManage(scope.row['id'], scope.row['state'], scope.$index)
            "
          ></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="警告" v-model="dialogVisible" width="30%">
    <span>论文一经删除无法恢复，确定删除论文？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="sureDelet()">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog title="分享状况" v-model="statemanageDialog" width="30%">
    <el-radio v-model="thestate" :label="0">公开</el-radio>
    <el-radio v-model="thestate" :label="1">私人观看</el-radio>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="updatethestate()">确 定</el-button>
        <el-button @click="statemanageDialog = false">取 消</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { updatestate } from "@/hooks/getMyPaper";
import { getAllInfo } from "@/hooks/getInfo";
import { delepaper } from "@/hooks/dele";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "manageAllUserPaper",
  setup() {
    let seletindex = 0;
    const dialogVisible = ref(false);
    const statemanageDialog = ref(false);
    const loading = ref(true);
    const store = useStore();
    const getApi = store.state.getAllUserPaperApi;
    const result = ref();
    const thestate = ref();
    const managepaperid = ref();
    const thetable = ref(true);
    const words: Promise<{
      result: string;
      data: Array<{ title: string }>;
    }> = getAllInfo(getApi);
    words.then((value) => {
      result.value = value["data"];
      loading.value = false;
    });
    const gopaper = (url: string): void => {
      window.open(url, "_blank");
    };
    let deleid = "er";
    let delownerid = "er";
    const handleDelete = (ind: number, id: string, ownerid: string): void => {
      seletindex = ind;
      deleid = id;
      delownerid = ownerid;
      dialogVisible.value = true;
    };
    const sureDelet = (): void => {
      dialogVisible.value = false;
      const res: Promise<{
        result: string;
        msg: string;
      }> = delepaper(store.state.delePaperApi, delownerid, deleid);
      res.then(function (response) {
        if (response["result"] == "1") {
          result.value.splice(seletindex, 1);
          return ElMessage(response["msg"]);
        } else {
          return ElMessage(response["msg"]);
        }
      });
    };

    const changeindex = ref();
    const stateManage = (id: string, state: string, index: string) => {
      thestate.value = state;
      managepaperid.value = id;
      changeindex.value = index;
      statemanageDialog.value = true;
    };
    const updatethestate = () => {
      const res = updatestate(
        store.state.changeStateApi,
        managepaperid.value,
        thestate.value
      );
      res.then(function (response: { result: string; msg: string }) {
        statemanageDialog.value = false;
        if (response["result"] == "0") {
          result.value[changeindex.value]["state"] = thestate.value;
          return ElMessage(response["msg"]);
        } else {
          return ElMessage(response["msg"]);
        }
      });
    };
    const showitem = (cellValue: { state: number }) => {
      if (cellValue["state"] == 0) {
        return "公开";
      } else {
        return "私人观看";
      }
    };
    return {
      result,
      dialogVisible,
      seletindex,
      gopaper,
      handleDelete,
      sureDelet,
      loading,
      statemanageDialog,
      thestate,
      stateManage,
      updatethestate,
      managepaperid,
      showitem,
      thetable,
    };
  },
});
</script>
<style lang="stylus" scoped>
.my_paper_table
  height 85%
  overflow-y auto
</style>
