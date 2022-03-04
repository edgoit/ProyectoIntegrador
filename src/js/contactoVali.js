//Agregamos Datos desde contacto.html con ById a contactoVali.js
const formulario = document.getElementById("form-registro-date");
const btnReset = document.getElementById("resetBtn");
const btnEnviar = document.querySelector("#enviar");

// expresiones regulares para  validar nombre, email, telefono, y mensaje
const ern = /[a-zA-Z]/;
const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const ert = /^([0-9]{5})+((-{1})*)+([0-9]{5})$/i;
const erm = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\sÑñáéíóúÁÉÍÓÚ]+$/;


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

// Funcion validacionFormNombre donde pasa el foco de verde si hay datos en el input nombre o rojo  si no hay datos 
function validacionFormNombre(n) {
    if (n.target.type === "text") {

        if (ern.test(n.target.value)) {//test Prueba una coincidencia en una cadena. Devuelve true o false.
            n.target.classList.remove("is-invalid");
            n.target.classList.add("is-valid");
        } else {
            //mostrarError("El email no es valido");
            n.target.classList.remove("is-valid");
            n.target.classList.add("is-invalid");

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

        }

    }
}



// Funcion validacionFormMensaje donde pasa el foco de verde si hay datos en el textarea mensaje o rojo  si no hay datos 
function validacionFormMensaje(m) {
    if (m.target.type === "textarea") {

        if (m.target.value) {
            m.target.classList.remove("is-invalid");
            m.target.classList.add("is-valid");
        } else {
            //mostrarError("El email no es valido");
            m.target.classList.remove("is-valid");
            m.target.classList.add("is-invalid");

        }

    }
}


//Enviar el formulario
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
            text: 'La informacion de contacto tiene errores',
            icon: 'Danger',
            confirmButtonText: 'continuar',
            confirmButtonColor: 'black'
        });
    }else{
            // mensaje que dice que el formulario se envio correctamente 
        Swal.fire({
            icon: 'success', 
            title: 'Exito',
            html: "<form action=\"mailto:ourclub.alpha@gmail.com?subject=form-registro-date%20pag%20Web\" method=\"post\" enctype=\"text/plain\"><input type=\"submit\" value=\"Enviar email\"></form>",
            confirmButtonText: 'continuar',
            confirmButtonColor: 'black' 
        });
        
    }

    }, 3000);

}


//Reinicia el formulario 
formulario.addEventListener("reset", (e) => {
    e.preventDefault();
    nombre.value = "";
    email.value = "";
    telefono.value = "";
    mensaje.value = "";
});






