var input=document.getElementsByTagName('input');

function letras(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var letras=" abcdefghijklmnopqrstuvwxyz";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(letras.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

input[0].onkeypress=letras;

function valida(event){
  if(this.value==""){
    this.nextElementSibling.style.display="block";
    this.classList.add("validar");
  }else{
    this.nextElementSibling.style.display="none";
    this.classList.remove("validar");
  }

  if(this.getAttribute("type")=="text"){
      var txt="";
      var separa=this.value.split(" ");
    	separa.forEach(function(e){
        return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
      var imp=txt.trim();
    	return this.value=imp;
    }
}


for(var i=0; i<2;i++){
  input[i].onblur=valida;
}

function correo(event){
  var correo=input[2].value;
  console.log(correo);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
    this.nextElementSibling.style.display="block";
    this.classList.add("validarC");
  }else{
    this.nextElementSibling.style.display="none";
    this.classList.remove("validarC");
  }
}

input[2].onblur=correo;

function noCheck(event){
  if(!input[3].checked){
    console.log("no seleccionado");
    this.nextElementSibling.style.color="red";
  }else{
    console.log("seleccionado");
    this.nextElementSibling.style.color="green";
  }
}

input[3].onclick=noCheck;

var reclutadores=[];

function Reclutador(nombre, email){
  this.nombre=nombre;
  this.email=email;
}

function guardarDatos(){
  var nombre = input[0].value;
  var email = input[2].value;
  var recluta=new Reclutador(nombre, email);
  reclutadores.unshift(recluta);
  console.log(reclutadores);
  localStorage.setItem(nombre,JSON.stringify(email));
}


var submit=document.getElementById("enviar");
var textarea = document.getElementsByTagName('textarea')[0];

function envia(event){
  event.preventDefault();
  console.log(input[0].value +"," +input[1].value+ "," + input[2].value +"," + input[3].checked );

  if(input[0].value!="" && input[1].value!="" && input[2].value!="" && input[3].checked){
    console.log("todo lo requerido no esta vacio!");
    //post para enviar la data
  //   $.post('api/register',{name:input[0].value, empresa:input[1].value, email:input[2].value, msj: textarea.value},(response)=>{
  //    console.log(response);
  //  },'json');
   guardarDatos();
    //limpiar inputs
    for(var i=0; i<input.length;i++){
      input[i].value="";
    }
    textarea.value="";

  }else{
    console.log("faltan completar campos");
    for(var i=0; i<2;i++){
      if(input[i].value==""){
        input[i].classList.add("validar");
        input[i].nextElementSibling.style.display="block";
      }
    }
    if(input[2].value==""){
      input[2].nextElementSibling.style.display="block";
      input[2].classList.add("validarC");
    }
  }
}
submit.onclick=envia;
