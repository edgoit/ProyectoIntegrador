const form = document.getElementById("formulario");

let anclaPreview = document.getElementById("ancla-preview");

let ancla = document.getElementById("img-ancla")

let fileImage = document.getElementById('fileImage');
let btnFake = document.getElementById('btnFake');

arrayProductos = [];

let imgsrc;


form.addEventListener("submit",e =>{
    e.preventDefault();

    let marca = document.getElementById("marca");
    let categoria = document.getElementById("categoria");
    let nombre = document.getElementById("nombre");    
    let descripcion = document.getElementById("descripcion");
    let talla = document.getElementById("talla");
    let cantidad = document.getElementById("cantidad");
    let precio = document.getElementById("precio");


    let nuevoProducto = 
    {
        "id" : arrayProductos.length + 1,
        "img" : imgsrc,
        "nombre" :  nombre.value,
        "marca" : marca.value,
        "categoria" : categoria.value,
        "descripcion" : descripcion.value,
        "talla" : talla.value,
        "cantidad" : cantidad.value,
        "precio" : parseInt(precio.value)
    }
    
    cardPreviewCatalogo(nuevoProducto);

    arrayProductos.push(nuevoProducto);

    let jsonProducto = JSON.stringify(arrayProductos);
    localStorage.setItem("productsData", jsonProducto);
});




btnFake.addEventListener('click', function () {
    fileImage.click();
});
fileImage.addEventListener('change', function () {
    previewFile('fileImage')
});

function previewFile(inputFile) {

    ancla.innerHTML = "";
    let file = document.getElementById(inputFile).files[0];
    let reader = new FileReader();
    reader.addEventListener("load", function () {
    imgsrc = reader.result;
    card(reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function card(prev){
    let card = 
    `
    <div class="">
        <img src="${prev}" style="max-width:250px;"/>
    </div>
    `;
    ancla.innerHTML += card;
}


function cardPreviewCatalogo(preoductoNuevo)
{
    let cardPreview = 
    ` 
    <div class="col-lg-12 py-3">
        <div class="card mb-3 card-catalogo">
            <div class="row no-gutters">
                <div class="col-lg-8">
                    <img src="${preoductoNuevo.img}" alt="..." class="img-card" style="width: 100%; height: 321px;">
                </div>
                <div class="col-md-4">
                    <div class="card-body" style="height:100%;">
                        <h3 class="card-title">${preoductoNuevo.marca}</h3>
                        <h5 class="card-text">${preoductoNuevo.nombre}</h5>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Categoria:</span> ${preoductoNuevo.categoria}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Descripción:</span> ${preoductoNuevo.descripcion}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Cantidad:</span> ${preoductoNuevo.cantidad}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Talla:</span> ${preoductoNuevo.talla}</small></p>
                        <button class="btn btn-outline-secondary mt-3 disabled">${preoductoNuevo.precio}</button>
                        <!--<p class="card-text"><small class="text-muted"></small></p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    anclaPreview.innerHTML += cardPreview;
}