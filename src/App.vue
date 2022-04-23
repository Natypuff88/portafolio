
<template>
  <div id="app" class="fondo">
    <Navbar/>
    <Inicio/>
  </div>
</template>

<script>
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
