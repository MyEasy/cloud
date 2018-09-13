<template>
  <div id="app">
    <my-header></my-header>
    <!-- <img src="./assets/logo.png"> -->
    <my-sidebar></my-sidebar>
    <router-view/>
  </div>
</template>

<script>
import myHeader from './components/header'
import mySidebar from './components/sidebar'
export default {
  name: 'App',
  components: {myHeader, mySidebar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
