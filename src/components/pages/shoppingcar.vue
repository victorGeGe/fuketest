<template>
  <div>
    <div class="header_top">
      <img :src="src" alt />
      <span>购物车</span>
    </div>
    <div class="content">
      <ul>
        <li class="list" v-for="(item,i) in goods" :key="i">
          <div class="list_top">
            <img :src="item.img" alt />
            <span>{{item.adress}}</span>
          </div>
          <div class="list_main" @touchstart='deleteOne($event)'>
            <img class="check" :src="item.noSelect" alt />
            <img class="checkon" :src="item.select" alt />
            <img class="goodspic" :src="item.pic" alt />
            <div class="miaoshu">
              <p>{{item.title}}</p>
              <p class="specs">
                <i>{{item.msg}}</i>
                <span>{{item.specs}}</span>
              </p>
              <van-stepper v-model="value" />
            </div>
            <div class="del ">删除</div>
            <p class="price ">￥{{item.price}}</p>
            
          </div>
        </li>
      </ul>
      <div class="topay">
          <div class="checkAll">
              <label for="">
                  <input type="checkbox" >
                  <span></span>
                  全选
              </label>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      src: require("../../assets/images/nav_icon_back.png"),
      goods: [
        {
          img: require("../../assets/images/shop.png"),
          adress: "杭州保税仓区",
          select: require("../../assets/images/radio_hig.png"),
          noSelect: require("../../assets/images/radio_nor.png"),
          pic: require("../../assets/images/images/class_03.jpg"),
          title: "ChildLife/童年时光",
          msg: "婴幼呦呦呦呦",
          specs: "90粒装",
          price: 118
        }
      ]
    };
  },
  methods: {
      deleteOne(e){
          console.log(e)

        //   touchend
      }
  }
};
</script>
<style lang="less" scoped>
.header_top {
  width: 100%;
  height: 1.33rem;
  padding-top: 0.65rem;
  padding-left: 0.4rem;
  background: #ff9900;
  box-sizing: border-box;
  img {
    height: 0.42rem;
  }
  span {
    font: 0.42rem/1 "微软雅黑";
    color: #fff;
    margin-left: 2.5rem;
  }
}
.content {
  .list {
    height: 3.27rem;
    background-color: #fafafa;
    .list_top {
      height: 1.12rem;
      padding: 0.36rem 0 0 0.36rem;
      box-sizing: border-box;
      img {
        width: 0.37rem;
        height: 0.35rem;
        margin-right: 0.26rem;
        vertical-align: middle;
      }
      span {
        font: 0.28rem/1 "微软雅黑";
        color: #999;
      }
    }
    .list_main {
      height: 2.14rem;
      background: #ccc;
      position: relative;
        overflow: hidden;
      .check {
        width: 0.45rem;
        height: 0.43rem;
        position: absolute;
        top: 0.67rem;
        left: 0.37rem;
      }
      .checkon {
        width: 0.45rem;
        height: 0.43rem;
        position: absolute;
        top: 0.67rem;
        left: 0.37rem;
      }
      .goodspic {
        width: 1.57rem;
        height: 1.587rem;
        margin-left:1.01rem;
        margin-top:.12rem;
      }
      .miaoshu {
        display: inline-block;
        width: 3.4rem;
        height: 1.62rem;
        position: absolute;
        top:0.1rem;
        left:2.9rem;
        p{
            font-size:.3rem;
            line-height:.4rem;
            color:#333333;
            span{
                font-size:.28rem;
                color:#999;
            }
        }
        .specs{
            margin-bottom:.2rem;
            i{
                display:inline-block;
                width:1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
      }
      .price{
          width:1rem;
            font: bold .32rem/.42rem '微软雅黑';
            color:#000;
            margin-top:.7rem;
            position:absolute;
            left:6rem;
            top:.1rem;
      }
      .del{
          width:.96rem;
          height:100%;
          background:#ff9900;
          font:.32rem/2.1rem '微软雅黑';
          color:#fff;
          text-align:center;
          position:absolute;
          right:-.97rem;
          top:0;
      }
    }
  }
}
</style>