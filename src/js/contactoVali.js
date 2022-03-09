function validacionForm(nombre, email, telefono, mensaje) {
    let valinombre = nombre.value;
    let valiemail = email.value;
    let valitelefono = telefono.value;
    let valimensaje = mensaje.value;
    let truemail = true;

    if (valiemail === "") {
        email.classList.add("is-invalid");
        truemail = false;
        console.log(truemail);


    }

    if (valiemail = !valiemail.includes("@")) {


        truemail = false;
        console.log(truemail);

        email.classList.add("is-invalid");

    }






    if (valitelefono === "") {
        telefono.classList.add("is-invalid");

    } if (valinombre === "") {
        nombre.classList.add("is-invalid")

    } if (valimensaje === "") {
        mensaje.classList.add("is-invalid");
    }


    return truemail;
}
const formAddDate = document.getElementById("form-registro-date");

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");

//let ancla = document.getElementById("wrapper");


formAddDate.addEventListener("submit", (evento) => {

    evento.preventDefault();
    let n = validacionForm(nombre, email, telefono, mensaje);
    console.log(n);
    let valinombre = nombre.value;
    let valiemail = email.value;
    let valitelefono = telefono.value;
    let valimensaje = mensaje.value;





})
