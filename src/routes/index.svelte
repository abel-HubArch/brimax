<script>
	import RedesSociales from './../components/redes_sociales.svelte';
	import Contacto from './../components/contacto.svelte';
	import briimax_letras from 'images/letras_briimax.png';
    
	export let segment;
    
    
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

	.body1{
		width: 100%;
		height: 100vh;
		background:url("https://firebasestorage.googleapis.com/v0/b/briimax.appspot.com/o/fondo.png?alt=media&token=63a41fc9-c4bc-4474-a70d-b222d02b33c7") no-repeat center center;
 
 /* nos aseguramos que el elemento ocupe toda la ventana del navegador */
 min-height:100%;

 /* Propiedad a utilizar para la imagen */
 background-size:cover;

	}
	.contenedor{
		
        display: flex;
		color: #ffffff;
		align-items: center;
	}
	.menu{
		margin: auto;
        display: grid;
		
		
	}
	.menu .text-welcome{
		margin: auto;
		text-align: center;
		margin-bottom: 4%;
	}
	.menu .text-welcome h1{
     font-size: 11vw;
	 font-family: 'Patua One', cursive;
	}
	.menu .text-welcome hr{
		width: 50%;
	}
	.menu .text-welcome h4{
		
		font-size: 4.4vw;
	}
	.menu a{
		margin: auto;
		text-decoration: none;
		font-size: 9vw;
		margin-top: 4%;
		transition-duration: 500ms;
		font-family: 'Patua One', cursive;
	}
	.menu a:hover{
		color: #eedeb1;
		font-size: 11vw;
	}
	img{
		width: 80%;
		height: 100%;
		margin: auto;
	}
	@media only screen and (min-width: 533px){
		.menu a{
		font-size: 8vw;
	
	}
	.menu .text-welcome h1{
     font-size: 10.3vw;
	}
	.menu .text-welcome h4{
		font-size: 4.4vw;
	}
	img{
		width: 80%;
		height: 100%;
		margin: auto;
	}
	.menu a:hover{
		color: #eedeb1;
		font-size: 8vw;
	}
	}
	@media only screen and (min-width: 782px){
		.menu a{
		font-size: 50px;
	
	}
	.menu .text-welcome h1{
     font-size: 87px;
	}
	.menu .text-welcome h4{
		font-size: 30px;
	}
	
	.menu a:hover{
		color: #fff;
		font-size: 63px;
	text-shadow:
		0 0 5px rgb(216, 189, 38),
		0 0 10px rgb(182, 29, 18),
		0 0 20px rgb(211, 12, 12);
		
		
	}
	img{
		width: 600px;
		height: 100%;
		margin: auto;
		
	}
	

	}
	
</style>

<svelte:head>
	<title>Briimax</title>
	
</svelte:head>

<body>
	<div class="body1 contenedor">
		 <div class="menu" id='menu'>
			 <div class="text-welcome animate__animated animate__fadeIn">
			 <h1>ROPA INDUSTRIAL</h1> <hr>
			 <h4>ROPA INDUSTRIAL PERSONALIZABLE</h4>
		 </div>
			 <img class="animate__animated animate__fadeIn" src="{briimax_letras}"  alt="">
			<a rel=prefetch aria-current="{segment === 'sobre_nosotros' ? 'page' : undefined}" href="sobre_nosotros">INICIO</a>
			<a rel=prefetch aria-current="{segment === 'venta' ? 'page' : undefined}" href="venta">MODELOS</a>
	    	<a class="animate__animated animate__wobble animate__delay-4s " aria-current="{segment === 'about' ? 'page' : undefined}" href="about">HECHO A TU MEDIDA</a>
            
		 <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	    	<a class="animate__animated animate__wobble animate__delay-5s" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">CONTACTO</a>
		      
		  <RedesSociales></RedesSociales>
	     </div>
		
    </div>

</body>