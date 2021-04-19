<template>
  <div>
    <el-button type="primary" @click="open(which)">{{ title }}</el-button>
  </div>
  <el-dialog :title="title" v-model="creatAUser" :width="dialogwidth">
    <el-form
      ref="creatuserform"
      label-width="135px"
      :rules="rules1"
      status-icon
      :model="f1"
    >
      <el-form-item label="请输入新的用户名" prop="name">
        <el-input v-model="f1.onename"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="creat()">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog :title="title" v-model="creatNumUser" :width="dialogwidth">
    <el-form
      ref="creatuserform2"
      label-width="135px"
      :rules="rules2"
      status-icon
      :model="f2"
    >
      <el-form-item label="请输入起始学号" prop="numfirstname">
        <el-input v-model.number="f2.numfirstname"></el-input>
      </el-form-item>
      <el-form-item label="请输入终止学号" prop="numlastname">
        <el-input v-model.number="f2.numlastname"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="creat()">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { defineComponent, ref } from "vue";
import { creatOneUser, creatMoreUser } from "@/hooks/creatUser";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { useWindowSize } from "@vueuse/core";
export default defineComponent({
  name: "creatUser",
  props: ["title", "which"],
  inject: ["reload"],
  setup(props) {
    const creatAUser = ref(false);
    const creatNumUser = ref(false);
    const { width, height } = useWindowSize();
    const dialogwidth = ref("30%");
    const form1 = {
      onename: "",
    };
    const f1 = ref(form1);
    const form2 = {
      numfirstname: 0,
      numlastname: 0,
    };
    const f2 = ref(form2);
    const store = useStore();
    const creat = () => {
      if (props.which == 1) {
        const res = creatOneUser(store.state.creatUserApi, f1.value["onename"]);
        res.then(function (response) {
          if (response["result"] == 1) {
            creatAUser.value = false;
            store.state.adduser=!store.state.adduser
            return ElMessage("添加成功");
          } else {
            return ElMessage(response["msg"]);
          }
        });
      } else {
        const res = creatMoreUser(
          store.state.creatUserApi,
          f2.value["numfirstname"],
          f2.value["numlastname"]
        );
        res.then(function (response) {
          if (response["result"] == 1) {
            creatNumUser.value = false;
            store.state.adduser=!store.state.adduser
            return ElMessage("添加成功");
          } else {
            return ElMessage(response["msg"]);
          }
        });
      }
    };
    const close = () => {
      creatAUser.value = false;
      creatNumUser.value = false;
      f2.value["numfirstname"] = 0;
      f2.value["numlastname"] = 0;
    };
    const open = (which) => {
      console.log(height);
      if (width.value > 800) {
        dialogwidth.value = "30%";
      } else {
        dialogwidth.value = "100%";
      }
      if (which == 1) {
        creatAUser.value = true;
      } else {
        creatNumUser.value = true;
      }
    };
    return {
      creatAUser,
      creatNumUser,
      f1,
      f2,
      creat,
      close,
      open,
      dialogwidth
    };
  },
});
</script>
<style lang="stylus" scoped></style>