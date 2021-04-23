<script>
	import RedesSociales from './../components/redes_sociales.svelte';
	import Overoles from './../components/overoles.svelte';
	import Logo from './../components/logo.svelte';
    import {blur} from 'svelte/transition';
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');


.container{
    background-color: black;
    width: 100%;
    height: 100%;
}
.container .nosotros{
    margin: auto;
    color: white;
    text-align: center;
 font-family: 'Patua One', cursive;
 margin-top: 20px;
 width: 70%;
 background-color: black;
}
.margen{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: black;
}
</style>

<div class="container">
<Logo></Logo>
<div class="animacion" transition:blur>
<div class="nosotros">
    <h1>NOSOTROS</h1>
    <p>Ser una empresa reconocida por su liderazgo y competitividad empresarial, con tecnología de vanguardia y un recurso humano de excelencia, con orgullo de pertenencia, motivado y calificado, que proporcione servicios y productos con la mayor calidad en Seguridad Industrial.</p>
</div>
<div class="mision nosotros margen">
    <h1>MISION</h1>
    <p>Estamos comprometidos a satisfacer continua y plenamente las necesidades y exigencias de nuestros clientes, superando sus expectativas y ofreciendo permanentemente productos y servicios orientados a mejorar su Seguridad Industrial, brindando una atención personalizada, oportuna y cálida.</p>
</div>
<div class="beneficios nosotros margen">
    <h1 class="margen">BENEFICIOS DE TRABAJAR CON BRIIMAX</h1>
    <div class="beneficios margen">| Atencion Personalizada | Asesoramiento | Varia diversidad de productos | Personalizacion |</div>
    <RedesSociales></RedesSociales> 
</div>
<Overoles></Overoles>
</div>
</div>