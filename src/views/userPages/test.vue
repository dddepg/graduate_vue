<template>
  <div class="tread_back_area">
    <Suspense>
      <template #default>
        <get-test />
      </template>
      <template #fallback>
        <el-skeleton animated />
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import getTest from "@/components/UserPage/Test/getTest.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { getTest },
  name: "test",
});
</script>
<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  overflow-y auto
</style>