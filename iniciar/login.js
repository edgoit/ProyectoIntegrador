
//const form = document.getElementById("form");


  //let resultado = document.getElementById("resultado");

/*form.addEventListener("submit", (e) => {
  e.preventDefault();*/

  function obtenerListaUsuarios(){

    let listaUsuarios= JSON.parse(localStorage.getItem("usersData"));
    if( listaUsuarios== null){
      listaUsuarios =
      [

      ["a1", "a1@gmail.com", "123", "1"],
      ["d1", "d1@gmail.com", "456", "2"]

      ]
    }
    return listaUsuarios;
  }

  function comparar(pCorreo, pContrasena){
    let listaUsuarios = obtenerListaUsuarios();
    let acceder = false;

    for(let i=0; i<listaUsuarios.length; i++){
      if(pCorreo == listaUsuarios[i][1] && pContrasena == listaUsuarios[i][2]){
        acceder = true;
        sessionStorage.setItem("usuarioActivo", listaUsuarios[i][0]);
        sessionStorage.setItem("rolUsuarioActivo", listaUsuarios[i][3]);
      }
    }
    return acceder;
  }




  // for ( let i=0; i< arrayUsuarios.length; i++){
  //   console.log(arrayUsuarios[i].correo);
  //   if(correo.value == arrayUsuarios[i].correo && contrasena.value == arrayUsuarios[i].contrasena){
  //     alert ('Bienvenido');
  //     break;
  //   } else{
  //     alert ('datos erroneos');
  //   }


  // }



  
//});


 // console.log(typeof contrasena.value);
  // console.log(typeof correo.value);

  /*let correos = arrayUsuarios.indexOf(correo.value);
  let contrasenas = arrayUsuarios.indexOf(contrasena.value);
  if (correos != -1 && contrasenas != -1){
    alert('Bienvenido');
  }else{
    alert('error');
  }*/