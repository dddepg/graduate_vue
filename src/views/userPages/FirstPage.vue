<template>
  <div class="backarea">
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="scientific-research-trends"></div>
    <div class="newly-research"></div>
    <div class="friendly-link"></div>
    <div class="buttonback"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name:"FirstPage"
})
</script>
<style lang="stylus" scoped>
.backarea
  height 100%
.el-carousel--horizontal
  height 45%
.scientific-research-trends
.newly-research
  margin-top 20px
  height 25%
  background-color rgb(255,255,255)
.friendly-link
  margin-top 20px
  background-color rgb(255,255,255)
  height 30%
.buttonback
  height 5%
  background-color background-color rgb(75,72,72)
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  
</style>