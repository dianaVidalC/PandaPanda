var close=document.getElementsByTagName("span");

close.addEventListener("click",function(event){
  event.preventDefault();

  for(var i=0; i<close.lenght;i++){
    document.getElementsByClassName("img")[i].style.display="none";
  }
}
