<template>
  <div class="my_paper_page_back">
    <el-row>
      <el-col :span="24">
        <div class="my_paper_page_back">
          <Suspense>
            <template #default>
              <manage-all-user-paper :key="flag" />
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
<script >
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import qs from "qs";
import ManageAllUserPaper from "@/components/ManagePage/ManageAllUserPaper.vue";
import router from "@/router";
export default defineComponent({
  components: { ManageAllUserPaper },
  name: "manageAllPaperPage",
  setup() {
    // 管理全部论文页面
    const flag = ref(true);
    const store = useStore();
    if (parseInt(store.state.userpower) == 1) {
      router.push("/");
      return ElMessage("您没有权限访问该页面");
    }
    const dialogVisible = ref(false);
    const change = () => {
      if (dialogVisible.value == false) {
        dialogVisible.value = true;
      } else {
        dialogVisible.value = false;
      }
    };
    const paper = {
      url: "loading...",
      title: "",
      userid: store.state.userid,
      power: "1",
      papertype: "1",
      key1: "",
      key2: "",
      key3: "",
      key4: "",
      key5: "",
    };
    const paperInfo = ref(paper);
    const upresult = (response, file, fileList) => {
      if (response["result"] == 0) {
        paperInfo.value["url"] = response["url"];
        paperInfo.value["title"] = file["name"].split(".pdf")[0];
      }
      if (response["result"] == 1) {
        console.log(fileList.splice(0));
        return ElMessage(response["msg"]);
      }
    };
    const finalupload = async () => {
      if (paperInfo.value["url"] == "loading...") {
        return ElMessage("请先上传文件");
      } else {
        const data = {
          title: paperInfo.value["title"],
          ownerid: paperInfo.value["userid"],
          url: paperInfo.value["url"],
          power: paperInfo.value["power"],
          name: store.state.userTruename,
          paperType: paperInfo.value["papertype"],
          key1: paperInfo.value["key1"],
          key2: paperInfo.value["key2"],
          key3: paperInfo.value["key3"],
          key4: paperInfo.value["key4"],
          key5: paperInfo.value["key5"],
        };

        const result = await axios({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "post",
          url: store.state.addpdfInfoApi,
          data: qs.stringify(data),
        }).then(function (response) {
          if (response.data["result"] == 1) {
            change();
            flag.value = !flag.value;
            dialogVisible.value = false;
            return ElMessage(response.data["msg"]);
          } else {
            return ElMessage(response.data["msg"]);
          }
        });
        console.log(result.data["result"]);
      }
    };

    return {
      dialogVisible,
      change,
      paperInfo,
      upresult,
      store,
      finalupload,
      flag,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确定放弃上传并且关闭对话框?", "放弃上传", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          done();
        })
        .catch((_) => {
          console.log(_);
        });
    },
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
</style>
