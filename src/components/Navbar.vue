<template>
  <div>
  <b-navbar class="bg-nav" toggleable="lg">
    <b-navbar-brand>
       <router-link :to="{name: 'Inicio'}">
             <li class="nav-item p-2">
                <a class="navbar-brand"> <img class="estrellalogo" src="../assets/img/estrellaS.svg" alt="estrellas"></a> 
              </li>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="nav-right pr-4"  is-nav>
      <b-navbar-nav>
        

        <b-nav-item class="texto-menu" >
            <router-link :to="{name: 'Sobremi'}"
            v-bind:class="{ 'currentUrlHover': getCurrentUrl() === 'sobremi'}"
          >
            Sobre mi
            </router-link>
        </b-nav-item>

        <b-nav-item class="texto-menu">
             <router-link :to="{name: 'Portafolio'}"
             v-bind:class="{ 'currentUrlHover': getCurrentUrl() === 'portafolio'}"
            >
             Portafolio
            </router-link>
        </b-nav-item>


        <b-nav-item class="texto-menu">
           <router-link :to="{name: 'Contacto'}"
           v-bind:class="{ 'currentUrlHover': getCurrentUrl() === 'contacto'}"
           >
           Contacto
            </router-link>
        </b-nav-item>
       

          
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <router-view></router-view>
</div>
  

</template>

<script>

export default {
  methods: {
    getCurrentUrl() {
      return this.$route.name.toLowerCase();
    }

  },
  
}
import '../assets/components/Navbar.scss';
</script>

<style>


.navbar-nav{
  padding-right: 3.125rem;
}

.currentUrlHover {
    font-weight: 500;
    color: #E67D8D!important;
}



.navbar-light .navbar-nav .nav-link:link {
      color: #1B0907!important;
}


.nav-link:active {
    color: #F4AAB6 !important;
    font-weight: 500;
}


</style>