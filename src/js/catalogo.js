let productStorage = localStorage.getItem("productsData");
console.log(typeof productStorage);
let arrat = JSON.parse(productStorage);
console.log(typeof arrat);




function addItem(item) {
    const itemHTML = ` <div class="col-md-4 p-4">  <div class="card offset-md-1" style="width: 18rem;"> 
            <img src=" ${item.img}  " class="card-img-top" alt="image"> 
            <div class="card-body"> 
                <h5 class="card-title">  ${ item.name}  </h5> 
                <p class="card-text"> ${item.marca}  </p> 
                <p class="card-text"> ${item.categoria}  </p> 
                <p class="card-text">  ${item.description}  </p> 
                <p class="card-text"> ${item.cantidad}  </p>
                <p class="card-text"> ${item.talla}  </p> 
                <p class="card-text">  ${item.precio}  </p>
            </div> 
        </div> </div>
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function addStorage()
{
    arrat.forEach(element => {
        const itemHTML = ` <div class="col-md-4 p-4">  <div class="card offset-md-1" style="width: 18rem;"> 
            <img src="   " class="card-img-top" alt="image"> 
            <div class="card-body"> 
                <h5 class="card-title">  ${element.nombre}  </h5> 
                <p class="card-text"> ${element.marca}  </p> 
                <p class="card-text"> ${element.categoria}  </p> 
                <p class="card-text">  ${element.description}  </p> 
                <p class="card-text"> ${element.cantidad}  </p>
                <p class="card-text"> ${element.talla}  </p> 
                <p class="card-text">  ${element.precio}  </p>
            </div> 
        </div> </div>
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    });
}



addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis4.jpeg',
    'marca': 'nike',
    'categoria' : 'life-style',
    'descripcion' : 'Hola a todos',
    'cantidad' : 5, 
    'talla' : 26.5,
    'Precio':'$500.00 MXN'
});

addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis10.jpg',
    'description': 'Estilo y comodidad a tus pies',
    'Precio':'$600.00 MXN'
});


addItem({
    'name': 'Running Retro',
    'img': './src/img/imgCatalogo/tenis11.jpg',
    'description': 'Flexibilidad a la hora de correr',
    'Precio':'$950.00 MXN'
});

addItem({
    'name': 'Life Style Blue&White-fx',
    'img': './src/img/imgCatalogo/tenis13.jpeg',
    'description': 'Estilo y comodidad a tus pies',
    'Precio':'$500.00 MXN'
});

addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis4.jpeg',
    'description': 'Estilo y comodidad a tus pies',
    'Precio':'$600.00 MXN'
});


addItem({
    'name': 'Running Retro',
    'img': './src/img/imgCatalogo/tenis10.jpg',
    'description': 'Flexibilidad a la hora de correr',
    'Precio':'$950.00 MXN'
});

addItem({
    'name': 'Life Style Blue&White-fx',
    'img': './src/img/imgCatalogo/tenis11.jpg',
    'description': 'Estilo y comodidad a tus pies',
    'Precio':'$500.00 MXN'
});

addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis13.jpeg',
    'description': 'Estilo y comodidad a tus pies',
    'Precio':'$600.00 MXN'
});


addItem({
    'name': 'Running Retro',
    'img': './src/img/imgCatalogo/tenis4.jpeg',
    'description': 'Flexibilidad a la hora de correr',
    'Precio':'$950.00 MXN'
});

addItem({
    'name': 'Running Retro',
    'img': './src/img/imgCatalogo/tenis10.jpg',
    'description': 'Flexibilidad a la hora de correr',
    'Precio':'$950.00 MXN'
});
addItem({
    'name': 'Running Retro',
    'img': './src/img/imgCatalogo/tenis4.jpeg',
    'description': 'Flexibilidad a la hora de correr',
    'Precio':'$950.00 MXN'
});

addItem({
    'name': 'Running Retro',
    'img': './src/img/imgCatalogo/tenis10.jpg',
    'description': 'Flexibilidad a la hora de correr',
    'Precio':'$950.00 MXN'
});


addStorage();