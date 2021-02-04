<template>
  <div class="head_back">
      欢迎 {{name}}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {useStore} from "vuex"
export default defineComponent({
    name:"headPart",
    setup(){
        const store = useStore();
        const name =store.state.username;
        return {name}
    }
})
</script>

<style lang="stylus" scoped>
.head_back
    margin auto
    height 100%
    padding-right 5%
    display flex
    justify-content flex-end
    align-items center
    font-size 20px
    color white
    text-align center
</style>