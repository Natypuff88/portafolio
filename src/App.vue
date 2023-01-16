

<template>
  <div id="app" class="fondo">
    <Navbar/>
  </div>
</template>

<script>
//import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar,
  }
}


</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css";

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
  height: 100vh;
  
}

.fondo{
  background-color: #fafafa;
}


</style>
