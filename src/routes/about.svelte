<script>
	import Overoles from './../components/overoles.svelte';
	import DisenosPersonalizables from './../components/disenos_personalizables.svelte';
import {slide} from 'svelte/transition';



import Logo from './../components/logo.svelte';

let y;
$: console.log(y);


</script>

<svelte:head>
	<title>Hecho a Tu Medida</title>
</svelte:head>
<style>
	.contenedor{
		width: 100%;
		height: 100vh;

		background:url("https://firebasestorage.googleapis.com/v0/b/briimax.appspot.com/o/atumedida.png?alt=media&token=ae54fbca-b8e4-46f3-9c75-8d8e68053d69") no-repeat center center fixed;
 
 /* nos aseguramos que el elemento ocupe toda la ventana del navegador */
 min-height:100%;

 /* Propiedad a utilizar para la imagen */
 background-size:cover;
	}
	.contenedor .logo{	
		margin: auto;
	}
	.menu{
		margin: auto;
        display: grid;
	}
	.menu .text-welcome{
		margin: auto;
		text-align: center;
		margin-bottom: 4%;
		color: white;
	}
	.menu .text-welcome h1{
     font-size: 11vw;
	 font-family: 'Patua One', cursive;
	}
	.menu .text_welcome2{
		margin: auto;
		text-align: center;
		margin-bottom: 4%;
		color: white;
	}
	.menu .text_welcome2 h1{
     font-size: 7vw;
	 font-family: 'Patua One', cursive;
	}
	.menu .text-welcome hr{
		width: 50%;
	}
	.menu .text-welcome h4{
		
		font-size: 4.4vw;
	}
	@media only screen and (min-width: 533px){
		.menu .text-welcome h1{
     font-size: 60px;

	}
	.menu .text-welcome h4{
		
		font-size: 30px;
	}
	.menu .text_welcome2 h1{
     font-size: 40px;
	}
	}

	
</style>

<svelte:window bind:scrollY={y}/>

<div class="contenedor" id="contenedor">

  <div class="logo animate__animated animate__fadeIn">
	 <Logo></Logo>
  </div>



   {#if y >= 20}
   <div class="menu" id='menu' transition:slide>
	<div class="text_welcome2">
	<h1>Selecciona los modelos que necesites</h1> <hr>
	</div>
</div>
	{:else}
		   <!-- content here -->
		   <div class="menu" id='menu' transition:slide>
			<div class="text-welcome animate__animated animate__fadeIn ">
			<h1>Hecho a Tu Estilo</h1> <hr>
			<h4>ROPA INDUSTRIAL BRIIMAX</h4>
			</div>
		</div>
   {/if}
   <DisenosPersonalizables></DisenosPersonalizables>

   <Overoles></Overoles>
</div>