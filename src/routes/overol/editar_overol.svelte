<script>
    
var element;
var pantalla = false;
let pantallaCompleta=  ()=>{

if (pantalla) {
   pantalla=false;
} else {
    element = document.querySelector('#container');
   element.requestFullscreen().then(pantalla=true);
 }


}


      var width = 333;
      var height = 333;

      function drawImage(imageObj) {
        var stage = new Konva.Stage({
          container: 'canva',
          width: width,
          height: height,
        });

        var layer = new Konva.Layer();
        // darth vader
        var darthVaderImg = new Konva.Image({
          image: imageObj,
          x: stage.width() / 2 - 400 / 2,
          y: stage.height() / 2 - 397 / 2,


          //tamanio de imagen
          width: 400,
          height: 337,
          //tamanio de imagen //
          draggable: true,
        });

        // add cursor styling
        darthVaderImg.on('mouseover', function () {
          document.body.style.cursor = 'pointer';
        });
        darthVaderImg.on('mouseout', function () {
          document.body.style.cursor = 'default';
        });

        layer.add(darthVaderImg);
        stage.add(layer);
      }
      var imageObj = new Image();
      imageObj.onload = function () {
        drawImage(this);
      };
      imageObj.src = 'https://o.remove.bg/downloads/30f17593-7f1d-4f55-9f10-34e0e1c6c213/png-transparent-jeans-denim-pocket-clothing-pants-jeans-zipper-fashion-trousers-removebg-preview.png';

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
.contenedor{
    text-align: center;
    width: 100%;
    height: 100vh;
    color: white;
    font-family: 'Patua One', cursive;
    background-color: black;
}
.contenedor .canva{
	background:url("https://firebasestorage.googleapis.com/v0/b/briimax.appspot.com/o/overol-removebg-preview.png?alt=media&token=e5a87e38-3b4f-4e05-a23e-1edd1db7c003") no-repeat center center;
 
 /* nos aseguramos que el elemento ocupe toda la ventana del navegador */


 /* Propiedad a utilizar para la imagen */
 background-size:cover;
    width: 90%;
    height: 50vh;
    z-index: 3;
    margin: auto;
    text-align: center;
    margin-top: 2%;
}
.contenedor .canva canvas{
    width: 100%;
    height: 50vh;
}
</style>

<div class="contenedor" id="container">
    <!-- Boton Full Screen -->
   <h1>CONFIGURA</h1>
   {#if pantalla}
   <div></div>
   {:else}
   <button on:click="{pantallaCompleta}">Pantalla completa</button>
   {/if}


   <!-- Canva -->
   <div class="canva" id="canva">
   <canvas></canvas>
   </div>

    <!-- Configuracion -->
  <div class="configurar">

  </div>

</div>