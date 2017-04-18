var span=document.getElementsByTagName("span");

for(var i=0; i<span.length;i++){
  span[i].addEventListener("click",function(event){
    event.preventDefault();
    var padre=event.target.parentNode;

    padre.classList.add("close");
  });
}

document.getElementById("restaurar").addEventListener("click",function(event){
  event.preventDefault();

  var mostrar=document.getElementsByClassName("imagenes");

  for(var i=0; i<mostrar.length;i++){
    if(mostrar[i].classList.contains("close")){
      mostrar[i].classList.remove("close");

    }
  }
});

document.getElementById("origen").addEventListener("click",function(event){
  event.preventDefault();

  document.getElementById("columna1").classList.toggle("ocultar");
});

document.getElementById("historia").addEventListener("click",function(event){
  event.preventDefault();

  document.getElementById("columna2").classList.toggle("ocultar");
});
