function addItem(item) {
    const itemHTML = ` <div class="col-md-4 p-4">  <div class="card offset-md-1" style="width: 18rem;"> 
            <img src=" ${item.img}  " class="card-img-top" alt="image"> 
            <div class="card-body"> 
                <h5 class="card-title">  ${ item.name}  </h5> 
                <p class="card-text">  ${item.description}  </p> 
                <p class="card-text">  ${item.Precio}  </p>
            </div> 
        </div> </div>
        <br/>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'name': 'Life Style Blue&White-fx',
    'img': './src/img/imgCatalogo/tenis4.jpeg',
    'description': 'Estilo y comodiad a tus pies',
    'Precio':'$500.00 MXN'
});

addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis10.jpg',
    'description': 'Estilo y comodiad a tus pies',
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
    'description': 'Estilo y comodiad a tus pies',
    'Precio':'$500.00 MXN'
});

addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis4.jpeg',
    'description': 'Estilo y comodiad a tus pies',
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
    'description': 'Estilo y comodiad a tus pies',
    'Precio':'$500.00 MXN'
});

addItem({
    'name': 'Life Style Arcoiris-fx',
    'img': './src/img/imgCatalogo/tenis13.jpeg',
    'description': 'Estilo y comodiad a tus pies',
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


