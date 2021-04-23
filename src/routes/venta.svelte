<script>
	import DisenosPersonalizables from './../components/disenos_personalizables.svelte';
	import Modelos from './../components/modelos.svelte';
	import Overoles from './../components/overoles.svelte';
	import Logo from './../components/logo.svelte';
    import {slide} from 'svelte/transition';
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
.container{
    width: 100%;
    height: 100vh;
    background-color: black;
    text-align: center;
    padding-top: 30px;
}
.container h1{
    color: white;
    font-family: 'Patua One', cursive;

}
</style>

<div class="container" >
    <div class="animacion" transition:slide>
<h1>MODELOS</h1>
<Modelos></Modelos>
<Overoles></Overoles>
</div>
</div>