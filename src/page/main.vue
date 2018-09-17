<template>
  <div class="sc-main-div">
    <my-header></my-header>
    <my-sidebar></my-sidebar>
    <my-content>
    </my-content>
  </div>
</template>

<script>
import myHeader from '@/components/header'
import mySidebar from '@/components/sidebar'
import myContent from '@/components/content'
export default {
  name: 'myMain',
  components: {myHeader, mySidebar, myContent}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .sc-main-div{
    height: calc(100%);
    overflow: hidden;
  }
</style>
