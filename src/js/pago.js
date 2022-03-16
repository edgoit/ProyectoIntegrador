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
//////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////


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


// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {


	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});