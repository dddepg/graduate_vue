<template>
  <div class="backarea">
    <el-carousel  trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <research-trend />
    <newly-research />
    <friendly-link />
    <div class="buttonback"></div>
  </div>
</template>

<script>
import NewlyResearch from "@/components/UserPage/newlyResearch.vue";
import { defineComponent } from "vue";
import friendlyLink from "../../components/UserPage/friendlyLink";
import researchTrend from "../../components/UserPage/researchTrend";
export default defineComponent({
  name: "FirstPage",
  components: {
    friendlyLink,
    researchTrend,
    NewlyResearch,
  },
});
</script>
<style lang="stylus" scoped>
.backarea
  height 100%

.el-carousel--horizontal
  height 45%

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