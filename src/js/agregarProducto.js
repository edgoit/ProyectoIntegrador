const form = document.getElementById("formulario");


arrayProductos = [
    {
        'id' : 1,
        'img': './src/img/imgCatalogo/tenis4.jpeg',
        'name': 'Life Style Arcoiris-fx',
        'marca': 'Nike',
        'categoria' : 'life-style',
        'description' : 'Hola a todos',
        'cantidad' : 5, 
        'talla' : 26.5,
        'precio':'$500.00 MXN'
    }
];


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
        "nombre" :  nombre.value,
        "marca" : marca.value,
        "categoria" : categoria.value,
        "descripcion" : descripcion.value,
        "talla" : talla.value,
        "cantidad" : cantidad.value,
        "precio" : parseInt(precio.value)
    }
    
    arrayProductos.push(nuevoProducto);

    let jsonProducto = JSON.stringify(arrayProductos);
    localStorage.setItem("productsData", jsonProducto);
});
