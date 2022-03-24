let productStorage = localStorage.getItem("productsData");
let arrat = JSON.parse(productStorage);

function addItem(item) 
{
    const itemHTML = ` 
    <div class="container-fluid col-md-4 py-4">
        <div class="card card-flip card-cont">
            <div class="card-front text-white">
                <div class="card-body p-0 card-img">
                    <img src="${item.img}" class="card-img" alt="..." >
                </div>
                <div class="card-img-overlay card-name py-0">
                    <h5 class="card-title card-nombre p-1"> ${item.nombre}  </h5> 
                    <p class="card-text card-marca p-1"> ${item.marca}  </p> 
                </div>
            </div>
            <div class="card-back bg-white">
            <div class="row">
                <div class="col-md-6">
                <div class="card-body cards-product">
                    
                    <p class="card-text card-categoria"> ${item.categoria}  </p> 
                    <p class="card-text card-descripcion">  ${item.descripcion}  </p> 
                    <p class="card-text card-cantidad"> ${item.cantidad}  </p>
                    <p class="card-text card-talla"> ${item.talla}  </p> 
                </div>
                </div>
                <div class="col-md-6 card-precio">
                    <p class="card-text font-weight-bold card-precio">  ${item.precio} </p>
                    <a href="pago.html"><i class="bi bi-cash comprar-icon"></i></a>
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
                    <img src="${item.img}" class="card-img" alt="..." >
                </div>
                <div class="card-img-overlay card-name py-0">
                    <h5 class="card-title card-nombre p-1"> ${item.nombre}  </h5> 
                    <p class="card-text card-marca p-1"> ${item.marca}  </p> 
                </div>
            </div>
            <div class="card-back bg-white">
            <div class="row">
                <div class="col-md-6">
                <div class="card-body cards-product">
                    
                    <p class="card-text card-categoria"> ${item.categoria}  </p> 
                    <p class="card-text card-descripcion">  ${item.descripcion}  </p> 
                    <p class="card-text card-cantidad"> ${item.cantidad}  </p>
                    <p class="card-text card-talla"> ${item.talla}  </p> 
                </div>
                </div>
                <div class="col-md-6 card-precio">
                    <p class="card-text card-precio">  ${item.precio} </p>
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