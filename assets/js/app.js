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
  var restaurar=document.getElementsByClassName("imagenes")[i];

    restaurar.classList.remove("close");

});
