<template>
  <div>
    <b-container class="bg-proyecto" >
      <b-row sm="12" md="12" lg="6">
            <b-carousel class="carousel-width d-none d-sm-none d-md-block"
              id="carousel-1"
              v-model="slide"
              :interval="3000"
              controls
              indicators
              img-width="350"
              img-height="300"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
   
              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up1.png')">   
              </b-carousel-slide>

              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up2.png')">   
              </b-carousel-slide>

              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up3.png')">   
              </b-carousel-slide>

              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up4.png')">   
              </b-carousel-slide>

              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up5.png')">   
              </b-carousel-slide>

              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up6.png')">   
              </b-carousel-slide>

              <b-carousel-slide  :img-src="require('../assets/img/carousel/mock-up7.png')">   
              </b-carousel-slide>
            </b-carousel>
        </b-row>

        <b-row class="box-proyectos m-4" sm="12" md="12" lg="6">
            
          <p> Soy diseñadora UX/UI con experiencia en la creación de productos digitales además de contar con experiencia administrativa/comercial. Cómo UI mi herramienta favorita es Figma y dar estilos en CSS/SASS y como UX me interesa trabajar en base a la accesibilidad y usabilidad web.
          <br>
          <br>						
          Entre mis objetivos profesionales quiero seguir perfeccionándome y comprender más la interactividad de componentes motivo por el que estudié VUE.JS y sigo aprendiendo Front-end.
          <br>
            <br>
          <strong> ¡Te invito a revisar mi portafolio!</strong> 
            </p>
          </b-row>

    </b-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
  }
</script>


<style>


.bg-proyecto{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
}

.carousel-width{
  display: flex;
  width: 550px !important;
  margin: auto;
}



.box-proyectos{
  padding: 40 40px 0 40;
  color: #212529;

}



</style>