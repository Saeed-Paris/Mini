<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/barname">barname</router-link>|
      <router-link to="/dooz">dooz</router-link>
    </nav>
    <router-view/>
  </div>
 </template>
<!-- //  <script>
// // Require dependencies
// var Vue = require('vue');
// var VueCookie = require('vue-cookie');
// // Tell Vue to use the plugin
// Vue.use(VueCookie);
// export default {
  
// }
// </script> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
