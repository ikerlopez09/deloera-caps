let gorras = [

{
codigo:"DC-001",
nombre:"Cash Only The World Dinero",
precio:730,
estado:"Disponible",
imagen:"https://i.ibb.co/27DRV106/IMG-6727.jpg"
},

{
codigo:"DC-002",
nombre:"Tiros Caps YCQVM",
precio:710,
estado:"Disponible",
imagen:"https://i.ibb.co/9HgNmV0s/IMG-6733.jpg"
},

{
codigo:"DC-003",
nombre:"Tiros Caps Rockstar",
precio:690,
estado:"Disponible",
imagen:"https://i.ibb.co/PvzrgBhf/IMG-6729.jpg"
},

{
codigo:"DC-004",
nombre:"Problemátic Chiquete",
precio:760,
estado:"Disponible",
imagen:"https://i.ibb.co/VpcJPddW/IMG-6728.jpg"
},

{
codigo:"DC-005",
nombre:"Tiros Caps PRC",
precio:690,
estado:"Disponible",
imagen:"https://i.ibb.co/Fk0Zp79n/IMG-6732.jpg"
},

{
codigo:"DC-006",
nombre:"Cash Only Miami",
precio:730,
estado:"Disponible",
imagen:"https://i.ibb.co/5xRjM9b9/IMG-6736.jpg"
},

{
codigo:"DC-007",
nombre:"Cash Only Pantera",
precio:730,
estado:"Disponible",
imagen:"https://i.ibb.co/wh3bW1nM/IMG-6735.jpg"
},

{
codigo:"DC-008",
nombre:"Cash Only LA",
precio:730,
estado:"Disponible",
imagen:"https://i.ibb.co/hJLwdgfT/IMG-6734.jpg"
},

{
codigo:"DC-009",
nombre:"Cashed Out Hats Gervonta",
precio:850,
estado:"Disponible",
imagen:"https://i.ibb.co/Y44DrpBL/IMG-6780.jpg"
}

];

let carrito = [];

function mostrarGorras(){

let html="";

gorras.forEach(g=>{

html += `
<div class="gorra">

<img src="${g.imagen}" alt="${g.nombre}">

<p><b>${g.codigo}</b></p>

<h3>${g.nombre}</h3>

<h3>$${g.precio} MXN</h3>

<p class="estado">${g.estado}</p>

<button onclick="agregar('${g.codigo} - ${g.nombre}',${g.precio})">
🛒 Agregar al carrito
</button>

</div>
`;

});

document.getElementById("catalogo").innerHTML = html;

}

function agregar(nombre,precio){

carrito.push({
nombre,
precio
});

mostrarCarrito();

}

function mostrarCarrito(){

let lista="";
let total=0;

carrito.forEach((p,i)=>{

total+=p.precio;

lista+=`
<p>
🧢 ${p.nombre} - $${p.precio}
<button onclick="eliminar(${i})">❌</button>
</p>
`;

});

document.getElementById("lista").innerHTML=lista;
document.getElementById("contador").innerHTML=carrito.length;
document.getElementById("total").innerHTML=total;

}

function eliminar(i){

carrito.splice(i,1);

mostrarCarrito();

}

function whatsapp(){

if(carrito.length===0){

alert("Tu carrito está vacío.");

return;

}

let mensaje="Hola DELOERA CAPS, quiero hacer este pedido:%0A%0A";

carrito.forEach(p=>{

mensaje+="🧢 "+p.nombre+" - $"+p.precio+" MXN%0A";

});

mensaje+="%0A💰 Total: $"+document.getElementById("total").innerHTML+" MXN";

window.open("https://wa.me/528281014970?text="+mensaje);

}

function buscarGorra(){

let texto=document.getElementById("buscador").value.toUpperCase();

let tarjetas=document.getElementsByClassName("gorra");

for(let i=0;i<tarjetas.length;i++){

if(tarjetas[i].innerText.toUpperCase().includes(texto)){

tarjetas[i].style.display="";

}else{

tarjetas[i].style.display="none";

}

}

}

mostrarGorras();