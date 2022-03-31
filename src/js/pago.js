////////////////////////////////////    funcionalidad boton confirmarr pedido        ////////////////////////////////////////////////////
const formularios = document.getElementById("formulario");
const ccv = document.getElementById("inputCCV")

/////////////   funcion esconder formulario de pago       ///////////////////////////////////////

function showContent() {
  element = document.getElementById("content");
  check = document.getElementById("check");
  if (check.checked) {
    element.style.display = 'block';
  }
  else {
    element.style.display = 'none';
  }
}
///////////////////////////  funcion esconder formulario de pago     ///////////////////////

//////////////////// se agrgarn validaciones al formulario de nombre pero en la en formulario de inicio ////////////////////////////
formulario.nombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.nombre.value = valorInput.replace(/[0-9]/g, '');
});
////////////// CODIGO POSTAL SOLO NÚMEROS  /////
formulario.inputcodigo.addEventListener('keyup', () => {


  formulario.inputcodigo.value = formulario.inputcodigo.value
    // Eliminar los espacios
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '');

  ccv.textContent = formulario.inputcodigo.value;
});
///////////valida la funcion de numero de tarjetas( solo permitira colocar numeros ) /////////////

window.addEventListener("load", function () {
  formulario.tarjeta.addEventListener("keypress", soloNumeros, false);
});

//Solo permite introducir numeros.
function soloNumeros(e) {
  var key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}

///////////////////////////////////////////////
// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
});

// // * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

// // * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {


  formulario.inputCCV.value = formulario.inputCCV.value
    // Eliminar los espacios
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '');

  ccv.textContent = formulario.inputCCV.value;
});
//////////********   se dan aalertas a los botone      ************************************* */
function EventoentregaaDom() {

  Swal.fire({
    position: 'top-end',
    icon: 'info',
    title: 'Tu pedido será entregado a domicilio',
    showConfirmButton: false,

    timer: 1500

  });
}

/************************funcion de confirmar pedido********************************** */

function EventoAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Tu pedido ha sido confirmado',
    confirmButtonText: 'Continuar',
    confirmButtonColor: 'black',
    //con esto redirijo al darle ok al swialert 
  }).then((result) => {
    if (result.isConfirmed) {
      location = "mujerFutbol.html"
    }
  })
}

/************************funcion del boton para confirmar pedido********************************** */
// expresiones regulares para  validar nombre, email, telefono, y mensaje
const ern = /^[a-zA-Z ]{2,50}$/;
const erd = /^[^\W\s\d][a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\sÑñáéíóúÁÉÍÓÚ]+$/;
const ercp = /^(\(?\+?[\d]{1,5}\)?)\s?([\d-]{1,5})\s?([\d][\s\.-]?){1,5}$/;
const ernt = /^(\(?\+?[\d]{1,16}\)?)\s?([\d-]{1,16})\s?([\d][\s\.-]?){1,16}$/;
const erccv = /^(\(?\+?[\d]{1,3}\)?)\s?([\d-]{1,3})\s?([\d][\s\.-]?){1,3}$/;


//Agregamos los datos desde del formulario de pago

let nombre = document.getElementById("nombre");
let direccion = document.getElementById("direccion");
let ciudad = document.getElementById("ciudad");
let codigoPostal = document.getElementById("inputcodigo");
let numeroTarjeta = document.getElementById("numerotarjeta");
let nombreTarjeta = document.getElementById("inputNombre");
let expMes = document.getElementById("selectMes");
let expAno = document.getElementById("selectYear");
let expCcv = document.getElementById("inputCCV");




// se manda llamar la funcion evenListener
eventListener();


// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
  // cuando el formulario arranca
  //document.addEventListener("DOMContentLoaded", iniciarForm);
  nombre.addEventListener("blur", validacionNombre);
  direccion.addEventListener("blur", validacionDireccion);
  ciudad.addEventListener("blur", validacionCiudad);
  codigoPostal.addEventListener("blur", validacionCodigoPostal);
  numeroTarjeta.addEventListener("blur", validacionNumeroTarjeta);
  nombreTarjeta.addEventListener("blur", validacionNombreTarjeta);

  


}


// Funcion validacionFormNombre donde pasa el foco de verde si hay datos en el input nombre o rojo  si no hay datos o no es texto
function validacionNombre(n) {
  if (n.target.type === "text") {

    if (ern.test(n.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
      n.target.classList.remove("is-invalid");
      n.target.classList.add("is-valid");
    } else {
      //mostrarError("El email no es valido");
      n.target.classList.remove("is-valid");
      n.target.classList.add("is-invalid");
      Swal.fire({
        title: 'Error',
        text: 'Escribe un nombre, no se aceptan números.',
        icon: 'Danger',
        confirmButtonText: 'continuar',
        confirmButtonColor: 'black'
      });
    }
  }
}

function validacionDireccion(d) {
  if (d.target.type === "text") {

    if (erd.test(d.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
      d.target.classList.remove("is-invalid");
      d.target.classList.add("is-valid");

    } else {
      //mostrarError("El email no es valido");
      d.target.classList.remove("is-valid");
      d.target.classList.add("is-invalid");

      Swal.fire({
        title: 'Error',
        text: 'Escribe tu dirección.',
        icon: 'Danger',
        confirmButtonText: 'continuar',
        confirmButtonColor: 'black'
      });
    }
  }
}

function validacionCiudad(c) {
  if (c.target.type === "text") {
    if (ern.test(c.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
      c.target.classList.remove("is-invalid");
      c.target.classList.add("is-valid");
    } else {
      //mostrarError("El email no es valido");
      c.target.classList.remove("is-valid");
      c.target.classList.add("is-invalid");
      Swal.fire({
        title: 'Error',
        text: 'Escribe tu ciudad, no se aceptan números.',
        icon: 'Danger',
        confirmButtonText: 'continuar',
        confirmButtonColor: 'black'
      });
    }
  }
}


function validacionCodigoPostal(cp) {
  if (cp.target.type === "text") {

    if (ercp.test(cp.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
      cp.target.classList.remove("is-invalid");
      cp.target.classList.add("is-valid");
    } else {
      //mostrarError("El email no es valido");
      cp.target.classList.remove("is-valid");
      cp.target.classList.add("is-invalid");
      Swal.fire({
        title: 'Error',
        text: 'Escriba su codigo postal, solo números.',
        icon: 'Danger',
        confirmButtonText: 'continuar',
        confirmButtonColor: 'black'
      });
    }
  }
}
function validacionNumeroTarjeta(nt) {
  if (nt.target.type === "text") {

    if (ernt.test(nt.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
      nt.target.classList.remove("is-invalid");
      nt.target.classList.add("is-valid");
    } else {
      //mostrarError("El email no es valido");
      nt.target.classList.remove("is-valid");
      nt.target.classList.add("is-invalid");
      Swal.fire({
        title: 'Error',
        text: 'Escriba el número completo de la tarjeta de pago.',
        icon: 'Danger',
        confirmButtonText: 'continuar',
        confirmButtonColor: 'black'
      });
    }
  }
}

function validacionNombreTarjeta(nomt) {
  if (nomt.target.type === "text") {

    if (ern.test(nomt.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
      nomt.target.classList.remove("is-invalid");
      nomt.target.classList.add("is-valid");
    } else {
      //mostrarError("El email no es valido");
      nomt.target.classList.remove("is-valid");
      nomt.target.classList.add("is-invalid");
      Swal.fire({
        title: 'Error',
        text: 'Escribe un nombre, no se aceptan números.',
        icon: 'Danger',
        confirmButtonText: 'continuar',
        confirmButtonColor: 'black'
      });
    }
  }



  //////////////////////////////////validacion de los selects//////////
  function validacionSelect() {
    let selecMes = document.getElementById('selectMes');
    console.log("hola ya entre")
    if (selecMes.value == 0 || selecMes.value == "") {
      alert("Selecciona Una opción");
      selectMes.focus();
    }
  }
  ////////////////////////////////////////////////////////////////



  //Enviar el formulario
  function enviar_formulario(f) {
    f.preventDefault();
    let valornombre = ern.test(nombre.value);
    let valordireccion = erd.test(direccion.value);
    let valorciudad = ert.test(ciudad.value);
    let valorpostal = ercp.test(codigoPostal.value);
    let valornumta = ernt.test(numeroTarjeta.value);
    let valornomtarjeta = ern.test(nombreTarjeta.value);
    let valorccv = erccv.test(ccv.value);
    validacionSelect()

    if (valornombre == "" || valordireccion == "" || valorciudad == "" || valorpostal==""|| valornumta==""||valornomtarjeta==""||valorccv=="") {
      // mensaje que dice que la informacion de registro tiene errores
      Swal.fire({
        title: 'Error',
        text: 'La información de registro contiene errores',
        icon: 'Danger',
        confirmButtonText: 'Continuar',
        confirmButtonColor: 'black'
      });
    } else {
      // mensaje que dice que el registro se hizo correctamente correctamente 

      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        confirmButtonText: 'Continuar',
        confirmButtonColor: 'black',

      }).then((result) => {
        if (result.isConfirmed) {
          location = "mujerFutbol.html"
        }
      });

    }

  }
}
