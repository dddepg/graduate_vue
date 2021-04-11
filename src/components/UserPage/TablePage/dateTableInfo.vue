<template>
  <div class="tableback">
    <div class="tableform">
      <el-form ref="form" :model="f" label-width="300px" label-position="right">
        <el-form-item label="课题名称">
          <el-input v-model="f.ketiming2"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="f.guanjianci"></el-input>
        </el-form-item>
        <el-form-item label="项目类别">
          <el-input v-model="f.xiangmuleibie"></el-input>
        </el-form-item>
        <el-form-item label="学科分类">
          <el-input v-model="f.xuekefenlei"></el-input>
        </el-form-item>
        <el-form-item label="研究类型">
          <el-input v-model="f.yanjiuleixing"></el-input>
        </el-form-item>
        <el-form-item label="课题负责人">
          <el-input v-model="f.ketifuzeren"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="f.xingbie"></el-input>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="f.mingzu"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-input v-model="f.chushengri"></el-input>
        </el-form-item>
        <el-form-item label="行政职务">
          <el-input v-model="f.xingzhengzhiwu"></el-input>
        </el-form-item>
        <el-form-item label="专业职称">
          <el-input v-model="f.zhuanyezhicheng"></el-input>
        </el-form-item>
        <el-form-item label="研究专长">
          <el-input v-model="f.yanjiuzhuanchang"></el-input>
        </el-form-item>
        <el-form-item label="最后学历">
          <el-input v-model="f.zuihouxueli"></el-input>
        </el-form-item>
        <el-form-item label="最后学位">
          <el-input v-model="f.zuihouxuewei"></el-input>
        </el-form-item>
        <el-form-item label="担任导师">
          <el-input v-model="f.danrendaoshi"></el-input>
        </el-form-item>
        <el-form-item label="所在省">
          <el-input
            v-model="f.suozaisheng1"
            placeholder="请输入英文代码"
          ></el-input>
          <el-input v-model="f.suozaisheng2"></el-input>
        </el-form-item>
        <el-form-item label="所属系统">
          <el-input
            v-model="f.suoshuxitong1"
            placeholder="请输入英文代码"
          ></el-input>
          <el-input v-model="f.suoshuxitong2"></el-input>
        </el-form-item>
        <el-form-item label="工作单位">
          <el-input v-model="f.gongzuodanwei"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="f.lianxidianhua"></el-input>
        </el-form-item>
        <el-form-item label="身份证件类型">
          <el-input v-model="f.shengfenzheng1"></el-input>
        </el-form-item>
        <el-form-item label="身份证件号码">
          <el-input v-model="f.sfzhm"></el-input>
        </el-form-item>
        <el-form-item label="是否在内地（大陆）工作的港澳台研究人员">
          <el-radio v-model="f.sfgat" label="1">是</el-radio>
          <el-radio v-model="f.sfgat" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="预期成果">
          <el-input v-model="f.yuqicg"></el-input>
        </el-form-item>
        <el-form-item label="字数（千字）">
          <el-input v-model="f.yuqizs"></el-input>
        </el-form-item>
        <el-form-item label="申请经费（单位：万元）">
          <el-input v-model="f.sqjfei"></el-input>
        </el-form-item>
        <el-form-item label="计划完成时间">
          <el-date-picker
            v-model="f.jihuawanchengshijian"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="go">下一步</el-button>
          <el-button>放弃填写</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "dateTableInfo",
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      if (store.state.tableNowAction != 2) {
        router.push("/User/newTable/table");
        return ElMessage("请先选择模板");
      }
    });
    const form = {
      ketiming2: "",
      guanjianci: "",
      xiangmuleibie: "",
      xuekefenlei: "",
      yanjiuleixing: "",
      ketifuzeren: "",
      xingbie: "",
      mingzu: "",
      chushengri: "",
      xingzhengzhiwu: "",
      zhuanyezhicheng: "",
      yanjiuzhuanchang: "",
      zuihouxueli: "",
      zuihouxuewei: "",
      danrendaoshi: "",
      suozaisheng1: "",
      suozaisheng2: "",
      suoshuxitong1: "",
      suoshuxitong2: "",
      gongzuodanwei: "",
      lianxidianhua: "",
      shengfenzheng1: "",
      sfzhm: "",
      sfgat: "1",
      yuqicg: "",
      yuqizs: "",
      sqjfei: "",
      jihuawanchengshijian: "",
    };
    const f = ref(form);
    const go = () => {
      store.state.tableNowAction = 3;
      router.push("/User/newTable/finalDate");
    };
    return { f,go };
  },
});
</script>
<style lang="stylus" scoped>
.tableback
  background-color white
  display flex
  justify-content center

.tableform
  overflow-y auto
  height 95%
  width 100%
  max-width 880px
</style>