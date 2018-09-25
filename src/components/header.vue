<template>
  <div class="sc-header">
    <div class="sc-header-left">
      <i class="iconfont icon-yunguantubiao-yuanjiao_aliyun sc-header-icon"></i>
    </div>
    <div class="sc-header-left2 sc-header-padding">
      <span class="sc-header-fontsize">管理控制台</span>
    </div>
    <div class="sc-header-right2">
      <img class="sc-header-img" src="https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg" alt="">
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">简体中文</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in language" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right2">
      <i class="iconfont icon-gouwuche sc-header-i-buy"></i>
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">支持与服务</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in service" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">企业</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in componey" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">备案</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in record" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">工单</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in order" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">费用</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in cost" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right2">
      <el-dropdown type="primary" trigger="hover">
        <span class="sc-header-pointer">消息</span>
        <el-dropdown-menu slot="dropdown" class="sc-header-drop">
          <el-dropdown-item v-for="(item, index) in message" :key="index" class="sc-header-item">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sc-header-right1">
      <div class="sc-header-right-child" :class="{active: isActive}">
        <input id="search-input" class="sc-header-search" :class="{active: isActive}" @focus="myFocus" @blur="myBlur" type="text" placeholder="搜索">
        <i class="el-icon-search sc-header-i"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false,
      message: ['建站首选独立虚机', '9月25日ARMS价格调整通知', '云虚拟主机产品备案策略'],
      cost: ['充值', '订单', '发票'],
      order: ['我的工单', '提交工单'],
      record: ['备案专区', '备案管理', '备案服务号'],
      componey: ['资源管理', '财务管理', '人员管理', '权限管理', '分销平台'],
      service: ['帮助文档', '专家服务'],
      language: ['English']
    }
  },
  created () {},
  methods: {
    myFocus () {
      this.isActive = true
    },
    myBlur () {
      this.isActive = false
    }
  }
}
</script>
<style scoped>
  /* element ui css */
  .item {
    margin-top: 10px;
    margin-right: 40px;
    z-index: 2;
  }
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
    position: relative;
    float: right;
    height: 50px;
    width: 200px;
    margin-right: 12px;
    line-height: 50px;
  }
  .sc-header-right-child{
    float: right;
    width: 100%;
    height: 26px;
    transition: all 0.3s linear;
  }
  .sc-header-right-child:hover,
  .sc-header-right-child.active{
    width: 150%;
  }
  .sc-header-search{
    background-color: #404448;
    outline: none;
    border: 0px;
    height: 26px;
    color: #ccc;
    font-size: 12px;
    width: 100%;
    padding: 0px;
    padding-left: 5px;
  }
  .sc-header-search:focus{
    border-color: #57c5f7;
    outline: 0;
    box-shadow: 0 0 0 1px #57c5f7
  }
  .sc-header-search:hover,
  .sc-header-search.active{
    border-color: #57c5f7;
    outline: 0;
    background-color:  #252a2f;
    box-shadow: 0 0 0 1px #57c5f7
  }
  .sc-header-i{
    position: absolute;
    cursor: pointer;
    right: 0px;
    top: 18px;
  }
  .sc-header-right2{
    float: right;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding: 0 12px;
  }
  .sc-header-right2:hover{
    background-color: #192129;
  }
  .sc-header-i-buy{
    font-size: 18px;
  }
  .sc-header-img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
    border-radius: 16px;
  }
  .sc-header-pointer:hover{
    color: #00c1de;
  }
  .sc-header-pointer{
    cursor: pointer;
  }
  .sc-header-drop{
    background-color: #252a2f;
    top: 38px !important;
  }
  .sc-header-item{
    font-size: 12px;
  }
  .sc-header-item:hover{
    background-color: #252a2f;
    color: #00c1de;
  }
</style>
