// let productStorage = localStorage.getItem("productsData");
// let arrat = JSON.parse(productStorage);

const URL = 'http://localhost:8080/api/productos/';
const ancla = document.getElementById("list-items");

async function fetchDataAsync(url){

    try{
        //peticion de tipo async
        let respuesta = await fetch(url);
        //Parsea los datos 
        let productos = await respuesta.json();

        return productos
    }catch(error){
        return error
    }
}



function crearCard(producto) 
{
    const card = ` 
    <div class="col-lg-6 py-3">
        <div class="card mb-3 card-catalogo">
            <div class="row no-gutters">
                <div class="col-lg-8" style="height:300px;">
                    <img src="${producto.img}" alt="..." class="img-card">
                </div>
                <div class="col-md-4">
                    <div class="card-body" style="height:100%;">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <!-- <h5 class="card-text">${producto.nombre}</h5>-->
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Categoria:</span> ${producto.categoria}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Descripción:</span> ${producto.descripcion}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Cantidad:</span> ${producto.existencia}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Talla:</span> ${producto.talla}</small></p>
                        <button class="btn btn-outline-secondary mt-3 mx-auto" onclick="window.location.href='./pago.html?id=${producto.id}'">$${producto.precio}</button>
                        <!--<p class="card-text"><small class="text-muted"></small></p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return card;
}

function crearCards(arrayProductos){
    
    let acumulador = "";

    arrayProductos.forEach(element => {
      
        let nuevaTarjeta =  crearCard(element);

       acumulador = acumulador + nuevaTarjeta;

    });

    ancla.innerHTML = acumulador;
}

window.onload = function(){
    
    //1. Fetch a mis products 
    //fechData -> retorna productos

    let datos = fetchDataAsync(URL);

    datos
    //si todo salio exitoso
    .then(productos =>{

        console.log(productos);
        //2.crear Todas las tarjet as -> recorrer mi arreglo 
        crearCards(productos);

    })
    //si hay un error
    .catch(error => {
        console.error(error)
    })

}
