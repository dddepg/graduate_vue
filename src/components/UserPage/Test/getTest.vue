<template>
  <div>
    {{result['result']}}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import { getLinks } from "@/hooks/getLinks";
import { useStore } from "vuex";
// import { ElLoading } from "element-plus";
import axios from 'axios';
import qs from "qs";
export default defineComponent({
  name: "getTest",
  async setup() {
    const store = useStore();
    const result = ref()
    // const loadingInstance = ElLoading.service({
    //   lock: false,
    //   text: "Loading",
    //   spinner: "el-icon-loading",
    //   background: "rgba(0, 0, 0, 0.7)",
    // });
    const url=store.state.testApi
    const data={id: store.state.userid}
    result.value = await await axios({
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "post",
          url: url,
          data: qs.stringify(data),
        })
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return "error";
        });
   
    return {
      result,
    };
  },
});
</script>
<style lang="stylus" scoped>
.div
  height 80px
</style>
