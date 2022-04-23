<template>
    <div  >
        <div class="box-contacto" v-if="!sent"> 
          <div class="row">
              <div class="col-12 box-contacto-texto justify-content-center">   
                  <h1 class="titulo1"> ¡Hablemos!</h1>
              </div>
              <div class="col-12 box-contacto-texto justify-content-center"> 
                <p class="subtitulo1 ">Envíame un mensaje </p>
              </div>
              <div class="col-12 box-contacto-texto justify-content-center" style="padding-bottom: 50px;"> 
                  <p class="texto-ordinario"> Tus datos personales como tu nombre y/o e-mail, no seran usados con otros fines.</p>  
              </div>
          </div>
        <!-- FORMULARIO  -->  
  
          <div class="row justify-content-center justify-content-center" style="background-color:#fafafa;">
              <div class="col-sm-11 col-md-8 col-xl-5" >
                  <form ref="form" @submit.prevent="sendEmail">
                      <div class="form-group">
                        <label class="texto-ordinario" for="exampleInputEmail1">Nombre</label>
                        <input  v-model="from_name" type="name" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      </div>
                      <div class="form-group">
                        <label class="texto-ordinario" for="correo">e-mail</label>
                        <input id="correo" v-model='from_email' type="email" @change="validateEmail()" required class="form-control">
                      </div>
                      <div class="form-group">
                          <label class="texto-ordinario" for="exampleFormControlTextarea1">Mensaje</label>
                          <textarea v-model='message' required type="form-control" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                  <!-- BOTON  -->
                      <div class="boton-enviar d-flex justify-content-end"> 
                          <button type="submit" class="boton-contacto"> 
                              ¡Enviar!
                          </button>
                    </div>  
                  </form>
              </div>
          </div>
        </div>
        <div class="box-contacto" v-if="sent"> 
          <div class="row">
              <div class="col-12 box-contacto-texto justify-content-center">   
                  <h1 class="titulo1"> Muchas gracias por contactarme!</h1>
              </div>
              
          </div>
        <!-- FORMULARIO  -->  
        </div>
    </div>
    
</template>

<script>
// import emailjs from '@emailjs/browser';

export default {
  name: 'Contacto',
  data() {
      return {
        from_email: '',
        from_name: '',
        message: '',
        sent: false
      }
  }
  ,
  methods: {
    sendEmail() {
      if(this.validaFormulario()) {
        console.log("enviado")
        /*
         emailjs.sendForm('service_cq6nsdj', 'template_jyr32ao', this.$refs.form, 'GDeLdMY3jY3i-EeRa')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });*/
        this.sent = true;
      } 
    },
    validaFormulario() {
      if ( this.validateEmail(this.from_email) && this.from_name.length > 0 && this.message.length > 0) {
        return true;
      }
      return false;
    },
    validateEmail(value){
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return true;
        } else {
          return false;
        }
  }
  }

}
</script>

<style scoped>

.box-contacto { 
margin-top: 50px;
} 

.box-contacto-texto{ 
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.texto-ordinario{
color: #1B0907 ;
font-size: 18px;
font-weight: 100;
font-family: 'Raleway', sans-serif;
}

.boton-enviar{
  margin-top: 30px;
  margin-bottom: 100px;
}

.boton-contacto{  
    background-color: #9f6098;
    color: #FAFAFA;
    width: 150px;
    height: 50px;
    box-shadow: 0px 5px 20px rgba(159, 95, 112, 0.6);
    border-radius: 30px;
    border: none;
}

</style>