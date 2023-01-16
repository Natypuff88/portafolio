<template>
  <div>
    <b-container>
      <b-row class="d-flex align-content-center"> 

        <b-col class="card_inicio" sm="12" md="12" lg="6"> 

            <h1 class="titulo1"> ¡Hola Soy Natalia!</h1>

            <h3 class="skills"> Soy UX Designer y mi super poder es crear plataformas amigables para todos 
            </h3>

            <i class="fa fa-heart corazon-dos"></i>

        </b-col>

        <b-col class="d-flex justify-content-end"> 
        <img class="naty-coneja" src="../assets/img/fotoinstanatyPNG.png">

        </b-col>
      </b-row>  

    </b-container>
    
    <ProyectoUno/>
    <Footer/>

  </div>
</template>

<script>

import ProyectoUno from '../components/ProyectoUno.vue'
import Footer from '../components/Footer.vue'

  export default {
    name: "Inicio",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    components: {
    ProyectoUno,
    Footer,
  },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>

.card_inicio{
    margin-top: 6.25rem;
    margin-left: 6.25rem;
    padding: 1.875rem;
    width: 50%;
    height: 50%;
    background: #FAFAFA;
    box-shadow: 0px 5px 20px #F5AAB6;
    border-radius: 30px;
}


.carrousel-box{
    width: 70%!important;
    height: auto;
}

.popover{
  background-color: #fafafa!important;
  box-shadow: 0px 5px 20px #F5AAB6!important;
  border: 0px !important;
}


.img-naty{
  width: 100px;
  height: auto;
    :hover{
    background-color: #fafafa;
    border-color: #fafafa;
  }
    :focus{
    background-color: #fafafa;
    border-color: #fafafa;
  }
   :active{
    background-color: #fafafa;
    border-color: #fafafa;
  }
}

.skills{
  display: inline;
  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 21px;
  padding-top: 10px;
  color: #1B0907;
}

.naty-coneja{
  height: 400px;
  width: auto;
  top: -50px;
}

.corazon-dos{
    display: inline;
    color: #1B0907;
    font-size: 15px;
    margin: 10px;
}


</style>