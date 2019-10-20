<template>
  <div class="minebg">
    <div class="header">
      <div class="header_top">
        <span class="iconfont iconchilun"></span>
        <span>个人中心</span>
        <span class="iconfont iconmessage"></span>
      </div>
      <div class="login">
        <div class="bgbox">
          <div class="touxiang">
            <img src alt />
          </div>
        </div>
        <p @click="tologin">点击登录</p>
      </div>
    </div>
    <div class="shoucang">
      <div class="mycollect">
        <span class="iconfont iconxin"></span>我的收藏
        <b></b>
      </div>
    </div>
    <div class="order">
        <div class="myorder">
            <span>我的订单</span>
            <i>查看全部订单</i>
        </div>
        <div class='item_detail'>
            <div class="items">
                <span class="iconfont iconqianbao"></span>
                <p>待付款</p>
                <div class="const"></div>
            </div>
            <div class="items">
                <span class="iconfont icondaifahuo"></span>
                <p>待发货</p>
                <div class="const">1</div>
            </div>
            <div class="items">
                <span class="iconfont icondaishouhuo"></span>
                <p>待收货</p>
                <div class="const">2</div>
            </div>
            <div class="items">
                <span class="iconfont icondaipingjia01"></span>
                <p>待评价</p>
                <div class="const">3</div>
            </div>
            <div class="items">
                <span class="iconfont icontuikuan"></span>
                <p>退款/售后</p>
                <div class="const"></div>
            </div>
        </div>
    </div>
    <div class="adress">
        <span>收货地址管理</span>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    tologin(){
      this.$router.push('/register')
    }
  }
};
</script>
<style lang="less" scoped>
.minebg {
  background: #f3f3f3;
  height:13.34rem;
}
.header {
  height: 3.7rem;
  width: 100%;
  background: #ff9900;
  position: relative;
  .header_top {
    font-size: 0.42rem;
    line-height: 0.42rem;
    color: #fff;
    height: 0.51rem;
    padding-top: 0.72rem;
    padding-left: 0.29rem;
    span {
      font-size: 0.42rem;
      &:nth-child(2) {
        margin-left: 2.1rem;
      }
      &:nth-child(3) {
        margin-left: 1.95rem;
      }
    }
  }
  //登录
  .login {
    width: 2.08rem;
    position: absolute;
    left: 2.7rem;
    top: 2.36rem;
    .bgbox {
      width: 2.08rem;
      height: 2.08rem;
      border-radius: 50%;
      background: #fff;
      position: relative;
      .touxiang {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background: #e6dfdf;
        position: absolute;
        top: 0.14rem;
        left: 0.13rem;
      }
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 0.32rem;
      color: #333;
      margin-top: 0.2rem;
    }
  }
}
//收藏
.shoucang{
    height:2.6rem;
    background:#fff;
    padding-top:1.8rem;
    box-sizing: border-box;
    .mycollect{
        font-size:.34rem;
        color:#333;
        padding-left:.35rem;
        span{
            margin-right:.24rem;
            color:#ee6b68;
        }
    }
}
//我的订单
.order{
    height:3.12rem;
    background:#fff;
    margin-top:.15rem;
    .myorder{
        height:1.22rem;
        border-bottom:1px solid #efeeee;
        font:.34rem/1.22rem '微软雅黑';
        span{
            color:#333333;
            margin-left:.46rem;
        }
        i{
            color:#999999;
            float:right;
            margin-right:.2rem;
        }
    }
    .item_detail{
        height:1.9rem;
        display:flex;
        justify-content: space-around;
        .items{
            width:1.5rem;
            display:flex;
            flex-direction:column;
            align-items:center;
            position:relative;
            span{
                font-size:.48rem;
                margin-top:.45rem;
                color:#aaaaaa;
                font-weight:400;
            }
            p{
                font-size:.24rem;
                color:#666;
            }
            .const{
                width:.38rem;
                height:.38rem;
                background:#ff0000;
                border-radius:50%;
                position:absolute;
                right:.35rem;
                top:.38rem;
                font-size:.16rem;
                color:#e6dfdf;
                line-height:.38rem;
                text-align:center;
            }
        }
    }
}
//收货地址
.adress{
    height:1.3rem;
    background:#fff;
    margin-top:.15rem;
    margin-bottom:2.34rem;
    span{
        font:.34rem;
        color:#999;
        line-height:1.3rem;
        margin-left:.45rem;
    }

}
</style>