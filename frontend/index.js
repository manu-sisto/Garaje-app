let patente = document.querySelector("#patente").value
let tipo = document.querySelector("#ftipo").value

const form = document.querySelector("#fregistro")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

const entra = document.querySelector("#entra") //onclick?
entra.onclick = ingresaVehiculo


//hacer una funcion que: agarre los datos del FORM y cree una fila en la tabla con los datos

function ingresaVehiculo(e) {
    patente = document.querySelector("#patente").value
    tipo = document.querySelector("#ftipo").value
    console.log(patente)
    console.log(tipo)
    form.reset()
}

function sumar (num1, num2) {
    let suma = num1 + num2
    return suma
}


var d = new Date();
var dia = d.getDate();
var mes = d.getMonth();
var año = d.getFullYear();
var hora = d.getHours();
var minutos = d.getMinutes();



