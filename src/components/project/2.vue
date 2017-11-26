<template>
    <div style="position: relative;height: 100%;">
       <div class="warp_box">

       </div>
    </div>
</template>
<style>
  .warp_box {
    background: linear-gradient(30deg, #8f4404,  #ff5e00, #8f4404, #8f4404,  #ff5e00);
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(10px);
  }
</style>
<script>
export default {
  name: 'app',
  mounted() {

  }
}
</script>
