<template>
  <div class="sc-header">
    <div class="sc-header-left">
      <i class="iconfont icon-yunguantubiao-yuanjiao_aliyun sc-header-icon"></i>
    </div>
    <div class="sc-header-left2 sc-header-padding">
      <span class="sc-header-fontsize">管理控制台</span>
    </div>
    <div class="sc-header-right1 sc-header-padding">
      <i class="el-icon-search"></i>
      <input class="sc-header-search" type="text" placeholder="搜索">
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  *{
    color: #ffffff;
  }
  .sc-header{
    height: 50px;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    background-color: #252a2f;
  }
  .sc-header-left{
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .sc-header-icon{
    color: #ffffff;
  }
  .sc-header-left2{
    float: left;
    height: 50px;
    line-height: 50px;
  }
  .sc-header-fontsize{
    font-size: 14px
  }
  .sc-header-padding{
    padding: 0 12px;
  }
  .sc-header-right1{
    float: right;
    height: 50px;
    width: 200px;
    line-height: 50px;
  }
  .sc-header-search{
    background-color: #404448;
    outline: none;
    border: 0px;
    height: 26px;
    padding-left: 0px;
  }
</style>
