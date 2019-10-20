import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import index from '@/components/index'
//注册页面
import register from '@/components/register'
//商品详情页面
import detail from '@/components/detail'


//二级路由
import home from '@/components/pages/home'
import classafy from '@/components/pages/classafy'
import mine from '@/components/pages/mine'
import shoppingcar from '@/components/pages/shoppingcar'

// import buyer from '@/components/pages/buyer'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: index,
      children: [{
          path: '/home',
          component: home
        },
        {
          path: '/classafy',
          component: classafy
        },
        {
          path: '/mine',
          component: mine
        },
        {
          path: '/shoppingcar',
          component: shoppingcar
        },
        {
          path:'*',
          redirect:'/home'
        }
      ]
    },
    {
      path: '/detail',
      component: detail,
    },
    {
      path:'/register',
      component:register
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
