<template>
  <div>
    <el-button plain @click="click(which)">{{ title }}</el-button>
  </div>

  <el-dialog title="安全验证" v-model="testMan" :width="dioSize">
    <span>为了您的安全，请验证身份</span>
    <el-form
      ref="userform"
      :model="f"
      label-width="135px"
      :rules="truerules"
      status-icon
    >
      <el-form-item label="请输入您的用户名" prop="name">
        <el-input v-model="f.name"></el-input>
      </el-form-item>
      <el-form-item label="请输入您的电话" prop="tele">
        <el-input v-model="f.tele" placeholder="注册时的电话"></el-input>
      </el-form-item>
      <el-form-item label="请输入您的邮箱" prop="email">
        <el-input v v-model="f.email" placeholder="注册时的邮箱"> </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="testMan = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('userform', postTOtest)"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
  <el-dialog title="修改密码" v-model="changeWord" :width="dioSize">
    <el-form
      ref="ruleForm"
      :model="passf"
      label-width="150px"
      :rules="rules"
      status-icon
    >
      <el-form-item label="请输入新的密码" prop="pass">
        <el-input type="password" v-model="passf.pass"></el-input>
      </el-form-item>
      <el-form-item label="请再次输入新的密码" prop="checkPass">
        <el-input type="password" v-model="passf.checkPass"> </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="changeWord = false">取 消</el-button>
        <el-button
          type="primary"
          @click="submitForm('ruleForm', postChangePassWord)"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script >
import {
  defineComponent,
  ref,
  onBeforeUpdate,
} from "vue";
import { testTrue, changePass } from "@/hooks/managePassWord";
import { ElMessage } from "element-plus";
import { useCookies } from "@vueuse/integrations";
import { useStore } from "vuex";
import router from "@/router";
import { useWindowSize } from "@vueuse/core";
// 忘记密码组件
export default defineComponent({
  name: "passwordchange",
  // 父组件传递参数，确定显示对话框类型
  props: ["title", "which"],
  setup(props) {
    
    const testMan = ref(false);
    const changeWord = ref(false);
    const store = useStore();
    const form = {
      name: "",
      tele: "",
      email: "",
    };
    const f = ref(form);
    // 设置对话框大小，初始加载时设置
    const dioSize = ref("30%");
    {
      const size = useWindowSize();
      if (size.width.value < 600) {
        dioSize.value = "100%";
      } else if (size.width.value < 1200) {
        dioSize.value = "60%";
      }else{
        dioSize.value = "30%";
      }
    }

    // 每次关闭后更新对话框大小
    onBeforeUpdate(() => {
      const size = useWindowSize();
      if (size.width.value < 600) {
        dioSize.value = "100%";
      } else if (size.width.value < 1200) {
        dioSize.value = "60%";
      }
    });

    const click = (which) => {
      if (which == "1") {
        testMan.value = true;
      } else {
        changeWord.value = true;
      }
    };
    const postTOtest = () => {
      const res = testTrue(
        store.state.TestTrueApi,
        f.value["name"],
        f.value["email"],
        f.value["tele"]
      );
      res.then(function (response) {
        console.log(response);
        if (response["result"] == "0") {
          testMan.value = false;
          changeWord.value = true;
        } else {
          return ElMessage(response["msg"]);
        }
      });
    };
    const passform = {
      pass: "",
      checkPass: "",
    };
    const passf = ref(passform);
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== passf.value["pass"]) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const rules = {
      pass: [{ validator: validatePass }],
      checkPass: [{ validator: validatePass2 }],
    };
    const truerules = {
      name: [{ required: true, message: "不能为空" }],
      tele: [{ required: true, message: "不能为空" }],
      email: [{ required: true, message: "不能为空" }],
    };

    // 修改密码方法
    const cookie = useCookies();
    const postChangePassWord = () => {
      // 判断发起修改的位置
      // 若f.value存在，说明在首页未登录状态下发起修改申请，此时store中不存在用户名
      if (f.value["name"] != "") {
        const res = changePass(
          store.state.ChangePassApi,
          passf.value["checkPass"],
          f.value["name"]
        );
        // 修改成功，关闭对话框，返回首页，弹出“修改成功”
        res.then(function (response) {
          if (response["result"] == "0") {
            changeWord.value = false;
            router.go("/");
            return ElMessage(response["msg"]);
          } else {
            return ElMessage(response["msg"]);
          }
        });
      } else {
        // 若不存在，证明用户在用户界面发起修改申请，此时用户名可通过store获取
        const res = changePass(
          store.state.ChangePassApi,
          passf.value["checkPass"],
          store.state.username
        );
        res.then(function (response) {
          if (response["result"] == "0") {
            changeWord.value = false;
            cookie.remove("user");
            router.go("/");
            return ElMessage(response["msg"]);
          } else {
            return ElMessage(response["msg"]);
          }
        });
      }
    };
    return {
      testMan,
      changeWord,
      click,
      postTOtest,
      rules,
      truerules,
      props,
      f,
      passf,
      postChangePassWord,
      dioSize,
    };
  },
  methods: {
    submitForm(formName, next) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          next();
        } else {
          return ElMessage("请正确填写字段");
        }
      });
    },
  },
});
</script>
<style lang="stylus" scoped></style>