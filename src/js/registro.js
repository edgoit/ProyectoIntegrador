//Agregamos Datos desde contacto.html con ById a registro.js
const formulario = document.getElementById("form-registro-date");
const btnReset = document.getElementById("resetBtn");
const btnEnviar = document.querySelector("#enviar");

// expresiones regulares para  validar nombre, email, telefono, y contraseña
const ern = /[a-zA-Z]/;
const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const ert = /^([0-9]{5})+((-{1})*)+([0-9]{5})$/i;
const erc=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;


//Declaramos variables que lleva el formulario 
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let contraseña = document.getElementById("contraseña");
let contraseña2 = document.getElementById("contraseña2");
let comparacion = false;


// se manda llamar la funcion evenListener
eventListener();


// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
    // cuando el formulario arranca
    //document.addEventListener("DOMContentLoaded", iniciarForm);
    nombre.addEventListener("blur", validacionFormNombre);
    email.addEventListener("blur", validacionFormEmail);
    telefono.addEventListener("blur", validacionFormTelefono);
    contraseña.addEventListener("blur", validacionFormContraseña);
    contraseña2.addEventListener("blur", validacionFormContraseña2);
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



// Funcion validacionFormContraseña donde pasa el foco de verde si hay datos en el input telefono o rojo  si no hay datos 
function validacionFormContraseña(c) {
    if (c.target.type === "password") {

        if (erc.test(c.target.value)) {
            
            c.target.classList.remove("is-invalid");
            c.target.classList.add("is-valid");
        } else {
            //mostrarError

            c.target.classList.remove("is-valid");
            c.target.classList.add("is-invalid");

        }

    }
}

// Funcion validacionFormContraseña2 donde pasa el foco de verde si hay datos en el input telefono o rojo  si no hay datos 
function validacionFormContraseña2(c2) {
    if (c2.target.type === "password") {

        if (erc.test(c2.target.value)) {
            
            c2.target.classList.remove("is-invalid");
            c2.target.classList.add("is-valid");
        } else {
            //mostrarError

            c2.target.classList.remove("is-valid");
            c2.target.classList.add("is-invalid");

        }

    }
}


//Función que compara si las contraseñas ingresadas coinciden
function validarRegistro(){
    var password = document.querySelector("#contraseña").value;
    var password2 = document.querySelector("#contraseña2").value;
    //console.log("contraseña", password);
    //console.log("contraseña2", password2);
    if (password != password2) {
        comparacion = false;
       //console.log("No son iguales", comparacion);
        return false;
    }else {
        
        comparacion = true;
        //console.log("son iguales" , comparacion);
        return true;

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

        if(valorNombre == "" || valorTelefono == "" || comparacion == false){
        // mensaje que dice que la informacion de registro tiene errores
        Swal.fire({
            title: 'Error',
            text: 'La informacion de registro contiene errores o las contraseñas con coinciden',
            icon: 'Danger',
            confirmButtonText: 'continuar',
            confirmButtonColor: 'black'
        });
    }else{
            // mensaje que dice que el registro se hizo correctamente correctamente 
        Swal.fire({
            icon: 'success', 
            title: 'Registro exitoso',
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
    contraseña.value = "";
    contraseña2.value = "";
});
