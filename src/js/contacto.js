//Agregamos Datos desde contacto.html con ById a contactoVali.js
const formulario = document.getElementById("form-registro-date");
const btnReset = document.getElementById("resetBtn");
let btnEnviar = document.querySelector("#enviar");



// expresiones regulares para  validar nombre, email, telefono, y mensaje
const ern = /^[a-zA-Z ]{2,50}$/;
const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const ert = /^(\(?\+?[\d]{1,3}\)?)\s?([\d-]{1,3})\s?([\d][\s\.-]?){6,8}$/;
const erm = /^[^\W\s\d][a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\sÑñáéíóúÁÉÍÓÚ]+$/;



//Declaramos variables que lleva el formulario 
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");





// se manda llamar la funcion evenListener
eventListener();


// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
    // cuando el formulario arranca
    //document.addEventListener("DOMContentLoaded", iniciarForm);
    nombre.addEventListener("blur", validacionFormNombre);
    email.addEventListener("blur", validacionFormEmail);
    telefono.addEventListener("blur", validacionFormTelefono);
    mensaje.addEventListener("blur", validacionFormMensaje);

    //enviar formulario
    formulario.addEventListener("submit", enviar_formulario);

}





// Funcion validacionFormNombre donde pasa el foco de verde si hay datos en el input nombre o rojo  si no hay datos o no es texto
function validacionFormNombre(n) {
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
                text: 'Escribe un nombre con al menos 2 letras, no se aceptan números.',
                icon: 'Danger',
                confirmButtonText: 'continuar',
                confirmButtonColor: 'black'
            });
        }

    }

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
            Swal.fire({
                title: 'Error',
                text: 'Escribe un correo electrónico con un @ y un punto, ejemplo: alpha@gmail.com.',
                icon: 'Danger',
                confirmButtonText: 'Continuar',
                confirmButtonColor: 'black'
            });
        }

    }

}



// Funcion validacionFormTelefono donde pasa el foco de verde si hay datos en el input telefono o rojo  si no hay datos 
function validacionFormTelefono(t) {
    if (t.target.type === "text") {

        if (ert.test(t.target.value)) {
            t.target.classList.remove("is-invalid");
            t.target.classList.add("is-valid");
        } else {
            //mostrarError("El email no es valido");
            t.target.classList.remove("is-valid");
            t.target.classList.add("is-invalid");
            Swal.fire({
                title: 'Error',
                text: 'Escribe un teléfono, con símbolo + y ladas, ejemplo: +523323114000.',
                icon: 'Danger',
                confirmButtonText: 'Continuar',
                confirmButtonColor: 'black'
            });
        }

    }
}



// Funcion validacionFormMensaje donde pasa el foco de verde si hay datos en el textarea mensaje o rojo  si no hay datos 
function validacionFormMensaje(m) {
    if (m.target.type === "textarea") {

        if (erm.test(m.target.value)) {
            m.target.classList.remove("is-invalid");
            m.target.classList.add("is-valid");
            /*Activar boton enviar despues que se  llena el formulario */
            document.getElementById("enviar").style.cursor = "pointer";
            document.getElementById("enviar").style.pointerEvents = "auto";

        } else {
            //mostrarError("El email no es valido");
            m.target.classList.remove("is-valid");
            m.target.classList.add("is-invalid");
            /*Desactivar el boton enviar */
            document.getElementById("enviar").style.cursor = "none";
            document.getElementById("enviar").style.pointerEvents = "none";
            Swal.fire({
                title: 'Error',
                text: 'Escríbenos sobre alguna duda o sugerencia que tengas.',
                icon: 'Danger',
                confirmButtonText: 'Continuar',
                confirmButtonColor: 'black'
            });

        }

    }

}




formulario.nombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.nombre.value = valorInput.replace(/[0-9]/g, '');
});

formulario.telefono.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.telefono.value = valorInput.replace(/[a-zA-Z]/g, '');
});



//Enviar el formulario
function enviar_formulario(f) {
    f.preventDefault();
    let valorNombre = ern.test(nombre.value);
    let valorTelefono = ert.test(telefono.value);

    if (valorNombre == "" || valorTelefono == "") {
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
                location = "mailto:ourclub.alpha@gmail.com?subject=Me%20gustan%20sus%20productos";
            }
        });

    }

}



//Reinicia el formulario 
formulario.addEventListener("reset", (e) => {
    e.preventDefault();

    nombre.value = "";
    email.value = "";
    telefono.value = "";
    mensaje.value = "";
});








