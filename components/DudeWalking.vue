<script setup>
import bodymovin from 'bodymovin'

onMounted(()=>{
    let slomo = false;
    let anim;
    let animData = {
        container: document.getElementById('container'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true

        },
        path: 'https://obibramkenobi.github.io/portfolio/bodymovin/runningman.json'
    };

    anim = bodymovin.loadAnimation(animData);

    anim.addEventListener('data_ready', function(){
        console.log('rate?', anim);
    });

})

</script>

<template>
    <div class="dude-walking-wrapper">
        <div id="wrapper">
            <div class="background">
                <div id='container'></div>
            </div>
            <div class= "grass"></div>  
        </div>

    </div>
</template>


<style lang="scss" scoped>
.dude-walking-wrapper{
    background-color:#FFF889;
    margin: 0px;
    overflow-x: hidden;
    overflow-y: auto;
}

#container {
    height: 500px;
 }

#myBtn {
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	height: 50px;
	color: white; 
  background-color: #60A3B5; 
  border: 2px solid #60A3B5;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
	padding: 10px 20px ;
  text-align: center;
  text-decoration: none;
  position: absolute;
  left: 2%;
  top: 0%;
  font-size: 16px;
}


#myBtn:hover {
	border: 2px solid #60A3B5;
  background-color: #FFF889;
  color: #60A3B5;
  cursor: pointer;
}

#myBtn:focus {
  outline:0;}

a {
	text-decoration: none;
	color: #60A3B5;
	margin: 2px;
}

a:hover {
  color: grey;
}

.linkSite {
	position: absolute;
	right: 5%;
	top:1.5%;
}

.grass {
  z-index: -1;
 position:absolute;
 bottom: 0px;
 width: 100%;
 height: 35vh;
 background-color: #BCD752;
 
}
  


</style>