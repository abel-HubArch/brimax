<script>
	import Logo from './logo.svelte';
    import {blur} from 'svelte/transition';
    var categorias = false;

    let AbrirModelos = () => {
    if(categorias == false){
        categorias = true; 
    }
    else{
        categorias = false;
    }
    }
   
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap');
.container{
   
}
.container .categorias{
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    

}
.container .modelos{
    text-align: center;
    background-color: rgb(39, 38, 38);
  
}
.container .modelos li{
    cursor: pointer;
    margin: 10px 20px;
    display: inline-block;
    color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.container .modelosVenta {
    margin-top: 20px;
}
.container .modelosVenta .overoles img{
width: 270px;
height: 270px;
border-radius: 20px;
}
</style>
<div class="container">
    <div class="categorias">
    <h2 on:click="{AbrirModelos}">Ver Categorias</h2>
    </div>
    {#if categorias}
    <div class="modelos" transition:blur>
        <Logo></Logo>
            <li>OVEROLES</li>
            <li>CHALECOS</li>
            <li>TERMICOS</li>
            <li>OVEROL BUSO</li>
            <li>TERMICO BUSO</li>
    </div>
    {/if}
    <div class="modelosVenta">
        <div class="overoles">
            <img src="https://juanpreciado.com/wp-content/uploads/verde-1-1400x1334.jpg" alt="">
            <h1>titulo</h1>
            <h4>precio</h4>
            <h4>tallas</h4>
            <h4>colores</h4>
            <p>Informacion</p>
            
        </div>
    </div>
  

</div>