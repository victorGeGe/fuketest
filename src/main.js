// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入移动端单位js文件
import './assets/js/remScale'
//引入基础css初始样式
import './assets/css/base.css'
//引入icon图标css
import './assets/css/font_1385730_1ro5jxexi98/iconfont.css'

// 引入移动端框架组件 vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入 axios 
import axios from 'axios';
Vue.prototype.$axios = axios;

//引入过滤函数
import filter from './filter';
for(let i in filter){
  Vue.filter(i,filter[i])
}
//引入弹框插件sweetalert


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
