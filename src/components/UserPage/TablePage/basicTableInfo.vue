<template>
  <div class="tableback">
    <el-row type="flex" justify="space-between">
      <el-col span="3">
        <p>学科分类</p>
      </el-col>
      <el-col span="3">
        <el-input v-model="xueke" placeholder="请输入学科分类"></el-input>
      </el-col>
      <el-col span="3">
        <p>项目类别</p>
      </el-col>
      <el-col span="3">
        <el-input v-model="xiangmu" placeholder="请输入项目类别"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col span="3">
        <p>课题名称</p>
      </el-col>
      <el-col span="3">
        <el-input v-model="ketiname" placeholder="请输入课题名称"></el-input>
      </el-col>
      <el-col span="3">
        <p>申请人姓名</p>
      </el-col>
      <el-col span="3">
        <el-input
          v-model="shenqingname"
          placeholder="请输入申请人姓名"
        ></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col span="3">
        <p>请输入填报日期W</p>
      </el-col>
      <el-col span="3">
        <el-input v-model="ketiname" placeholder="请输入课题名称"></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "basicTableInfo",
  setup() {
    const store = useStore();
    const xueke = ref("");
    const xiangmu = ref("");
    const ketiname = ref("");
    const shenqingname = ref(store.state.userTruename);
    return { xueke, xiangmu, ketiname, shenqingname };
  },
});
</script>
<style lang="stylus" scoped>
.tableback
  height 100%
  background-color white
</style>