const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let correo = document.getElementById("correo").value;
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contrasena").value;

  let cliente = {
      "usuario" :usuario,
      "correo" : correo,
    "contrasena" : contrasena
  };

  arrayUsuario.push(cliente);

  let json = JSON.stringify(arrayUsuario);
  localStorage.setItem("usersData", json);
  console.log("cliente agregado");
});

let arrayUsuario = [ 
    // {   
    //     'correo' : "daveramirezespinoza@gmail.com",
    //     'usuario' : "fogoso",
    //     'contrasena' : "maquinadefuego"
    // }

];
