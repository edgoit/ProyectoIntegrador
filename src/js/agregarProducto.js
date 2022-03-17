const formulario = document.querySelector("#formulario");
const listaProductos = document.querySelector("#lista-productos");

let productos = [];

eventListeners();


function eventListeners(){
    formulario.addEventListener("submit", agregarProductos);
}


function agregarProductos(e){
e.preventDefault();
  const marcas = document.querySelector("#marca").value;

//   if(marcas === ""){

//   }

 const marcaObj={
     id: Date.now(),
     marcas
 }
  productos = [...productos, marcaObj];

  crearHTML();

  console.log(productos);
  const categorias = document.querySelector("#categoria").value;
  const nombres = document.querySelector("#nombre").value;
  const descricpciones = document.querySelector("#descricpcion").value;
  const cantidades = document.querySelector("#cantidad").value;
  const tallas = document.querySelector("#talla").value;
  const precios = document.querySelector("#precio").value;
  console.log(marcas);
  console.log(categorias);
  console.log(nombres);
  console.log(descricpciones);
  console.log(cantidades);
  console.log(tallas);
  console.log(precios);
}


function crearHTML(){
    if(productos.length > 0 ){
        productos.forEach( marcas=>{
            const li = document.createElement("li");
            li.innerText = marcas.marcas;
            listaProductos.appendChild(li);
        });
    }
}


// const marca = {
//     marca1 : "adidas",
//     marca2 : "nike",
//     marca3 : "pirma"
// }

// const marcaString = JSON.stringify(marca);
// localStorage.setItem("marca", marcaString);

// const marcas = localStorage.getItem("marca");
// console.log(JSON.parse(marcas));

