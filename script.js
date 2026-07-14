<!DOCTYPE html>
<html>
<head>

<title>DELOERA CAPS</title>

<style>

body{
    margin:0;
    font-family:Arial,sans-serif;
    background:#111;
    color:white;
    text-align:center;
}


/* LOGO */
header{
    background:#000;
    width:85%;
    max-width:900px;
    margin:25px auto;
    padding:35px 20px;
    border-radius:45px;
    box-shadow:0 8px 25px rgba(255,255,255,.15);
}

header h1{
    margin:0;
    color:silver;
    font-size:42px;
    letter-spacing:4px;
}

header p{
    color:#ccc;
}


/* BUSCADOR */
.busqueda{
    margin:30px;
}

#buscador{
    width:90%;
    max-width:900px;
    height:70px;
    padding:0 30px;
    font-size:22px;
    border:none;
    border-radius:50px;
}


/* CATALOGO */
#catalogo{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:25px;
}


/* GORRAS */
.gorra{
    background:#1f1f1f;
    width:300px;
    padding:20px;
    border-radius:25px;
    border:2px solid silver;
    box-shadow:0 8px 20px #000;
}

.gorra img{
    width:100%;
    border-radius:20px;
}

.gorra h3{
    color:silver;
}


/* ESTADO */
.estado{
    color:#2ecc71;
    font-weight:bold;
}


/* BOTONES */
button{
    background:#25D366;
    color:white;
    border:none;
    padding:13px 25px;
    border-radius:35px;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
}


/* CARRITO */
.carrito{
    width:90%;
    max-width:700px;
    margin:40px auto;
    background:#1f1f1f;
    padding:20px;
    border-radius:25px;
    border:2px solid silver;
}


</style>

</head>


<body>


<header>

<h1>🧢 DELOERA CAPS</h1>

<p>Lo imposible es aquello q no intentas</p>

</header>



<div class="busqueda">

<input id="buscador" placeholder="🔍 Buscar gorra o código..." onkeyup="buscarGorra()">

</div>



<h2>Catálogo</h2>


<div id="catalogo"></div>




<div class="carrito">

<h2>🛒 Carrito (<span id="contador">0</span>)</h2>

<div id="lista"></div>

<h3>Total: $<span id="total">0</span> MXN</h3>


<button onclick="whatsapp()">
📲 Enviar pedido por WhatsApp
</button>


</div>



<script>


let gorras=[


{
codigo:"DC-001",
nombre:"Cash Only The World Dinero",
precio:650,
estado:"Disponible",
imagen:"https://i.ibb.co/27DRV106/IMG-6727.jpg"
},


{
codigo:"DC-002",
nombre:"Tiros Caps YCQVM",
precio:650,
estado:"Disponible",
imagen:"https://i.ibb.co/9HgNmV0s/IMG-6733.jpg"
},


{
codigo:"DC-003",
nombre:"Tiros Caps Rockstar",
precio:730,
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
precio:680,
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
precio:735,
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



let carrito=[];



function mostrarGorras(){

let html="";


gorras.forEach(g=>{


html+=`

<div class="gorra">

<img src="${g.imagen}">

<p>${g.codigo}</p>

<h3>🧢 ${g.nombre}</h3>

<h3>$${g.precio} MXN</h3>

<p class="estado">${g.estado}</p>


<button onclick="agregar('${g.codigo} ${g.nombre}',${g.precio})">

🛒 Agregar

</button>


</div>

`;


});


document.getElementById("catalogo").innerHTML=html;


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


let mensaje="Hola DELOERA CAPS quiero hacer este pedido:%0A%0A";


carrito.forEach(p=>{

mensaje+="🧢 "+p.nombre+" $"+p.precio+"%0A";

});


mensaje+="%0ATotal: $"+document.getElementById("total").innerHTML;


window.open(
"https://wa.me/528281014970?text="+mensaje
);


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


</script>


</body>
</html>