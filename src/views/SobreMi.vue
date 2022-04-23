<template>
    <div>
      <b-container class="mt-5">
          <b-row class="d-flex justify-content-center text-center">
                <b-col  sm="12" md="12" lg="12">

                      <div class="box-img-naty">
      
                      <div class="photo_natysvg position-absolute"> 
                         <b-img 
                          :src="require('../assets/img/IMG_SOBRE_MI/sms.svg')"
                          class="phone"
                          > </b-img>

                      <b-img 
                          rounded="circle" alt="Circle image"
                          :src="require('../assets/img/foto_naty.jpg')"

                          class="fotonaty"
                          >
                      </b-img>
                      </div>
                      </div>
                </b-col>        
          </b-row>


          <b-row class="mt-5 justisfy-content-center"> 
              <CardSobreMi/>
          </b-row>


          <b-row class="mt-5 d-flex justify-content-center m-auto"> 
             <BoxHabilidades/>
          </b-row>

      </b-container>
    </div>
</template>

<script>

import BoxHabilidades from './../components/BoxHabilidades.vue';

import CardSobreMi from './../components/CardSobreMi.vue';

export default {
  name: 'Sobremi',
  components: {
    CardSobreMi,
    BoxHabilidades,
  },
      data() {
      return {
      }
    },

    
}
</script>

<style scoped>

html{
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
}

.phone {
  z-index: 3;
  float: middle;
  animation: move 6s ease-in infinite;
  animation-fill-mode: both;
}

.box-img-naty{
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}



@keyframes move {
  0% {
    transform: translate(0px, 0);
  }
  50% {
    transform: translate(50px, 0);
  }
  100% {
    transform: translate(0px, 0);
  }
}


</style>