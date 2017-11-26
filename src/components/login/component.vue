<template>
  <transition name="login-fade">
    <div class="login" >
      <div class="login_blur"></div>
      <div class="login_warp">
        <div class="login_box">
          <div style="font-size: 12px;color: white">后台系统</div>
          <h1 style="color: white;margin:0px 0px 10px 0px">Background System</h1>
          <div class="login_content">
            <div style="width: 100px; height: 100px; text-align: center; line-height: 130px; border: 1px solid gainsboro; border-radius: 50%; margin: 20px auto;">
              <Icon style="font-size: 60px" type="person"></Icon>
            </div>
            <Form :model="form" :label-width="60">
              <FormItem label="用户名:">
                <Input v-model="form.username" placeholder="请输入您的用户名" />
              </FormItem>
              <FormItem label="密码:">
                <Input type="password" v-model="form.password" placeholder="请输入您的密码" />
              </FormItem>
            </Form>
            <div style="text-align: center;margin: 20px 0px">
              <Button @click="submit" long type="success">登录</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'app',
  data (){
    return {
      form: {}
    }
  },
  methods: {
    submit() {
      this.$router.push("/project");
    }
  }
}
</script>
<style >
  body,html{
    padding: 0px;
    margin: 0px;
  }
  .login {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .login_blur {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url("../../assets/img/bg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(2px);
  }
  .login_warp {
    background:rgba(0,0,0,0.5);
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .login_box {
    max-width: 350px;
    margin: 0px auto;
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    animation: login ease-out 1s;
    animation-fill-mode: forwards;
  }
  .login_content {
    background: white;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px rgba(255,255,255,0.5)
  }
  @keyframes login {
    0%{
      top: 0px;
    }
    50%{
      top: 200px;
    }
    80% {
      top: 190px;
    }
    100% {
      top: 200px;
    }
  }
</style>
