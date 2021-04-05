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
              <get-my-paper :key="flag" />
            </template>
            <template #fallback>
              <el-skeleton :rows="10" animated />
            </template>
          </Suspense>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="upload_back">
          <el-button type="primary" @click="change">点击上传论文</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-dialog title="上传论文" v-model="dialogVisible" width="60%">
    <el-upload
      class="upload-demo"
      :action="store.state.updataPDFApi"
      :multiple="false"
      accept=".pdf"
      :limit="1"
      ref="upload"
      :on-success="upresult"
      :on-error="upresult"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <template #tip>
        <div class="el-upload__tip">只能上传 pdf 文件,且一次只能上传一个哦</div>
        <div class="el-upload__tip">
          更换方式：点击文件右边按钮删除，删除后重新上传
        </div>
      </template>
    </el-upload>
    <p>论文链接：{{ paperInfo.url }}</p>
    <div class="updia">
      <div class="upformback">
        <el-form
          label-position="left"
          label-width="auto"
          :model="paperInfo"
          size="small"
        >
          <el-form-item
            label="论文标题"
            :rules="[{ required: true, message: '标题不能为空' }]"
          >
            <el-input v-model="paperInfo.title"></el-input>
          </el-form-item>
          <el-form-item label="论文类别">
            <el-select
              v-model="paperInfo.papertype"
              placeholder="请选择论文类别"
            >
              <el-option label="基础科学" value="1"></el-option>
              <el-option label="工程科技" value="2"></el-option>
              <el-option label="农业科技" value="3"></el-option>
              <el-option label="医药卫生科技" value="4"></el-option>
              <el-option label="哲学与人文科学" value="5"></el-option>
              <el-option label="社会科学" value="6"></el-option>
              <el-option label="信息科技" value="7"></el-option>
              <el-option label="经济与管理科学" value="8"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="论文共享权限">
            <el-radio-group v-model="paperInfo.power">
              <el-radio label="1">私人观看</el-radio>
              <el-radio label="0">公开</el-radio>
              <!-- <el-radio label="限制公开"></el-radio> -->
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="关键词1"
            size="medium"
            :rules="[{ required: true, message: '至少输入一个关键词' }]"
          >
            <el-input v-model="paperInfo.key1"></el-input>
          </el-form-item>
          <el-form-item label="关键词2" size="medium">
            <el-input v-model="paperInfo.key2"></el-input>
          </el-form-item>
          <el-form-item label="关键词3" size="medium">
            <el-input v-model="paperInfo.key3"></el-input>
          </el-form-item>
          <el-form-item label="关键词4" size="medium">
            <el-input v-model="paperInfo.key4"></el-input>
          </el-form-item>
          <el-form-item label="关键词5" size="medium">
            <el-input v-model="paperInfo.key5"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose(change)">取 消</el-button>
        <el-button type="primary" @click="finalupload">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script >
import getMyPaper from "@/components/UserPage/MyPaperPage/getMyPaper.vue";
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import qs from "qs";
export default defineComponent({
  components: { getMyPaper },
  name: "myPaperPage",
  setup() {
    const flag =ref(true)
    const store = useStore();
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
            flag.value=!flag.value
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
      flag
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
