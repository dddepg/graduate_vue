<template>
<!-- 正常状态的跑马灯 -->
  <div class="backarea">
    <el-carousel  indicator-position="none" type="card" class="hidden-xs-only largecarousel">
      <el-carousel-item >
        <div class="head_carousel head_img_1"></div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="head_carousel head_img_2"></div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="head_carousel head_img_3"></div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="head_carousel head_img_4"></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 手机端的跑马灯 -->
    <el-carousel  trigger="click" class="hidden-sm-and-up smallcarousel">
      <el-carousel-item >
        <div class="head_carousel head_img_1"></div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="head_carousel head_img_2"></div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="head_carousel head_img_3"></div>
      </el-carousel-item>
      <el-carousel-item >
        <div class="head_carousel head_img_4"></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 新闻列表 -->
    <first-page-news type="科研动态"/>
    <first-page-news type="最新研究"/>
    <friendly-link/>
    <div class="buttonback"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import 'element-plus/lib/theme-chalk/display.css';
import FirstPageNews from "@/components/UserPage/FirstPageNews.vue";
import FriendlyLink from "@/components/UserPage/friendlyLink.vue";
export default defineComponent({
  name: "FirstPage",
  components: {
    FirstPageNews,
    FriendlyLink,
  },
});
</script>
<style lang="stylus" scoped>
.backarea
  height 100%
.largecarousel
  height 45%
.smallcarousel
  height 30%
.head_carousel
  height 100%
.head_img_1
  background-image url('../../assets/1.png')
  background-size 100%, cover
.head_img_2
  background-image url('../../assets/2.jpg')
  background-size 100%, cover
.head_img_3
  background-image url('../../assets/3.jpg')
  background-size 100%, cover
.head_img_4
  background-image url('../../assets/4.png')
  background-size 100%, cover

.scientific-research-trends, .newly-research
  margin-top 20px
  height 25%
  background-color rgb(255, 255, 255)

.buttonback
  height 5%
  background-color background-color rgb(75, 72, 72)
</style>



<style>
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>