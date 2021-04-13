<script>
	import Contacto from './../../components/contacto.svelte';
	import RedesSociales from './../../components/redes_sociales.svelte';
	import About from './../about.svelte';
	import Logo from './../../components/logo.svelte'; 
    import firebase from 'firebase/app';
    import 'firebase/firestore';


	 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyADd5Aezod_HSfA0KTjzVbKdiacWkWRnNI",
    authDomain: "briimax.firebaseapp.com",
    databaseURL: "https://briimax.firebaseio.com",
    projectId: "briimax",
    storageBucket: "briimax.appspot.com",
    messagingSenderId: "536485741131",
    appId: "1:536485741131:web:b0f09e5a9262dfc078c3ce",
    measurementId: "G-ENKBKY86D3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  var db = firebase.firestore();
  
  console.log(db);
	
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
	.contenedor{
		background-color: black;
		color: white;
		font-family: 'Patua One', cursive;
		width: 100%;
		height: 100vh;
		text-align: center;
	}

	
	.contenedor .contactanos{
		font-family: Arial, Helvetica, sans-serif;
		width: 90%;
		margin: auto;
		font-size: 16px;
	}
	.contenedor .contactanos h1{
        font-family: 'Patua One', cursive;
	}

</style>

<div class="contenedor">
	<Logo></Logo>
 <div class="contactanos">
   <p>No importa donde te encuentres hacemos envios a toda Bolivia</p>
   <h1>Redes Sociales</h1>
   <RedesSociales></RedesSociales>
   <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v10.0" nonce="2MZjTCAa"></script>
<div class="fb-like" data-href="https://www.facebook.com/briimax" data-width="" data-layout="button" data-action="like" data-size="large" data-share="true"></div> <br>
  
<Contacto></Contacto>



 </div>
</div>