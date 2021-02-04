<template>
  <div class="research_backarea">
    <el-row type="flex" justify="space-between" class="research_row">
      <el-col :span="4" class="research_title">
        <div class="research_title_word">
          <h1 class="research_title_word_keyan">最新</h1>
        </div>
        <div class="research_title_word">
          <h1 class="research_title_word_xianzhuang">研究</h1>
        </div>
      </el-col>
      <el-col :span="20">
        <Suspense>
          <template #default>
            <get-newly />
          </template>
          <template #fallback>
            <el-skeleton animated/>
          </template>
        </Suspense>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GetNewly from "./NewlyResearch/getNewly.vue";
export default defineComponent({
  name: "newlyResearch",
  components: {
    GetNewly
  },
});
</script>

<style lang="stylus" scoped>
.research_row, .research_title
  height 100%

.research_backarea
  margin-top 20px
  height 25%
  background-color rgb(255, 255, 255)

.research_title_word_keyan, .research_title_word_xianzhuang
  text-align center
  margin-bottom 0
  margin-top 0

.research_title_word
  height 50%
  width 100%
  font-weight bold
  padding auto 0
  font-size 40px
  padding 0
  margin-top 0
  margin-bottom 0
  text-align center
  letter-spacing 5px
  display flex
  align-items center
  justify-content center
</style>