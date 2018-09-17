<template>
  <div class="sc-sidebar-div">
    <div class="sc-sidebar-div-child" :class="{active: isClickShowLeft}" @mouseout="isHiddenLeft">
      <div class="sc-sidebar-div-product">
        <div class="sc-sidebar-wrapper" @click="isShowProduct">
          <span class="sc-sidebar-span">
            <i class="iconfont icon-jiugongge sc-sidebar-i"></i>
          </span>
          <span class="sc-sidebar-span-width">产品与服务</span>
          <span class="sc-sidebar-icons-arrow">
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
      </div>
      <ul class="sc-sidebar-ul">
        <li class="sc-sidebar-li" v-for="(item, index) in sideBarList" :key="index" @click="myFocus(index, item)" :class="{active: index === selectItem}">
          <span class="sc-sidebar-span">
            <i :class="item.icon" class="sc-sidebar-icon-size"></i>
          </span>
          <span class="sc-sidebar-span-width">{{item.title}}</span>
          <!-- <span class="sc-sidebar-icons-arrow">
            <i class="el-icon-arrow-right"></i>
          </span> -->
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="sc-sidebar-product" v-show="isShow"></div>
    </transition>
  </div>
</template>
<script>
import sideBarList from '../../static/json/sidebar'
export default {
  data () {
    return {
      sideBarList: sideBarList,
      selectItem: -1,
      isShow: false,
      isClickShowLeft: false
    }
  },
  mounted () {
    this.onRouterEnter()
  },
  methods: {
    myFocus (index, item) {
      this.selectItem = index
      this.$router.push({name: item.link})
    },
    onRouterEnter () {
      let sPath = this.$route.name
      for (let i = 0; i < sideBarList.length; i++) {
        if (sideBarList[i].name === sPath) {
          this.selectItem = i
          return
        }
      }
    },
    isShowProduct () {
      this.isClickShowLeft = true
      this.isShow = !this.isShow
    },
    isHiddenLeft () {
      if (!this.isShow) {
        this.isClickShowLeft = false
      }
    }
  }
}
</script>
<style scoped>
  .sc-sidebar-div{
    width: 50px;
    height: 100%;
    left: 0;
    top: 50px;
    position: fixed;
    background-color:  #252a2f;
    z-index: 999;
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
    width: 230px;
  }
  .sc-sidebar-div-child.active{
    width: 230px;
  }
  .sc-sidebar-div-product{
    border-top: 1px solid hsla(0,0%,100%,.1);
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    width: 100%;
    height: 50px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
    padding: 4px 0;
    box-sizing: border-box;
  }
  .sc-sidebar-i{
    font-size: 16px;
  }
  .sc-sidebar-span{
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    /* font-size: 16px; */
  }
  .sc-sidebar-wrapper{
    line-height: 40px;
    height: 40px;
    font-size: 0;
    cursor: pointer;
  }
  .sc-sidebar-wrapper:hover{
    background-color: #00c1de;
  }
  .sc-sidebar-span-width{
    color: #fff;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  .sc-sidebar-icons-arrow{
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    color: hsla(0,0%,100%,.65);
    margin-left: -50px;
    font-size: 12px;
  }
  .sc-sidebar-ul{
    height: calc(100% - 48px);
    width: calc(100% + 17px);
    overflow-y: auto;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .sc-sidebar-li{
    list-style: none;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    -webkit-transition: all .2s ease-out 0s;
    transition: all .2s ease-out 0s;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 0;
    float: left;
    cursor: pointer;
  }
  .sc-sidebar-li:hover{
    background-color: #192129;
    color: #00c1de;
  }
  .sc-sidebar-li.active{
    background-color: #00c1de;
  }
  .sc-sidebar-li.active .sc-sidebar-span-width{
    color: #fff !important;
  }
  .sc-sidebar-li:hover .sc-sidebar-span-width{
    color: #00c1de;
  }
  .sc-sidebar-icon-size{
    font-size: 16px;
  }
  .sc-sidebar-product{
    position: absolute;
    left: 230px;
    width: 500px;
    background-color: #fff;
    transition: all .3s cubic-bezier(0,0,.2,1);
    z-index: 99;
    height: 100%;
    overflow: hidden;
    box-shadow: 4px 0 8px 0 rgba(0,0,0,.2);
  }
  /* .fade-enter-active, .fade-leave-active{
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  } */
  .fade-enter-active{
    transition: all .5s ease;
  }
  .fade-leave-active{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1)
  }
  .fade-enter, .fade-leave-to{
    transform: translateX(-500px);
    opacity: 0;
  }
</style>
