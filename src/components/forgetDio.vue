<template>
  <div>
    <el-button plain @click="click(which)">{{title}}</el-button>
  </div>

  <el-dialog title="安全验证" v-model="testMan" width="30%">
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
  <el-dialog title="修改密码" v-model="changeWord" width="30%">
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
import { defineComponent, ref } from "vue";
import { testTrue, changePass } from "@/hooks/managePassWord";
import { ElMessage } from "element-plus";
import { useCookies } from "@vueuse/integrations";
import { useStore } from "vuex";
import router from "@/router";
export default defineComponent({
  name: "passwordchange",
  props: ["title", "which"],
  setup(props) {
    const cookie = useCookies();
    // cookie.remove('user')
    // console.log(props.title);
    const testMan = ref(false);
    const changeWord = ref(false);
    const store = useStore();
    const form = {
      name: "",
      tele: "",
      email: "",
    };
    const f = ref(form);
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
      } else if (value !== passf.value['pass']) {
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

    const postChangePassWord = () => {
      if (f.value["name"] != "") {
        const res = changePass(
          store.state.ChangePassApi,
          passf.value["checkPass"],
          f.value["name"]
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
      } else {
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