<template>
  <div class="research_title_word_s ">
    <h1 class="research_title_word_keyan hidden-md-and-up">{{titles.pcTitle}}</h1>
  </div>
  <div class="research_backarea">
    <el-row type="flex" justify="space-between" class="research_row">
      <el-col :span="4" class="research_title hidden-sm-only">
        <div class="research_title_word hidden-sm-only">
          <h1 class="research_title_word_keyan">{{titles.mobileTitle1}}</h1>
        </div>
        <div class="research_title_word hidden-sm-only">
          <h1 class="research_title_word_xianzhuang">{{titles.mobileTitle2}}</h1>
        </div>
      </el-col>
      <el-col :xs="24" :md="20" :lg="20" :xl="20" :sm="24">
        <Suspense>
          <template #default>
            <get-first-page-news :type="titles.pcTitle" />
          </template>
          <template #fallback>
            <el-skeleton animated />
          </template>
        </Suspense>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import "element-plus/lib/theme-chalk/display.css";
import GetFirstPageNews from "./getFirstPageNews/getFirstPageNews.vue";
export default defineComponent({
  props: ["type"],
  name: "FirstPageNews",
  components: {
    GetFirstPageNews
  },
  setup(props){
    const titles={
      pcTitle:props.type,
      mobileTitle1:props.type[0]+props.type[1],
      mobileTitle2:props.type[2]+props.type[3],
    }
    return {
      titles,
    }
  }
});
</script>

<style lang="stylus" scoped>
.research_row, .research_title
  height 100%

.research_backarea
  margin-top 0
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

.research_title_word_s
  width 100%
  font-weight bold
  font-size 20px
  padding auto 0
  padding 0
  margin-top 20px
  margin-bottom 0
  text-align center
  letter-spacing 5px
  display flex
  align-items center
  justify-content center
  color white
</style>