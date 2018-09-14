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
    top: 50px;
    left: 250px;
    width: 100%;
    height: 1000px;
  }
</style>
