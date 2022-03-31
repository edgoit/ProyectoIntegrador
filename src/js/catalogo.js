let productStorage = localStorage.getItem("productsData");
let arrat = JSON.parse(productStorage);

function addItem(item) 
{
    const itemHTML = ` 
    <div class="col-lg-6 py-3">
        <div class="card mb-3 card-catalogo">
            <div class="row no-gutters">
                <div class="col-lg-8" style="height:300px;">
                    <img src="${item.img}" alt="..." class="img-card">
                </div>
                <div class="col-md-4">
                    <div class="card-body" style="height:100%;">
                        <h3 class="card-title">${item.marca}</h3>
                        <h5 class="card-text">${item.nombre}</h5>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Categoria:</span> ${item.categoria}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Descripción:</span> ${item.descripcion}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Cantidad:</span> ${item.cantidad}</small></p>
                        <p class="card-text m-0"><small class="text-muted"><span class="font-weight-bold">Talla:</span> ${item.talla}</small></p>
                        <button class="btn btn-outline-secondary mt-3" style="">${item.precio}</button>
                        <!--<p class="card-text"><small class="text-muted"></small></p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



function addStorage()
{
    arrat.forEach(element => {
        const itemHTML = ` 
        <div class="container-fluid col-md-4 py-4">
        <div class="card card-flip card-cont">
            <div class="card-front text-white">
                <div class="card-body p-0 card-img">
                    <img src="${element.img}" class="card-img" alt="..." >
                </div>
                <div class="card-img-overlay card-name py-0">
                    <h5 class="card-title card-nombre p-1"> ${element.nombre}  </h5> 
                    <p class="card-text card-marca p-1"> ${element.marca}  </p> 
                </div>
            </div>
            <div class="card-back bg-white">
            <div class="row">
                <div class="col-md-6">
                <div class="card-body cards-product">
                    
                    <p class="card-text card-categoria"> ${element.categoria}  </p> 
                    <p class="card-text card-descripcion">  ${element.descripcion}  </p> 
                    <p class="card-text card-cantidad"> ${element.cantidad}  </p>
                    <p class="card-text card-talla"> ${element.talla}  </p> 
                </div>
                </div>
                <div class="col-md-6 card-precio">
                    <p class="card-text card-precio">  ${element.precio} </p>
                    <a href="pago.html"><i class="bi bi-cash comprar-icon"></i></a>
                </div>
            </div>
                
            </div>
        </div>
    </div>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    });
}



addItem({
    'img': './src/img/imgCatalogo/tenis1.jpg',
    'nombre': 'Air force 1',
    'marca': 'Nike',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis2.jpg',
    'nombre': 'Air force 2',
    'marca': 'Adidas',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});


addItem({
    'img': './src/img/imgCatalogo/tenis3.jpg',
    'nombre': 'Air force 3',
    'marca': 'Pirma',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis5.jpg',
    'nombre': 'Air force 4',
    'marca': 'Nike',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis6.jpg',
    'nombre': 'Air force 5',
    'marca': 'Adidas',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});


addItem({
    'img': './src/img/imgCatalogo/tenis7.jpg',
    'nombre': 'Air force 6',
    'marca': 'Pirma',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis1.jpg',
    'nombre': 'Air force 7',
    'marca': 'Nike',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis2.jpg',
    'nombre': 'Air force 8',
    'marca': 'Adidas',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});


addItem({
    'img': './src/img/imgCatalogo/tenis3.jpg',
    'nombre': 'Air force 9',
    'marca': 'Pirma',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis5.jpg',
    'nombre': 'Air force 10',
    'marca': 'Nike',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});
addItem({
    'img': './src/img/imgCatalogo/tenis6.jpg',
    'nombre': 'Air force 11',
    'marca': 'Adidas',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});

addItem({
    'img': './src/img/imgCatalogo/tenis7.jpg',
    'nombre': 'Air force 12',
    'marca': 'Pirma',
    'categoria' : 'life-style',
    'descripcion' : 'Tenis casuales',
    'cantidad' : 5, 
    'talla' : 26.5,
    'precio':'$500.00 MXN'
});


addStorage();