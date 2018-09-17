<template>
  <div class="sc-content-div">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sc-content-div{
    position: relative;
    height: calc(100% - 50px);
    margin-top: 50px;
    margin-left: 50px;
    overflow-y: auto;
    /* box-sizing: border-box */
  }
  /* .sc-content-div-child{
    position: absolute;
    top: 0;
    left: 50px;
    right: 0;
    bottom: 0;
  } */
</style>
