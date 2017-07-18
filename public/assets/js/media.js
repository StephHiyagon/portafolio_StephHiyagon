var mq768 = window.matchMedia('(min-width:768px)');
var video= document.getElementById('sobremi');
$('#sobremiText').hide();
function mediaQueries(mq){
  if(mq.matches){
    video.innerHTML='<div class="video col m12"><iframe width="100%" height="500" src="https://www.youtube.com/embed/dDH7812AG9s" frameborder="0" allowfullscreen></iframe></div>';
  }
  else{
    // $('#sobremiText').show();
    alert('texto');
    video.innerHTML = '<div id="sobremiText" class="indigo darken-1 white-text col s10 offset-s1"><p class="center-align">Soy Stephanie Hiyagon, natural de Lima, estudié mi primera carrera profesional en la Universidad Nacional Mayor de San Marcos, fueron 6 años para graduarme de Médico Veterinario. Actualmente estudió mi segunda carrera en Laboratoria; han sido 6 meses de full programación y he podido descubrir una nueva pasión en mi vida. Estoy feliz pues llegué a Laboratoria para darle un valor agregado a mi carrera y me ha cambiado el horizonte, lo ha ampliado con conocimientos completamente nuevos (<a href="#conocimientos" class="blue-text">leer conocimientos</a>); detrás de éste proyecto hay un gran grupo humano, por ello Laboratoria es lo que es hoy, un excelente lugar para las chicas que deseen aprender programación. Debo agradecer que cada paso que he dado en mi vida me ha llevado a conocer personas que me han impactado positivamente. Para conocer más de mis aptitudes, conocimientos, experiencias y metas les dejo mi <a href="assets/cv/cv.StephanieHiyagon.pdf" class="blue-text" target="_blank"> link de mi cv.</a>Gracias</p><p><a href="https://www.youtube.com/watch?v=dDH7812AG9s" target="_blank"></a>Haz click para ver mi presentación en video</p></div>';
  }
}

mediaQueries(mq768);
mq768.addListener(mediaQueries);
