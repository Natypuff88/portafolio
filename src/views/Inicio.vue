<template>
  <div>
    <b-container>
      <b-row class="d-flex justify-content-center align-content-center" sm="12" md="12" lg="12"> 

      <b-row class="card_inicio" sm="12" md="12" lg="12"> 

        <b-col class="d-flex justify-content-center m-auto" sm="12" md="12" lg="3" > 

                    <b-img 
                          rounded="circle" alt="Circle image"
                          :src="require('../assets/img/imgnataliamd.jpg')"

                          class="fotonaty"
                          >
                    </b-img>
        </b-col>

        <b-col class="p-2" sm="12" md="12" lg="9" > 
            <h1 class=" titulo1"> ¡Hola Soy Natalia!</h1>

            <h3 class="skills"> Soy UX Designer y mi super poder es crear plataformas amigables para todos.
              <br>
            Mi enfoque de diseño se basa en empatizar con las necesidades de las personas y crear experiencias que signifiquen un impacto positivo en sus vidas.
               <br>
            Para lograr estas experiencias utilizo distintas herramientas de investigación, además de testear e iterar el producto para que se cumpla este objetivo.

            </h3>

            <i class="fa fa-heart corazon-dos"></i>

        </b-col>

   
      </b-row>  
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
    margin-top: 3.25rem;
    margin-bottom: 3.25rem;
    padding: 1.875rem;
    width: 80%;
    height: auto;
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

.fotonaty{
  max-width: 90%;
  height: auto;
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