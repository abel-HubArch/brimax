
<script>
import BusoTermico from 'images/modelos_overol/buzo_termico.png';
import Chaleco_modelo from 'images/modelos_overol/chaleco_modelo.png';
import OverolBuso from 'images/modelos_overol/overoBuso_modelo.png';
import OverolModelo from 'images/modelos_overol/overol_modelo.png';
import TermicoModelo from 'images/modelos_overol/termico_modelo.png';
export let segment;
    
</script>


<style>
     @import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
	.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: center;
		}
  .card {
    font-family: 'Patua One', cursive;
    display: inline-block;
    text-align: center;
    color: white;
    
  }
  .card img{
    width: 195px;
    height: 195px;
    margin-left: 20px;
    border-radius: 20px;
    transition-duration: 500ms;
  }
  .card img:hover{
    width: 200px;
    height: 200px;
  }
  .card h1{
      margin-left: 40px;
      margin-right: 20px;
  }
  @media only screen and (min-width: 1302px){
  .card {
    display: inline-block;
    text-align: center;
    color: white;
    
  }
  .card img{
    width: 225px;
    height: 225px;
    margin-left: 20px;
    border-radius: 20px;
    transition-duration: 500ms;
  }
  .card img:hover{
    width: 200px;
    height: 200px;
  }
  .card h1{
      margin-left: 40px;
      margin-right: 20px;
  }
	}
	@media only screen and (min-width: 1261px){
    .scrolling-wrapper {
  overflow-x: inherit;
  overflow-y: inherit;
  white-space: inherit;
		}
  .card {
    font-family: 'Patua One', cursive;
    display: inline-block;
    text-align: center;
    color: white;
    
  }
  .card img{
    width: 295px;
    height: 295px;
    margin-left: 20px;
    border-radius: 20px;
    transition-duration: 500ms;
  }
  .card img:hover{
    width: 300px;
    height: 300px;
  }
  .card h1{
      margin-left: 40px;
      margin-right: 20px;
  }
	}  
</style>

<div class="scrolling-wrapper">
    <div class="card">
     <a rel=prefetch aria-current="{segment === 'overol' ? 'page' : undefined}" href="overol"><img src="{OverolModelo}" alt="Overoles Industriales"></a>
        <h1>Overol</h1>
    </div>
    <div class="card">
        <img src="{Chaleco_modelo}" alt="Chaleco Industrial">
        <h1>Chaleco</h1>
    </div>
    <div class="card">
        <img src="{TermicoModelo}" alt="Termico Industrial">
        <h1>Termico</h1>
    </div>
    <div class="card">
        <img src="{OverolBuso}" alt="Overol Buso Industrial">
        <h1>Overol Buso</h1>
    </div>
    <div class="card">
        <img src="{BusoTermico}" alt="Buso Termico Industrial">
        <h1>Buso Termico</h1>
    </div>

</div>


