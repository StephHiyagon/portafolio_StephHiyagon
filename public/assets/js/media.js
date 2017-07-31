var mq768 = window.matchMedia('(min-width:768px)');
var video= document.getElementById('sobremi');
$('#sobremiText').hide();
function mediaQueries(mq){
  if(mq.matches){
    video.innerHTML='<div class="video col m12"><iframe width="100%" height="500" src="https://www.youtube.com/embed/dDH7812AG9s?rel=0" frameborder="0" allowfullscreen></iframe></div><div id="overlay" class="bg col m12 center-align"><p>Soy Stephanie Hiyagon, estudie mi primera carrera profesional en la UNMSM, fueron 6 años para graduarme de Médico Veterinario. Actualmente estudio mi segunda carrera en Laboratoria; han sido 6 meses de full programación y mucho aprendizaje. Para conocer más de mis aptitudes, conocimientos, experiencias y metas les dejo mi <a href="assets/cv/cv.StephanieHiyagon.pdf" class="black-text" target="_blank"> CV.</a>Gracias.</p><button class="btn pink darken-1 waves-effect waves-light" id="clickme">Video</button></div>';
  }
  else{

    // alert('texto');
    video.innerHTML = '<div id="sobremiText" class="grey darken-4 white-text col s10 offset-s1"><p class="center-align">Soy Stephanie Hiyagon, natural de Lima, estudie mi primera carrera profesional en la UNMSM, fueron 6 años para graduarme de Médico Veterinario. Actualmente estudio mi segunda carrera en Laboratoria; han sido 6 meses de full programación y mucho aprendizaje. Para conocer más de mis aptitudes, conocimientos, experiencias y metas les dejo mi <a href="assets/cv/cv.StephanieHiyagon.pdf" class="blue-text" target="_blank"> cv.</a>Gracias</p><p><a href="https://www.youtube.com/watch?v=dDH7812AG9s" target="_blank">Mira mi presentación en video</a></p></div>';
  }
}

mediaQueries(mq768);
mq768.addListener(mediaQueries);

//boton video

var videoM = document.getElementById('clickme');
var overlay=document.getElementById('overlay');

function clicked (e) {
  console.log(e.target);
  var target =  overlay.className;
  console.log(target);
  if (target == "bg col m12 center-align") {
    overlay.classList.add("none");
  }
};

videoM.addEventListener('click',clicked);
