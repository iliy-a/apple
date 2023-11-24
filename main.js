let box=document.querySelector("div#box")
let colors=["#282828","#d2d2d2","#46150a","#1757A0","#cb9477","#282828","#d2d7d9","#361b1f","#094547","#e4aa64","#24222e","#8c7151","#d7d7d7","#2e302f","#edbd95","#f1e8c2","#22242f","#beb6d1","#0b3043","#46330a","#163923","#ad3a1e","#201838","#24222d"]

let index=0
setInterval(function(){
    box.style.backgroundColor=colors[index];
    index=(index+1) % colors.length;
},2040)


  
  