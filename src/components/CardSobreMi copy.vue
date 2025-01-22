<template>
    <div>
        <b-row class="mt-5 d-flex justify-content-center m-auto"> 

                <b-col  class="mt-2" sm="12" md="6" lg="4">

                    <div class="card_sobre_mi m-auto"> 
                            <h3 class="text-center skills_title"> Soft skills </h3>

                            <p class="skills_content text-center"> Me destaco por mi constancia, amabilidad y organización. Poseo habilidades para trabajar en equipo y comunicarme eficazmente con distintas áreas dentro de una compañía.

</p>

                    </div>
                
                </b-col> 

                <b-col class="mt-2" sm="12" md="6" lg="4">

                      <div class="card_sobre_mi m-auto"> 
                        <h3 class="text-center skills_title"> About coding... </h3>
                        
                        <b-row>
                        <b-col col="6"> 
                           <p class="skills_content "> 
                         Disfruto trabajar con código, incluso cuando resulta complejo. ¡La clave está en no rendirse! :D


                            </p>
                            </b-col>

                             <b-col col="6"> 
                                <img src="../assets/img/IMG_SOBRE_MI/code.svg" height="68px" width="94px"> 
                             </b-col>
                        </b-row>

                      </div>

                </b-col> 

                <b-col  class="mt-2" sm="12" md="6" lg="4">

                      <div class="card_sobre_mi m-auto"> 
                           <h3 class="text-center skills_title">Other stuff </h3>
                                <b-row>
                                    <b-col col="6"> 
                                        <p class="skills_content text-left"> 
                       Entre mis pasatiempos se encuentran dibujar, coleccionar mangas y disfrutar de videojuegos en mi Nintendo Switch.


                                        </p>
                                    </b-col>

                                    <b-col col="6"> 
                                        <img src="../assets/img/IMG_SOBRE_MI/switch.svg" height="68px" width="115px"> 
                                        </b-col>
                                    </b-row>
                      </div>
                </b-col> 
        </b-row>
    </div>

</template>

<script>

export default {

}
import '../assets/components/CardSobreMi.scss';
</script>

<style>

a:link, a:visited, a:active a:hover{
	text-decoration: none !important;
	list-style-type: none !important;
}

html{
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
}

.card_sobre_mi {
    width: 20rem;
    height: 9.375rem;
    background: #fafafa;
    box-shadow: 0px 5px 20px rgba(184, 184, 126, 1);
    border-radius: 30px;
    padding: 0.625rem;
}

</style>