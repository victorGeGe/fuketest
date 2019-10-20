<template>
  <div>
    <div class="header_top">
      <input type="search" placeholder="请输入商品名称" />
      <span class="search"></span>
    </div>
    <div class="content">
      <div class="left_nav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item @click="checkone(i)" v-for="(item,i) in navname" :key='i' :title="item.name" />
          <!-- <van-sidebar-item title="美妆护肤" />
          <van-sidebar-item title="家具生活" />
          <van-sidebar-item title="食品营养" />
          <van-sidebar-item title="全球直邮" /> -->
        </van-sidebar>
      </div>
      <div class="main_right fl">
        <ul class="goodslist">
          <li v-for="(item,i) in muying" :key="i">
            <img :src="item.thumbnail" alt />
            <div>{{item.name}}</div>
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
      activeKey: 0,
      navname:[],
      muying: [],
    };
  },
  mounted(){
    this.$axios({
      url:baseUrl.classafy
    }).then(res=>{
      console.log(res)
      this.navname = res.data.data,
      this.muying = this.navname[0].list
    })
  },
  methods:{
    checkone(i){
      this.muying = this.navname[i].list
    }
  }
};
</script>
<style lang="less" scoped>
.header_top {
  height: 0.75rem;
  padding-top: 0.6rem;
  padding-left: 1.17rem;
  background: #ff9900;
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
    top: 0.7rem;
  }
}
.content {
  .left_nav {
    width: 2.34rem;
    float: left;
    .van-sidebar {
      width: 2.34rem;
      .van-sidebar-item--select {
        border-color: #1d84a7;
        color: #ff9900;
      }
    }
  }
  .main_right {
      width:5.16rem;
      padding:.2rem .19rem 1.48rem;
      box-sizing: border-box;
    .goodslist {
      display: flex;
      flex-wrap:wrap;
      justify-content: space-between;
        li{
            width:2.24rem;
            height:2.34rem;
            border:.03rem solid #1d84a7;
            border-radius:.07rem;
            margin-bottom:.23rem;
            img{
                width:1.69rem;
                height:1.71rem;
                margin:.14rem .28rem 0;
                display:block;
            }
            div{
                height:.5rem;
                width:100%;
                background:#1d84a7;
                border-radius:0 0 .05rem .05rem;
                color:#ffffff;
                text-align:center;
                line-height:.5rem;
                font-size:.22rem;
            }
        }
    }
  }
}
</style>