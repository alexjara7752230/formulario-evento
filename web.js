document.getElementById("formulario").addEventListener("submit", function(e) {

e.preventDefault(); 

let valido = true;

document.querySelectorAll(".error").forEach(el => el.textContent = "");
document.getElementById("mensajeExito").textContent = "";

let nombre = document.getElementById("nombre").value.trim();
let email = document.getElementById("email").value.trim();
let edad = document.getElementById("edad").value;
let fecha = document.getElementById("fecha").value;
let tipo = document.getElementById("tipo").value;

if (!email.includes("@")) {
    document.getElementById("errorEmail").textContent = "El email no es válido";
    valido = false;
}

if (edad < 18) {
    document.getElementById("errorEdad").textContent = "Debes ser mayor de edad";
    valido = false;
}

let hoy = new Date().toISOString().split("T")[0];
if (fecha < hoy) {
    document.getElementById("errorFecha").textContent = "La fecha no puede ser anterior a hoy";
    valido = false;
}

if (tipo === "") {
    document.getElementById("errorTipo").textContent = "Selecciona un tipo de entrada";
    valido = false;
}

if (valido) {
    document.getElementById("mensajeExito").textContent = "Formulario enviado correctamente";
    document.getElementById("formulario").reset();
}

});
