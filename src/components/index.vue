<template>
  <div>
    <router-view></router-view>
    <div class="footer-nav">
      <div class="tab" @click="topath(item.path,i)" v-for="(item,i) in navlist" :key="item.path">
        <img v-if="num!=i" :src="item.img1" alt />
        <img v-if="num==i" :src="item.img2" alt />
        <h2 :class="[num==i ? 'tab select':'tab']">{{item.title}}</h2>
      </div>
    </div>
  </div>
</template>
<script>
// import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      num: -1,
      navlist: [
        {
          path: "/home",
          title: "首页",
          img1: require("../assets/images/tab_home_nor.png"),
          img2: require("../assets/images/tab_home_hig.png")
        },
        {
          path: "/classafy",
          title: "分类",
          img1: require("../assets/images/tab_menu_nor.png"),
          img2: require("../assets/images/tab_menu_hig.png")
        },
        {
          path: "/shoppingcar",
          title: "购物车",
          img1: require("../assets/images/tab_shopping_nor.png"),
          img2: require("../assets/images/tab_shopping_hig.png")
        },
        {
          path: "/mine",
          title: "个人中心",
          img1: require("../assets/images/tab_me_nor.png"),
          img2: require("../assets/images/tab_me_hig.png")
        }
      ]
    };
  },
  props:[],
  methods: {
    //点击跳转不同页面
    topath(path, i) {
      this.$router.push(path);
      this.num = i;
    }
  },
  mounted() {
    // if(this.$router.path==)
    this.navlist.map((item, index) => {
      if (this.$route.path == item.path) {
        this.num = index;
      }
    });
  },
  updated() {
    this.navlist.map((item, index) => {
      if (this.$route.path == item.path) {
        this.num = index;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.footer-nav {
  text-align: center;
  width: 100%;
  height: 1.01rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-top: 0.2rem;
  .tab {
    img {
      height: 0.42rem;
    }
    h2 {
      font-size: 0.24rem;
      line-height: 0.46rem;
      color: #333;
    }
    .select {
      color: orange;
    }
  }
}
</style>