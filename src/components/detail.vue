<template>
  <div>
    <div class="goodsdetail">
      <div class="top_bg"></div>
      <div class="banner">
        <van-swipe :autoplay='3000' indicator-color="white">
          <van-swipe-item v-for="(item,i) in goodsdetail.swiperImgArr" :key="i">
            <img :src="goodsdetail.swiperImgArr[i]" alt />
          </van-swipe-item>
        </van-swipe>
        <div class="caozuo_items">
          <span class="iconfont icon2fanhui fl" @click="$router.go(-1)"></span>
          <span class="iconfont iconcaozuo-gengduo fr"></span>
          <div class="fr car">
            <span class="iconfont iconcart_icon"></span>
          </div>
        </div>
      </div>
      <div class="xiangqing">
        <div class="clearfix">
          <div class="miaoshu fl">
            <span>{{goodsdetail.name}}</span>
          </div>
          <div class="shoucang fr">
            <span class="iconfont iconshoucang"></span>
            <span></span>
            <i>收藏</i>
          </div>
        </div>
        <div class="price">
          <span>￥{{goodsdetail.reduct_price}}</span>
          <span>{{this.wance}}折</span>
          <span v-if="freeship">{{this.freeship}}</span>
        </div>
        <div class="baozhang">
          <b>￥{{goodsdetail.original_price}}</b>
          <span v-for="(item,i) in goodsdetail.describe" :key="i">{{item}}</span>
        </div>
      </div>
    </div>//组件
    <buyer v-if="goodsdetail" :message="goodsdetail"></buyer>//组件
    <div class="caozuo">
      <div class="buyselection" v-show="isshow" ref="tan">
        <div class="goodsmessage clearfix">
          <div class="goodspic fl">
            <img :src="goodssrc" alt />
          </div>
          <div class="shangpinmiaoshu fl">
            <p>￥{{goodsdetail.reduct_price}}</p>
            <p>库存{{goodsdetail.total}}件</p>
            <p>请选择商品属性</p>
          </div>
          <div class="goback fr">
            <span class="iconfont iconcancel" @click="del"></span>
          </div>
        </div>
        <div class="payconst clearfix">
          <span class="fl">购买数量</span>
          <div class="fr">
            <van-stepper v-model="value" />
          </div>
        </div>
        <div class="goods_spaces">
          <p>{{bigSmall}}</p>
          <ul>
            <li
              v-for="(item,i) in goodsspace"
              :key="i"
              :class="[active==i?'active':'']"
              @click="select(i)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="goods_age">
          <p>{{nianling}}</p>
          <ul>
            <li
              v-for="(item,i) in age "
              :key="i"
              :class="[sel==i?'active':'']"
              @click="acti(i)"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="caozuo_bot">
        <div class="allPrice fl">
          总价:
          <span>￥{{goodsdetail.reduct_price*this.value}}</span>
        </div>
        <div class="payfor fr">
          <button @click="show">加入购物车</button>
          <button @click="show">立即购买</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import baseUrl from "../common/js/api";
import buyer from "../components/pages/buyer";
export default {
  data() {
    return {
      value: 1,
      goodssrc: require("../assets/images/images/class_03.jpg"),
      //大小字段
      bigSmall: "",
      //年龄字段
      nianling: "",
      goodsspace: [],
      age: [],
      active: 0,
      sel: 0,
      isshow: true,
      goodsdetail: "",
      wance: "",
      freeship: ""
    };
  },
  components: {
    buyer
  },
  methods: {
    select(i) {
      this.active = i;
    },
    acti(i) {
      this.sel = i;
    },
    show() {
      this.$refs.tan.style.bottom = ".98rem";
    },
    del() {
      this.$refs.tan.style.bottom = "-5.1rem";
    }
  },
  mounted() {
    this.$axios({
      url: baseUrl.detail,
      params: {
        pid: this.$route.query.pid
      }
    }).then(res => {
      this.goodsdetail = res.data.data;
      console.log(this.goodsdetail, "goodsdetail");
      this.wance = String(this.goodsdetail.allowance * 10).slice(0, 3);
      this.goodssrc = this.goodsdetail.swiperImgArr[0];
      this.goodsspace = this.goodsdetail.buySelect[0].list;
      this.age = this.goodsdetail.buySelect[1].list;
      this.bigSmall = this.goodsdetail.buySelect[0].name;
      this.nianling = this.goodsdetail.buySelect[1].name;
      if (this.goodsdetail.isFreeShip) {
        this.freeship = "包邮";
      } else {
        this.freeship = false;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.goodsdetail {
  width: 100%;
  .top_bg {
    height: 0.39rem;
    background: #ff9900;
  }
  .banner {
    height: 5.43rem;
    position: relative;
    .caozuo_items {
      position: absolute;
      top: 0.06rem;
      left: 0;
      height: 0.55rem;
      width: 100%;
      span {
        width: 0.58rem;
        height: 0.58rem;
        border-radius: 50%;
        background: #b2b2b2;
        text-align:center;
        line-height:.58rem;
        font-size:.3rem;
        color:#fff;
        margin-right:.3rem;
        &:nth-child(1){
          margin-left:.3rem;
        }
      }
      .car{
        margin-right:.2rem;
        span{
          display:inline-block;
          width: 0.58rem;
          height: 0.58rem;
          border-radius: 50%;
          background: #b2b2b2;
          text-align:center;
          line-height:.58rem;
          font-size:.3rem;
          color:#fff;
        }
      }
    }
    .van-swipe-item {
      text-align: center;
      img {
        height: 5.43rem;
      }
    }
  }
  //商品描述
  .xiangqing {
    height: 2rem;
    border-top: 0.02rem solid #eeeeee;
    .miaoshu {
      width: 6.5rem;
      height: 0.75rem;
      box-sizing: border-box;
      padding-left: 0.29rem;
      display: flex;
      flex-wrap: wrap;
      font-size: 0.3rem;
      line-height: 0.35rem;
      margin-top: 0.1rem;
      span {
        margin-right: 0.22rem;
      }
    }
    //收藏
    .shoucang {
      width: 0.97rem;
      height: 0.75rem;
      border-left: 1px solid #dddddd;
      margin-top: 0.05rem;
      // text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 0.36rem;
        color: #e71f19;
        height: 0.4rem;
        margin-top: -0.1rem;
      }
      i {
        font-size: 0.16rem;
        color: #e71f19;
      }
    }
    //价格
    .price {
      height: 0.4rem;
      margin-top: 0.06rem;
      span {
        display: inline-block;
        &:nth-child(1) {
          font-size: 0.34rem;
          color: #eb2222;
          line-height: 0.38rem;
          margin-left: 0.3rem;
          margin-right: 0.2rem;
        }
        &:nth-child(2),
        &:nth-child(3) {
          width: 0.7rem;
          height: 0.3rem;
          background: #ff9900;
          margin-left: 0.2rem;
          text-align: center;
          line-height: 0.3rem;
          color: #ffffff;
        }
      }
    }
    //保障权益
    .baozhang {
      height: 0.4rem;
      b {
        font-size: 0.24rem;
        line-height: 0.4rem;
        padding-left: 0.3rem;
        color: #999999;
        margin-right: 0.6rem;
      }
      span {
        display: inline-block;
        width: 1.01rem;
        height: 0.26rem;
        border: 1px solid #ff9900;
        text-align: center;
        font-size: 0.2rem;
        line-height: 0.26rem;
        color: #ff9900;
        margin-left: 0.2rem;
      }
    }
  }
}
.caozuo {
  width: 100%;
  height: 0.98rem;
  border-top: 1px solid #dddddd;
  position: fixed;
  bottom: 0;
  left: 0;
  //选项弹窗
  .buyselection {
    width: 100%;
    height: 5.75rem;
    background: #fff;
    position: absolute;
    bottom: -5.1rem;
    left: 0;
    z-index: -10;
    transition: all 0.5s;
    //商品信息、图片
    .goodsmessage {
      height: 2.1rem;
      .goodspic {
        width: 2.02rem;
        height: 2.02rem;
        border: 0.06rem solid #dddddd;
        border-radius: 0.1rem;
        position: absolute;
        top: -0.27rem;
        left: 0.42rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .shangpinmiaoshu {
        width: 2rem;
        margin-left: 2.8rem;
        p {
          font-size: 0.25rem;
          line-height: 0.33rem;
          color: #333;
          &:nth-child(1) {
            font-size: 0.3rem;
            line-height: 0.38rem;
            color: #e71f19;
            margin-top: 0.53rem;
          }
        }
      }
      .goback {
        margin-top: 0.15rem;
        span {
          font-size: 0.56rem;
          color: #999999;
          margin-right: 0.3rem;
        }
      }
    }
    //购买数量
    .payconst {
      height: 0.51rem;
      margin-bottom: 0.3rem;
      span {
        font-size: 0.3rem;
        line-height: 0.51rem;
        color: #333;
        margin-left: 0.43rem;
      }
      div {
        margin-right: 0.4rem;
      }
    }
    //商品大小
    .goods_spaces,
    .goods_age {
      height: 1.36rem;
      padding-left: 0.44rem;
      box-sizing: border-box;
      p {
        font: 0.3rem/1 "微软雅黑";
        color: #333;
      }
      ul {
        display: flex;
        li {
          width: 1.2rem;
          height: 0.46rem;
          background-color: #dddddd;
          border-radius: 0.12rem;
          margin: 0.2rem 0.2rem 0 0;
          text-align: center;
          line-height: 0.46rem;
          color: #999999;
        }
        .active {
          background: #ff9900;
          color: #fff;
        }
      }
    }
  }
  //操作区，加入购物车，立即购买
  .caozuo_bot {
    height: 100%;
    z-index: 99;
    background: #fff;
    .allPrice {
      height: 100%;
      font-size: 0.3rem;
      line-height: 0.98rem;
      color: #666;
      margin-left: 0.3rem;
      span {
        color: #e71f19;
        margin-left: 0.32rem;
      }
    }
    .payfor {
      height: 100%;
      button {
        height: 100%;
        font-size: 0.3rem;
        line-height: 0.98rem;
        color: #fff;
        text-align: center;
        border: none;
        &:nth-child(1) {
          width: 2rem;
          background: #ff9900;
          margin-right: -0.1rem;
        }
        &:nth-child(2) {
          width: 2rem;
          background: #eb2222;
        }
      }
    }
  }
}
</style>