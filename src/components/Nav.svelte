<script>
	export let segment;
</script>

<style>
.scrolling-wrapper {
 
  white-space: nowrap;
  color: rgb(253, 252, 250);
  background-color: black;
  height: 40px;
  }
  .card {
    margin-left: 40px;
    margin-right: 40px;
    display: inline-block;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
  }
  a{
	  text-decoration: none;
	  transition-duration: 200ms;
  }
  a:hover{
	  color: #DD9D10;
  }

	@media only screen and (max-width: 533px){
		.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
		}
  .card {
    display: inline-block;
  }
  

	}
</style>

<nav class="scrolling-wrapper">

		<li class="overoflow card"><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Inicio</a></li>
		<li class="overflow card"><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Hecho a Tu Medida</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class="overflow card"><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Contacto</a></li>

</nav>
