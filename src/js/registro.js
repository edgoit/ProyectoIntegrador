//Agregamos Datos desde contacto.html con ById a registro.js
const formulario = document.getElementById("form-registro-date");
const btnReset = document.getElementById("resetBtn");
const btnEnviar = document.querySelector("#enviar");

// decalramos eel arreglo para el local storage
let arrayUsuario = [];

//agregamos la funcion para enviar los datos del registro al localStorage
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let rol = document.getElementById("rol").value;
    let cliente = {
      'email' : email,
      'usuario' : usuario,
      'contrasena' : contrasena,
      'rol' : rol
    };
  
    arrayUsuario.push(cliente);
    let json = JSON.stringify(arrayUsuario);
    localStorage.setItem("usersData", json);
    console.log("cliente agregado");
  });
  


// expresiones regulares para  validar nombre, email, telefono, y contraseña
const ern = /[a-zA-Z]/;
const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const ert = /^(\(?\+?[\d]{1,3}\)?)\s?([\d-]{1,3})\s?([\d][\s\.-]?){6,8}$/;
const erc=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;


//Declaramos variables que lleva el formulario 
let usuario = document.getElementById("usuario");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let contrasena = document.getElementById("contrasena");
let contrasena2 = document.getElementById("contrasena2");
let comparacion = false;


// se manda llamar la funcion evenListener
eventListener();


// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
    // cuando el formulario arranca
    //document.addEventListener("DOMContentLoaded", iniciarForm);
    usuario.addEventListener("blur", validacionFormNombre);
    email.addEventListener("blur", validacionFormEmail);
    telefono.addEventListener("blur", validacionFormTelefono);
    contrasena.addEventListener("blur", validacionFormContrasena);
    contrasena2.addEventListener("blur", validacionFormContrasena2);
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

// validacion no permite ingresar numeros en input nombre
formulario.usuario.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.usuario.value = valorInput.replace(/[0-9]/g, '');
});

// validacion no permite ingresar letras en input telefono
formulario.telefono.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.telefono.value = valorInput.replace(/[a-zA-Z]/g, '');
});

// validacion no permite ingresar mayusculas en input email
formulario.email.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.email.value = valorInput.replace(/[A-Z]/g, '');
});

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
function validacionFormContrasena(c) {
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
function validacionFormContrasena2(c2) {
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
    var password = document.querySelector("#contrasena").value;
    var password2 = document.querySelector("#contrasena2").value;
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

 let usuariosRegistrados = [];

//Enviar el formulario
function enviar_formulario(f) {
    f.preventDefault();
       let valorNombre = ern.test(usuario.value);
       let valorTelefono = ert.test(telefono.value);

        if(valorNombre == "" || valorTelefono == "" || comparacion == false){
        // mensaje que dice que la informacion de registro tiene errores
        Swal.fire({
            title: 'Error',
            text: 'La información de registro contiene errores o las contraseñas con coinciden',
            icon: 'Danger',
            confirmButtonText: 'Continuar',
            confirmButtonColor: 'black'
        });
    }else{

        let newUser = {
            "usuario" : usuario.value,
            "email" : email.value,
            "telefono" : telefono.value,
            "contrasena" : contrasena.value
        }
        //console.log(newUser);
        usuariosRegistrados.push(newUser);

        let jsonUsuario = JSON.stringify(usuariosRegistrados);
        //console.log(typeof jsonUsuario);
        localStorage.setItem("usersData", jsonUsuario);
       
        // mensaje que dice que el registro se hizo correctamente correctamente 
        Swal.fire({
            icon: 'success', 
            title: 'Registro exitoso',
            confirmButtonText: 'Continuar',
            confirmButtonColor: 'black' 
        }).then((result)=>{
            if(result.isConfirmed){
              location="login.html"
            }
          });
        
    }

    
}



//Reinicia el formulario 
formulario.addEventListener("reset", (e) => {
    e.preventDefault();
    usuario.value = "";
    email.value = "";
    telefono.value = "";
    contrasena.value = "";
    contrasena2.value = "";
});
