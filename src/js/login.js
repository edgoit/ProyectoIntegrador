//Agregamos Datos desde login.html con ById a login.js
const formulario = document.getElementById("form-login");
const btnIngresar = document.querySelector("#ingresar");
// se crean variables del localStorage
let usuariosRegistrados = localStorage.getItem("usersData");
let arrayUsuarios = JSON.parse(usuariosRegistrados);
//se crean las variales a jalar
let email2 = document.getElementById("email");
let contrasena2 = document.getElementById("contrasena");
let resultado = document.getElementById("resultado");



//Api endpoint login
const URL = 'http://localhost:8080/api/login/';
const data = { "correo": "", "contrasena": "" };

//se agrega la funcion que recorre al arreglo poara iniciar sesion compara al los usuarios guardados






formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  data.correo = email2.value;
  data.contrasena = contrasena2.value;

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(data => {
      sessionStorage.setItem("usuarioToken", data);
      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Nos alegra tenerte devuelta.",
        confirmButtonText: "Continuar",
        confirmButtonColor: "black",
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      Swal.fire({
        title: "Error",
        text: "Correo o contraseña incorrectos, trate nuevamente.",
        icon: "warning",
        confirmButtonText: "Regresar",
        confirmButtonColor: "black",
      });
    });
});


// expresiones regulares para  validar email y contraseña.
const er =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const ert =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

//Declaramos variables que lleva el formulario
let email = document.getElementById("email");
let contraseña = document.getElementById("contraseña");

// se manda llamar la funcion evenListener
eventListener();

// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
  // cuando el formulario arranca
  //document.addEventListener("DOMContentLoaded", iniciarForm);
  email.addEventListener("blur", validacionFormEmail);
  contrasena.addEventListener("blur", validacionFormContraseña);
  //enviar formulario
  //   formulario.addEventListener("submit", enviar_formulario);
}

// Funcion validacionFormEmail donde pasa el foco de verde si hay datos en el input email o rojo  si no hay datos
function validacionFormEmail(e) {
  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      //mostrarError("El email no es valido");
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
      //   Swal.fire({
      //     title: 'Error',
      //     text: 'Escribe un correo electrónico válido. Ejemplo:alpha@gmail.com.',
      //     icon: 'warning',
      //     confirmButtonText: 'Continuar',
      //     confirmButtonColor: 'black'
      // });
    }
  }
}

// Funcion validacionFormContraseña donde pasa el foco de verde si hay datos en el input telefono o rojo  si no hay datos
function validacionFormContraseña(t) {
  if (t.target.type === "password") {
    if (ert.test(t.target.value)) {
      t.target.classList.remove("is-invalid");
      t.target.classList.add("is-valid");
    } else {
      //mostrarError
      t.target.classList.remove("is-valid");
      t.target.classList.add("is-invalid");
      //   Swal.fire({
      //     title: 'Error',
      //     text: 'Ingresa una contraseña válida.',
      //     icon: 'warning',
      //     confirmButtonText: 'continuar',
      //     confirmButtonColor: 'black'
      // });
    }
  }

}




