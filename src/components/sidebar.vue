<template>
  <div class="sc-sidebar-div">
    <div class="sc-sidebar-div-child">
      <div class="sc-sidebar-div-product">
        <span class="sc-sidebar-span">
          <i class="iconfont icon-jiugongge sc-sidebar-i"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  .sc-sidebar-div{
    width: 50px;
    height: 100%;
    left: 0;
    top: 50px;
    position: fixed;
    background-color:  #252a2f;
  }
  .sc-sidebar-div-child{
    overflow: hidden;
    position: absolute;
    z-index: 999;
    width: 50px;
    top: 0;
    bottom: 0;
    background-color: #252a2f;
    transition: all .3s cubic-bezier(0,0,.2,1);
  }
  .sc-sidebar-div-child:hover{
    width: 300px;
  }
  .sc-sidebar-div-product{
    border-top: 1px solid hsla(0,0%,100%,.1);
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    width: 100%;
    height: 50px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    line-height: 50px;
    float: left;
  }
  .sc-sidebar-i{
    font-size: 16px;
  }
  .sc-sidebar-span{
    width: 50px;
    height: 50px;
  }
</style>
