//Agregamos Datos desde contraseñaOlvidada.html con ById a login.js
const formulario = document.getElementById("form-registro-date");
const btnRecordar = document.querySelector("#recordar");

// expresiones regulares para  validar email y contraseña.
const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

//Declaramos variables que lleva el formulario 
let email = document.getElementById("email");

// se manda llamar la funcion evenListener
eventListener();

// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
    // cuando el formulario arranca
    //document.addEventListener("DOMContentLoaded", iniciarForm);
    email.addEventListener("blur", validacionFormEmail);
    //continuar
    formulario.addEventListener("submit", recordar_contraseña);


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

        }

    }

}

// validacion no permite ingresar mayusculas en input email
formulario.email.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.email.value = valorInput.replace(/[A-Z]/g, '');
});

//Enviar el formulario
function recordar_contraseña(f) {
    f.preventDefault();

       let valorEmail = er.test(email.value);

        if(valorEmail == ""){
        // mensaje que dice ingreses el correo
        Swal.fire({
            title: 'Error',
            text: 'Ingresa un correo válido',
            icon: 'warning',
            confirmButtonText: 'Regresar',
            confirmButtonColor: 'black'
        });
    }else{
            // mensaje que dice que el ingreso ha sido exitoso
        Swal.fire({
            icon: 'success', 
            title: 'Exito',
            text: 'Se ha enviado un código',
            confirmButtonText: 'Continuar',
            confirmButtonColor: 'black' 
        });

    }


}




