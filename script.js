const menu = document.getElementById("btn");
menu.addEventListener('click',()=>{
    let barsUno = document.getElementById("barsUno");
    let barsDos = document.getElementById("barsDos");
    let barsTres= document.getElementById("barsTres");
    let bars = document.querySelector(".label");
    let body = document.getElementById("cuerpo")

    bars.classList.toggle("labelActive")
    barsUno.classList.toggle("activeBarsUno");
    barsDos.classList.toggle("activeBarsDos");
    barsTres.classList.toggle("activeBarsTres");
    cuerpo.classList.toggle("bodyActive");
    
    


})