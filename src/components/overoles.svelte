
<script>
    import BusoTermico from 'images/modelos_overol/buzo_termico.png';
    import Chaleco_modelo from 'images/modelos_overol/chaleco_modelo.png';
    import OverolBuso from 'images/modelos_overol/overoBuso_modelo.png';
    import OverolModelo from 'images/modelos_overol/overol_modelo.png';
    import TermicoModelo from 'images/modelos_overol/termico_modelo.png';
    
        
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
        width: 160px;
        height: 160px;
       margin-left: 5px;
        border-radius: 20px;
        transition-duration: 500ms;
        margin-right: 20px;
      }
      .card img:hover{
        width: 170px;
        height: 170px;
      }

      h1{
        text-align: center;
        color: white;
        font-family: 'Patua One', cursive;
        margin-top: 30px;
    

      }
      @media only screen and (min-width: 1133px){
        .card img{
        width: 180px;
        height: 180px;
       margin-left: 5px;
        border-radius: 20px;
        transition-duration: 500ms;
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
    width: 275px;
    height: 275px;
    margin-left: 20px;
    border-radius: 20px;
    transition-duration: 500ms;
  }
  .card img:hover{
    width: 280px;
    height: 280px;
  }

	}
    </style>
   <div class="text"> <h1>Modelos Diseñados</h1></div>
    <div class="scrolling-wrapper">
     
        <div class="card">
            <img src="{OverolModelo}" alt="Overoles Industriales">
           
        </div>
        <div class="card">
            <img src="{Chaleco_modelo}" alt="Chaleco Industrial">
          
        </div>
        <div class="card">
            <img src="{TermicoModelo}" alt="Termico Industrial">
            
        </div>
        <div class="card">
            <img src="{OverolBuso}" alt="Overol Buso Industrial">
         
        </div>
        <div class="card">
            <img src="{BusoTermico}" alt="Buso Termico Industrial">
         
        </div>
    
    </div>
    
    
    