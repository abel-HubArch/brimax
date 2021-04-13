<script>
	import EditarOverol from './editar_overol.svelte';
	import Bienvenido from './../../components/bienvenido.svelte';
    import {slide} from 'svelte/transition';
    var pagina = false;
    setInterval(function(){ pagina = true }, 3000);
</script>

<style>


</style>
{#if pagina}
<EditarOverol></EditarOverol>
{:else}
<div class="welcome" transition:slide>
    <Bienvenido></Bienvenido>
</div>
{/if}
