<script>

	import Contacto from './../../components/contacto.svelte';
	import RedesSociales from './../../components/redes_sociales.svelte';
	import About from './../about.svelte';
	import Logo from './../../components/logo.svelte'; 
    import {slide} from 'svelte/transition';

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
	.contenedor{
		background-color: black;
		color: white;
		font-family: 'Patua One', cursive;
		width: 100%;
		height: 100vh;
		text-align: center;
	}

	.contenedor .contactanos{
		font-family: Arial, Helvetica, sans-serif;
		width: 80%;
		margin: auto;
		font-size: 16px;
	}

	
   .contactoF{
      width: 80%;
      height: 500px;
       background-color: black;
       border-radius: 20px;
        color: rgb(255, 255, 255);
       margin: auto;
       text-align: center;
	   margin-bottom: 1%;
    }
    label{
        font-size: 20px;
        font-family: 'Patua One', cursive;
    }

    input{
        text-align: center;
        width: 70%;
        height: 30px;
        border-radius: 5px;
        font-family: 'Patua One', cursive;
        font-size: 30px;
        margin-bottom: 10px;
    }

    textarea{
        max-width: 80%;
        min-width: 80%;
        max-height: 20vh;
        min-height: 20vh;
        border-radius: 10px;
        font-family: 'Patua One', cursive;
        font-size: 22px;
        text-align: center;
    }
</style>

   <div class="contenedor">
	<Logo></Logo>
    <div class="contactanos" transition:slide>
   <p>No importa donde te encuentres hacemos envios a toda Bolivia</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

<form action="" class="contactoF" id="AbrirContacto">
    <label for="">Nombre</label><br>
    <input name="nombres" type="text" placeholder="Nombres" required><br>
    <label for="">Telefono</label><br>
    <input type="number" required><br>
    <label for="">Correo Electronico</label><br>
    <input type="text" placeholder='(Opcional)'><br>
    <label for="pregunta">Cual es tu Pregunta?</label><br>
    <textarea  name="pregunta" id="" cols="30" rows="10" required></textarea> <br> <button>Enviar</button>
</form>
   <h1>Redes Sociales</h1>

      <RedesSociales></RedesSociales>

      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0" nonce="2MZjTCAa"></script>
      <div class="fb-like" data-href="https://www.facebook.com/briimax" data-width="" data-layout="button" data-action="like" data-size="large" data-share="true"></div> <br>

    </div>
</div>