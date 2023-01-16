<template>
    <div class="box-footer">
        <b-row class="box-footer align-content-center">
                <h2 class="text-center"> ¡Conectémos! </h2>

                <div class="d-flex justify-content-center"> 

                    <a href="https://www.linkedin.com/in/natalia-mu%C3%B1oz-delaveau-0016b3a2/" target="_blank" class="redes"> 
                        <i class="fab fa-linkedin-in icono"> </i>
                    </a>

                    <a href="https://www.behance.net/natymuoz1" target="_blank" class="redes"> 
                        <i class="fab fa-behance icono"> </i>
                    </a>

                </div>

                <a class="text-center mt-2" href="https://natypuff88.com/wp/" target="_blank"> 

                <i class="fa fa-heart corazon"> </i>
                
                <p class="blog">¡Visita mi blog!</p>   

                <i class="fa fa-heart corazon"> </i>             
                
                </a>
        

        </b-row>

    </div>
</template>


<script>

export default {

  
}


</script>

<style>

.box-footer{
    display: flex;
    width: 100vw;
    height: 15rem;
    background-color: #caf1e6;
}

.icono{
    width: 40px;
    height: 40px;
    color: #1B0907;
    font-size: 30px;
    margin: 10px;
}

a{
    text-decoration: none;
}

.blog{
     text-decoration: underline;
    display: inline;
      color: #1B0907;
}

.blog:hover{
    font-weight: 700;
    color: #F4AAB6;;
}

.corazon{
    display: inline;
    width: 40px;
    height: 40px;
    color: #1B0907;
    font-size: 15px;
    margin: 10px;
}

.redes i:hover{
 color: #F4AAB6;
 font-size: 45px;
}



</style>