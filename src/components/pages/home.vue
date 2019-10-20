<template>
  <div>
    <div class="home_header">
      <div class="header_top">
        <input type="search" placeholder="请输入商品名称" />
        <span class="search"></span>
      </div>
      <div class="banner"></div>
    </div>
    <div class="content">
      <div class="hot_today" v-for="itm in hot" :key='itm.name'>
        <div class="title">
          <img :src="hotToday" alt="">
          <h3>{{itm.name}}</h3>
        </div>
        <ul class="hot_list">
          <li v-for="(item,i) in itm.list" :key="i" @click="todetail(item.id)">
            <img :src="item.thumbnail" alt />
            <p class="goodsprice">
              <span>￥{{item.reduct_price}}</span>
              <span>￥{{item.original_price}}</span>
            </p>
            <p class="goodsmsg">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="hot_today" v-for="(item,ir) in goodslist" :key="ir">
        <div class="title">
          <img :src="titlebgpic[ir]" alt="">
          <h3>{{item.name}}</h3>
        </div>
        <ul class="hot_list">
          <li v-for="(iem,j) in item.list" :key="j" @click="todetail(iem.id)">
            <img :src="iem.thumbnail" alt />
            <p class="goodsmsg">{{iem.name}}</p>
            <p class="goodsprice">
              <span>￥{{iem.reduct_price}}</span>
              <span>￥{{iem.original_price}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import baseUrl from '../../common/js/api'
export default {
  data() {
    return {
        hotToday:require("../../assets/images/hot.png"),
        titlebgpic:[require("../../assets/images/baby.png"),require("../../assets/images/meizhuang.png"),require("../../assets/images/furniture.png"),require("../../assets/images/food.png"),require("../../assets/images/airplane.png")],
      hot: [],
      goodslist: []
    }
  },
  mounted(){
    this.$axios({
      url:baseUrl.home
    }).then(res=>{
      this.hot = res.data.data.slice(0,1)
      this.goodslist = res.data.data.slice(1)

    })
  },
  methods:{
    todetail(id){
      this.$router.push({
        path:'/detail',
        query:{
          pid:id
        }
      })
    }
  }
};
</script>
<style lang="less" scpoed>
.home_header {
  width: 100%;
  height: 5.21rem;
  .header_top {
    height: 0.75rem;
    padding-top: 0.65rem;
    padding-left: 1.17rem;
    background: url("../../assets/images/classafy.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    input {
      width: 5.14rem;
      height: 0.6rem;
      border-radius: 0.12rem;
      border: none;
      outline: none;
      font-size: 0.28rem;
      line-height: 0.6rem;
      color: 999;
      padding-left: 0.22rem;
      padding-right: 0.6rem;
      background-color: rgba(255, 255, 255, 0.7);
    }
    .search {
      width: 0.37rem;
      height: 0.39rem;
      position: absolute;
      background: url("../../assets/images/search.png") no-repeat;
      background-size: 100% 100%;
      right: 1.38rem;
      top: 0.78rem;
    }
  }
  .banner {
    height: 3.81rem;
    background: url("../../assets/images/home.jpg") no-repeat;
    background-size: 100% 3.81rem;
    margin-top: -0.02rem;
  }
}
//主内容
//今日疯抢
.content {
  width: 100%;
  background-color: #fafafa;
  margin-bottom:1.21rem;
  .hot_today {
    padding: 0 0.19rem .2rem;
    .title {
      height: 0.94rem;
      display: flex;
      font: 0.28rem/0.94rem "微软雅黑";
      img {
        display: inline-block;
        width: 0.29rem;
        height: 0.38rem;
        margin: 0.28rem 0.2rem 0 0.03rem;
      }
    }
    .hot_list {
      display: flex;
      justify-content: space-between;
      li {
        width: 3.24rem;
        height: 4.67rem;
        border: 0.01rem solid #efefef;
        background-color: #fff;
        img {
          height: 3.13rem;
          margin-top: 0.01rem;
          margin-left: 0.05rem;
        }
        .goodsmsg{
            width:2.8rem;
            padding-left:.26rem;
            height:.9rem;
            font:.28rem/.4rem 'Miscrosoft Yahei';
            color:#555555;
            overflow:hidden;
            text-overflow: ellipsis;
        }
        .goodsprice{
            font:.26rem/.50rem 'Arial';
            padding-left:.26rem;
            display:flex;
            justify-content: space-between;
            padding-right:.35rem;
        }
      }
    }
  }
}
</style>