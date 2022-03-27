document.querySelector("#btnIngresar").addEventListener("click", iniciarSesion);

function iniciarSesion(){
  let scorreo = "";
  let scontrasena = "";
  let acceder = false;

  scorreo = document.querySelector("#correo").value;
  scontrasena = document.querySelector("#contrasena").value;
  acceder = comparar(scorreo, scontrasena);
  if(acceder == true){
    ingresar();
  }
}


function ingresar(){
  
    let rol = sessionStorage.getItem("rolUsuarioActivo");
    switch(rol){

      case '1': 
      window.location.href = "admin.html";
      break;

        case '2': 
      window.location.href = "cliente.html";
      break;

      default:
        window.location.href = "login.html";
      break;

  }
}
