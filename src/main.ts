import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import './assets/input.css'
import '@/assets/icon/iconfont.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 在此处设置全局使用的css文件，Vue插件等
const app = createApp(App)
app.use(store).use(router).use(ElementPlus, { locale }).mount('#app')
