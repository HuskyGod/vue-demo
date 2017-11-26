<template>
  <div class="project">
    <div class="left_nav">
        <!--<router-link to="/project/1" >1</router-link >-->
        <!--<router-link to="/project/2" >2</router-link >-->
        <!--<router-link to="/project/3" >3</router-link >-->
        <ul>
          <li @click="push('/project/staffinfo')" :class="this.$route.path === '/project/staffinfo' ? 'avite' : ''">员工信息</li>
          <li @click="push('/project/2')" :class="this.$route.path === '/project/2' ? 'avite' : ''">页面2</li>
          <li @click="push('/project/3')" :class="this.$route.path === '/project/3' ? 'avite' : ''">页面3</li>
        </ul>
    </div>
    <div class="content">
      <div  class="handle"><span @click="push('/login')"><Icon  style="font-size: 16px;cursor:pointer" type="log-out" /></span></div>
      <div style="height: calc(100vh - 39px);overflow: auto;">
        <transition mode="out-in" name="project">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    push(url) {
      this.$router.push(url)
    }
  }
}
</script>
<style scoped>
    .md-theme-default a:not(.md-button){
      color: black;
    }
    .project {
      display: flex;
    }
    .content {
      flex:1;
      box-shadow:inset 5px 5px 5px rgba(0,0,0,0.8);
    }
    .handle{
      background: rgba(57, 57, 57, 0.92);
      text-align: right;
      width: 100%;
      padding: 10px;
      color: white;
      font-size: 10px;
    }
    .project-enter-active, .project-leave-active {
        transition: opacity .5s;
        transform-origin: left;
    }
    .project-enter, .project-leave-active {
        opacity: 0
    }
    .left_nav > ul {
      width: 200px;
      background: rgba(57, 57, 57, 0.92);
      color: #adadad;
      font-size: 14px;
      height: 100vh;
    }
    .left_nav > ul > li {
      padding: 20px;
      text-align: center;
      cursor: pointer;
    }
    .left_nav > ul > li:hover{
      background: #242424;
      color: white;
    }
    .left_nav > ul > li.avite{
      background: #242424;
      color: white;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
    }
</style>
