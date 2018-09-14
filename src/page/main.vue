<template>
  <div>
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
