
<template>
  <div class="user_back">
   <Suspense>
      <template #default>
         <get-user-info/>
      </template>
      <template #fallback>
        <el-skeleton :rows="10" animated />
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import getUserInfo from "@/components/UserPage/getUserInfo/getUserInfo.vue";
export default defineComponent({
  // “我的主页——用户管理”界面
  components: { getUserInfo },
  name: "userManagePage",
});
</script>
<style lang="stylus" scoped>
.user_back
  height 100%
  background-color rgb(255, 255, 255)

.card-header
  display flex
  justify-content space-between
  align-items center

.text
  font-size 14px

.item
  margin-bottom 18px
</style>