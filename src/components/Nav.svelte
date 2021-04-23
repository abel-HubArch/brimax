<script>
	export let segment;

  var menu1 = 'scrolling-wrapperClosed';
  var menu2 = 'menuClosed';

  let abrirMenu = ()=>{
  if(menu1 == 'scrolling-wrapperClosed' && menu2 == 'menuClosed'){
    menu1 = 'scrolling-wrapper';
    menu2 = 'menu'
  }else{
    menu1 = 'scrolling-wrapperClosed';
    menu2 = 'menuClosed';
  }
 
  }
  


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap');
.scrolling-wrapper {
  font-family: 'Nunito Sans', sans-serif;
  white-space: nowrap;
  color: rgb(253, 252, 250);
  background-color: black;
  height: 40px;
  text-align: center;
 
  }
  .scrolling-wrapperClosed {
  font-family: 'Nunito Sans', sans-serif;
  white-space: nowrap;
  color: rgb(253, 252, 250);
  background-color: black;
  height: 40px;
  text-align: center;
 
  }
  .scrolling-wrapper .nav{
    color: rgb(253, 252, 250);
    display: none;
    background-color: black;
  }
  .scrolling-wrapperClosed .nav{
    display: none;
    background-color: black;
    color: rgb(253, 252, 250);
  }
  
  .card {
    margin-left: 40px;
    margin-right: 40px;
    display: inline-block;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
  color: rgb(253, 252, 250);
  
  }
  a{
	  text-decoration: none;
	  transition-duration: 200ms;
    color: rgb(253, 252, 250);
  }
  a:hover{
	  color: #DD9D10;
  }
  #list{
   fill:rgb(255, 255, 255);
   width: 40px;
   height: 40px;
   margin-left: 20px;
   transition-duration: 200ms;
}
  #list:hover{
   fill:#DD0B00;
   width: 40px;
   height: 40px;
}
	@media only screen and (max-width: 1075px){
    
		.scrolling-wrapper {
  white-space: nowrap;
  text-align: left;
  height: 300px;
    }
    /*Backgroud cerrado*/
    .scrolling-wrapperClosed {
  white-space: nowrap;
  text-align: left;
  height: 45px;
  background-color: black;
  
    }
    /*/Backgroud cerrado*/
    .scrolling-wrapper .nav{
    display: block;
    width: 70px;
    height: 70px;
    margin-left: 10px;
  }
  .scrolling-wrapperClosed .nav{
    display: block;
    background-color: black;
  }
  /*Menu cerrado*/
  .menuClosed{
    display: none;
  }
  /*/menu cerrado*/

  /*Menu abierto*/
    .scrolling-wrapper .nav #list{
   fill:rgb(255, 255, 255);
   width: 40px;
   height: 40px;
}

  .menu{
    display: block;
  
    width: 100%;
    height: 200px;
    margin: auto;
    margin-top: -40px;
  }
  .card {
    margin-top: 15px;
    display: inherit;
  }
  a:hover{
	  color: #DD0B00;
  }
/*/Menu Cerrado*/
	}
</style>

<nav class="{menu1}">
  <div class="nav">
    <svg on:click="{abrirMenu}" id="list" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
  </div>
    <div class="{menu2}">
		<li class="overoflow card"><a on:click="{abrirMenu}" aria-current="{segment === undefined ? 'page' : undefined}" href=".">INICIO</a></li>
		<li class="overflow card"><a on:click="{abrirMenu}"  aria-current="{segment === 'about' ? 'page' : undefined}" href="about">HECHO A TU MEDIDA</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	
    <li class="overflow card"><a on:click="{abrirMenu}"  rel=prefetch aria-current="{segment === 'venta' ? 'page' : undefined}" href="venta">MODELOS</a></li>
    <li class="overflow card"><a on:click="{abrirMenu}" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">CONTACTO</a></li>
    <li class="overflow card"><a on:click="{abrirMenu}" rel=prefetch aria-current="{segment === 'sobre_nosotros' ? 'page' : undefined}" href="sobre_nosotros">SOBRE NOSOTROS</a></li>
  </div>  
</nav>
