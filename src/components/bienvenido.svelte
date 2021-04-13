<script>
	import Logo from './logo.svelte';
    import {slide, fly} from 'svelte/transition';
    var hola = false;
    setInterval(function(){ hola = true }, 2000);
    if(hola){
        setInterval(function(){ hola = 2 }, 2000);
    }
    
   


</script>
<style>
     @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
.contenedor{
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    font-family: 'Patua One', cursive;
}
.contenedor .text{
text-align: center;
margin-top: 40vh;
font-size: 6vw;
}
.contenedor .text p{
font-family: Arial, Helvetica, sans-serif;
}
@media only screen and (min-width: 547px){
    .contenedor .text{
font-size: 30px;
}
}
</style>
<div class="contenedor">
<Logo></Logo>

{#if hola}
<div class="text" transition:fly>
    <h1>Crea tu Modelo</h1>
    <p>Cargando...</p>
 </div>
 
{:else}
<div class="text" transition:slide>
    <h1 class="animate__animated animate__fadeIn">Bienvenido</h1>
 </div>

{/if}

    
</div>