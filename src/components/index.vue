<template>
  <transition mode="out-in" name="main">
    <router-view></router-view>
  </transition>
</template>
<style>
  .main-enter-active, .main-leave-active {
    transition: all .5s;
    transform-origin: left;
    opacity: 1;
  }
  .main-enter, .main-leave-active {
    transform: translateX(-25px);
    opacity: 0;
  }
</style>
