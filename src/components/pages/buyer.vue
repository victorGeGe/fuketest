<template>
  <div>
    <div class="koubei">
      <div class="koubei_top">
        <div class="kongbai"></div>
        <div class="checkone">
          <span>商品详情</span>
          <span>买家口碑</span>
        </div>
      </div>
      <div class="pinglun">
        <div class="pinglun_top">
          <span @click="active(i)" :class="[val==i?'active':'']" v-for="(item,i) in arr" :key="i">{{item}}</span>
        </div>
        <div class="pinglun_items">
            <ul>
                <li v-for="(item,i) in list" :key="i">
                    <div class="pinglun_item">
                        <div class="pinglun_author clearfix">
                            <h3 class="fl">{{item.buyerName}}</h3>
                            <span class="fr">{{parseInt(item.createTime) | tonum}}</span>
                        </div>
                        <div class="item_pic">
                            <img v-for="(item,i) in item.postImg" :key="i" :src="item" alt="">
                        </div>
                        <p class="pintlun_content">{{item.postDescribe}}</p>
                        <p class="pinglun_huifu">管理员:{{item.adminReviews}}</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        //页面加载接收到的商品参数
      msg: "",
      arr:['全部评价','好评','差评','晒单'],
      val:0,
      //点击不同的模块渲染不同的数据
      list:[]
    }
  },
  methods: {
      active(i){
          this.val = i
          console.log(this.msg ,'this.msg');
          switch(i){
              case 1 :this.list = this.msg.good;
              break;
              case 2 :this.list = this.msg.bad;
              break;
              case 1 :this.list = this.msg.postForm;
              break;
              default: this.list = this.msg.all;
          }
      }
  },
  props: ["message"],
  mounted() {
    this.msg = this.message.buyerReviews;
    this.list = this.msg.good;
  }
};
</script>
<style lang="less" scpoed>
.koubei {
  width: 100%;
    margin-bottom:1.2rem;
  .koubei_top {
    .kongbai {
      width: 100%;
      height: 0.3rem;
      border-top: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
    }
    .checkone {
      height: 0.68rem;
      border-bottom: 1px solid #dddddd;
      span {
        display: inline-block;
        width: 1.5rem;
        height: 0.45rem;
        letter-spacing: 0.03rem;
        font: 0.26rem/0.45rem "微软雅黑";
        margin-top: 0.12rem;
        color: #999999;
        text-align: center;
        &:nth-child(1) {
          margin-left: 1.12rem;
        }
        &:nth-child(2) {
          margin-left: 2.24rem;
          border-bottom: 0.03rem solid #ff9900;
        }
      }
    }
  }
  //评论区
  .pinglun{
      .pinglun_top{
          width:6.9rem;
          height:.7rem;
          border-bottom:1px solid #dddddd;
          display:flex;
          justify-content: space-around;
          align-items:center;
          margin-left:0.3rem;
          span{
              display:inline-block;
              width:1.35rem;
              height:.5rem;
              background:#999999;
              color:#fff;
              border-radius:.25rem;
              text-align:center;
              line-height:.5rem;
          }
          .active{
              background:#ff9900
          }
      } 
      .pinglun_items{
          li{
              width:100%;
              border-bottom:.01rem solid #999;
              .pinglun_item{
                  width:100%;
                  padding:0 .3rem;
                  box-sizing: border-box;
                  //评论作者那栏
                  .pinglun_author{
                      width:100%;
                      height:.38rem;
                      margin-top:.12rem;
                      h3{
                          color:#ff9900;
                          font-size:.24rem;
                          line-height:.38rem;
                          margin-left:.03rem;
                      }
                      span{
                          font:.18rem;
                          line-height:.38rem;
                          color:#999;
                      }
                  }
                  //图片那栏
                  .item_pic{
                      width:100%;
                      height:1.63rem;
                      overflow: hidden;
                      padding-top:.12rem;
                      img{
                          width:1.51rem;
                          height:1.51rem;
                          margin-right:.1rem;
                      }
                  }
                  //评论内容
                  .pintlun_content{
                      font:.2rem/.38rem '微软雅黑';
                      color:#999;
                  }
                  .pinglun_huifu{
                      background:#dddddd;
                      color:#bfbfbf;
                      font:.18rem/.26rem '微软雅黑';
                      padding:.12rem .1rem;
                      margin-bottom:.18rem;
                      margin-top:.02rem;
                      border-radius:.12rem;
                  }
              }
          }
      }
  }
}
</style>