<template>
  <div class="tableback">
    <div class="tableform">
      <el-form
        ref="form"
        :model="f"
        label-width="100px"
        label-position="right"
        :rules="rules"
      >
        <el-form-item label="学科分类" prop="xueke">
          <el-input v-model="f.xueke"></el-input>
        </el-form-item>
        <el-form-item label="项目类别" prop="xiangmu">
          <el-input v-model="f.xiangmu"></el-input>
        </el-form-item>
        <el-form-item label="课题名称" prop="ketiname">
          <el-input v-model="f.ketiname"></el-input>
        </el-form-item>
        <el-form-item label="申请人姓名" prop="shenqingname">
          <el-input v-model="f.shenqingname"></el-input>
        </el-form-item>
        <el-form-item label="填报日期" prop="tianbaodate">
          <el-date-picker
            v-model="f.tianbaodate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="gonext('form')">下一步</el-button>
          <el-button  @click="goback"  >放弃填写</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import { ElMessage } from "element-plus";
import { postTableInfo, postTableFirstDate } from "@/hooks/tableMethos";
export default defineComponent({
  name: "basicTableInfo",
  setup() {
    const store = useStore();
    const form = {
      xueke: "",
      xiangmu: "",
      ketiname: "",
      shenqingname: store.state.userTruename,
      tianbaodate: "",
    };
    const f = ref(form);
    const rules = ref({
      xueke: [{ required: true, message: "不能为空" }],
      xiangmu: [{ required: true, message: "不能为空" }],
      ketiname: [{ required: true, message: "不能为空" }],
      shenqingname: [{ required: true, message: "不能为空" }],
      tianbaodate: [{ required: true, message: "不能为空" }],
    });

    const nextstep = () => {
      const res = postTableInfo(
        store.state.postBasicTableInfoApi,
        f.value["ketiname"],
        store.state.userid
      );
      res.then(function (response) {
        if (response["result"] == 0) {
          store.state.nowCreatTableid = response["id"];
           store.state.nowCreatTablename=response["filename"]
          const result = postTableFirstDate(
            store.state.postFirstTableDataApi,
            response["id"],
            f.value["xueke"],
            f.value["xiangmu"],
            f.value["ketiname"],
            f.value["shenqingname"],
            f.value["tianbaodate"]
          );
          result.then(function (response) {
            if (response["result"] == 0) {
              store.state.tableNowAction = 2;
              router.push("/User/newTable/dataTable");
            } else {
              return ElMessage("哎呀，网络出问题了");
            }
          });
        } else {
          return ElMessage("哎呀，网络出问题了");
        }
      });
    };
    const goback=()=>{
      store.state.selectTableType=0
      router.push("/User/tablePage");
    }
    onBeforeMount(() => {
      if (store.state.selectTableType != 1) {
        router.push("/User/newTable/table");
        return ElMessage("请先选择模板");
      }
    });
    return { f, nextstep, rules,goback };
  },
  methods: {
    gonext(myform) {
      this.$refs[myform].validate((valid) => {
        if (valid) {
          this.nextstep();
        } else {
          return ElMessage("请正确填写字段");
        }
      });
    },
  },
});
</script>
<style lang="stylus" scoped>
.tableback
  height 100%
  background-color white
  display flex
  justify-content center

.tableform
  height 100%
  width 100%
  max-width 580px
</style>