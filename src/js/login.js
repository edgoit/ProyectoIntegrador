//Agregamos Datos desde login.html con ById a login.js
const formulario = document.getElementById("form-registro-date");
const btnIngresar = document.querySelector("#ingresar");

// expresiones regulares para  validar email y contraseña.
const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const ert = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

//Declaramos variables que lleva el formulario 
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")

// se manda llamar la funcion evenListener
eventListener();

// Funcion eventListener la cual valida los datos del formulario y el blur El evento blur es disparado cuando un elemento ha perdido su foco
function eventListener() {
    // cuando el formulario arranca
    //document.addEventListener("DOMContentLoaded", iniciarForm);
    email.addEventListener("blur", validacionFormEmail);
    contraseña.addEventListener("blur", validacionFormContraseña);
    //enviar formulario
    formulario.addEventListener("submit", enviar_formulario);
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

        }

    }
}


//Enviar el formulario
function enviar_formulario(f) {
    f.preventDefault();
    
       let valorEmail = er.test(email.value);
       let valorContraseña = ert.test(contraseña.value);

        if(valorEmail == "" || valorContraseña == ""){
      
        // mensaje que dice que la informacion de cotacto tiene errores
        Swal.fire({
            title: 'Error',
            text: 'Los datos de acceso son incorrectos',
            icon: 'warning',
            confirmButtonText: 'Regresar',
            confirmButtonColor: 'black'
        });
    }else{
            // mensaje que dice que el ingreso ha sido exitoso
    
        function EventoAlert(){
            Swal.fire({
                icon: 'success', 
                title: 'Exito',
                text: 'Nos alegra tenerte devuelta',
                confirmButtonText: 'Continuar',
                confirmButtonColor: 'black' 
            
          }).then((result)=>{
            if(result.isConfirmed){
              location="index.html"
            }
          })
          }
          
        
    }

   

}