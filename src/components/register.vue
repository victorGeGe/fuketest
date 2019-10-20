<template>
  <div>
    <!-- 头部，返回，注册，登录切换区 -->
    <div class="header">
      <div class="header_content">
        <span @click="$router.go(-1)" class="iconfont icon2fanhui"></span>
        <span class="regis">注册</span>
        <span class="login">登录</span>
      </div>
    </div>
    <!-- 主体内容区 -->
    <div class="content">
      <div class="nickname content_items">
        <p>昵 &nbsp;&nbsp;称:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style="color:red">{{nickname.msg}}</span>
        </p>
        <input type="text" v-model="nickname.val" />
      </div>
      <div class="telephone content_items">
        <p>
          手机号: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style="color:red">{{phone.telmsg}}</span>
        </p>
        <input type="text" v-model="phone.tel" @blur="telblur" />
      </div>
      <div class="password content_items">
        <p>密&nbsp;&nbsp; 码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style="color:red">{{password.msg}}</span>
        </p>
        <input type="password" v-model="password.val" @blur="passblur"/>
      </div>
      <div class="idcode content_items">
        <p>
          验证码:
          <span @click="getCode" v-if="code.show">点击获取</span>
          <span v-if="code.count">{{code.count}} S</span>
        </p>
        <input type="text" />
      </div>
      <div class="button">
        <button @click="nextStep">下一步</button>
      </div>
      <div class="readfile">
        <input type="checkbox" />
        <span>我已阅读并同意使用条款和隐私政策</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //验证码
      code: {
        show: true,
        count: "",
        timer: null
      },
      //昵称
      nickname:{
        val:'',
        msg:''
      },
      //手机号
      phone: {
        tel: "",
        telmsg: ""
      },
      //密码
      password:{
        val:'',
        msg:''
      }

    };
  },
  methods: {
    //失去焦点看手机号是否合规
    telblur() {
      if (!/^1[3456789]\d{9}$/.test(this.phone.tel)) {
        this.phone.telmsg = "请输入正确手机号";
      } else {
        this.phone.telmsg = "";
      }
    },
    //失去焦点看密码是否合规
    passblur(){
      if(!/^(\w){6,20}$/.test(this.password.val)){
        this.password.msg = '以字母开头数字下划线6-20位'
      }else{
        this.password.msg = '';
      }
    },
    //点击获取验证码，并进入倒计时
    getCode() {
      if (!/^1[3456789]\d{9}$/.test(this.phone.tel)) {
        this.phone.telmsg = "请输入正确手机号";
      } else {
        this.phone.telmsg = "";
        const TIME_COUNT = 60;
        if (!this.code.timer) {
          this.code.count = TIME_COUNT;
          this.code.show = false;
          this.code.timer = setInterval(() => {
            if (this.code.count > 0 && this.code.count <= TIME_COUNT) {
              this.code.count--;
            } else {
              this.code.show = true;
              clearInterval(this.code.timer);
              this.code.timer = null;
            }
          }, 1000);
        }
        this.$axios({
          url: "http://localhost:3000/captcha/sent",
          params: {
            phone: this.phone.tel
          }
        }).then(res => {
          console.log(res);
        });
      }
    },
    //点击下一步进行验证码验证，成功进行注册，失败注册不成功
    nextStep(){
      
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 1.42rem;
  background: #ff9900;
  .header_content {
    font: 0.4rem/0.92rem "微软雅黑";
    color: #fff;
    padding-top: 0.49rem;
    padding-left: 0.34rem;
    box-sizing: border-box;
    .regis {
      margin-left: 2.5rem;
    }
    .login {
      margin-left: 2.1rem;
    }
  }
}
.content {
  width: 100%;
  padding-top: 1.19rem;
  box-sizing: border-box;
  .content_items {
    margin-left:.75rem;
    width: 6rem;
    height: 1.27rem;
    border-bottom: 1px solid #8f8f8f;
    padding-top: 0.13rem;
    box-sizing: border-box;
    p {
      font-size: 0.32rem;
      color: #333333;
    }
    input {
      font-size: 0.32rem;
      color: #333;
      margin-top: 0.15rem;
      border: none;
      outline: none;
      width: 6rem;
    }
  }
  .idcode {
    margin-left:.75rem;
    span {
      width: 1.25rem;
      height: 0.32rem;
      border: none;
      font-size: 0.32rem;
      line-height: 0.32rem;
      color: #fe2654;
      &:nth-child(1) {
        margin-left: 3.4rem;
      }
    }
  }
  .button {
    margin-left:.75rem;
    button {
      width: 6rem;
      height: 1rem;
      background: #ff9900;
      text-align: center;
      font: 0.32rem/1rem "微软雅黑";
      border: none;
      color: #fff;
      border-radius: 0.1rem;
      margin-top: 0.48rem;
    }
  }
  .readfile {
    margin-left:.75rem;
    height: 0.31rem;
    margin-top: 0.5rem;
    input {
      width: 0.31rem;
      height: 0.31rem;
    }
    span {
      font: 0.3rem/1 "微软雅黑";
      color: #666666;
      margin-left: 0.2rem;
      vertical-align: middle;
    }
  }
}
</style>