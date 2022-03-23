/////////////////////////////////////////////////////////////////////////////////////////////////
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
function showContent2() {
  element = document.getElementById("content2");
  check = document.getElementById("check2");
  if (check.checked) {
    element.style.display = 'block';
  }
  else {
    element.style.display = 'none';
  }
}

//////////////////// se agrgarn validaciones al formulario de nombre pero en la en formulario de inicio ////////////////////////////
formulario.nombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.nombre.value = valorInput.replace(/[0-9]/g, '');
});
////////////// CODIGO POSTAL SOLO NÚMEROS  /////
formulario.inputZip.addEventListener('keyup', () => {


	formulario.inputZip.value = formulario.inputZip.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputZip.value;
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

/************************funcion de confirmar pedido********************************** */

function enviar_formulario(f) {
  f.preventDefault();
  //Mostar el spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // Despues de tres segundos ocultar el spinner
  setTimeout(() => {
      spinner.style.display = "none";
     let valorNombre = ern.test(nombre.value);
     let valorTelefono = ert.test(telefono.value);
     let valorMensaje = erm.test(mensaje.value);

      if(valorNombre == "" || valorTelefono == "" || valorMensaje == ""){
     console.log(valorNombre);
      // mensaje que dice que la informacion de contacto tiene errores
      Swal.fire({
          title: 'Error',
          text: 'La información de contacto tiene errores',
          icon: 'Danger',
          confirmButtonText: 'Continuar',
          confirmButtonColor: 'black'
      });
  }else{
          // mensaje que dice que el formulario se envio correctamente 
      Swal.fire({
          icon: 'success', 
          title: 'Éxito',
          html: "<form action=\"mailto:ourclub.alpha@gmail.com?subject=form-registro-date%20pag%20Web\" method=\"post\" enctype=\"text/plain\"><input type=\"submit\" value=\"Enviar email\"></form>",
          confirmButtonText: 'Continuar',
          confirmButtonColor: 'black' 
      });
      
  }

  }, 3000);

}