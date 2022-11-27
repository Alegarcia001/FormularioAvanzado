let btn = $("#btn").text;
let btn2 = $("#btn2").text;
let btn3 = $("#btn3").text;
let btn4 = $("#btn4").text;

"use strict";
class socio {
    constructor(nombre, apellidos, dni, fn, tfn, email, contr) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fn = fn;
        this.tfn = tfn;
        this.email = email;
        this.contr = contr;
    }
    introducirDatos() {
        let socio = {
            'nombre': this.nombre,
            'apellidos': this.apellidos,
            'dni': this.dni,
            'fn': this.fn,
            'tfn': this.tfn,
            'email': this.email,
            'contr': this.contr
        }
        let socios = [];
        if (localStorage.getItem('socios')) {
            socios = JSON.parse(localStorage.getItem('socios'));
        }
        socios.push(socio);
        localStorage.setItem('socios', JSON.stringify(socios));
    }

}
$("#btn").addEventListener("click", function () {
    if (!validarNombre()) {
        e.preventDefault();
    } else if (!validarApellidos()) {
        e.preventDefault();
    } else if (!validarEmail()) {
        e.preventDefault();
    } else if (!validarTfn) {
        e.preventDefault();
    } else if (!validarDNI()) {
        e.preventDefault();
    }
});

$("#btn").addEventListener("click", function () {
    var validarNom = validarNombre();
    var validarApe = validarApellidos();
    var validarDni = validarDNI();
    var validarFechaN = validarFn();
    var validarTelef = validarTfn();
    var validarEmails = validarEmail();
    var validarContras = validarContr();
    var validarContras2 = validarContrX2();
    if (validarNom != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarNom;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarApe != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarApe;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarDni != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarDni;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarFechaN != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarFechaN;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarTelef != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarTelef;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarEmails != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarEmails;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarContras != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarContras;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarContras2 != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarContras2;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (contr.value != contrX2.value) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = "Las contraseñas deben ser iguales";
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else {
        var primParte = $("#primParte");
        var segunParte = $("#segunParte");
        primParte.classList.add("desaparece");
        segunParte.classList.remove("desaparece");
        segunParte.show;
        var socio1 = new socio($("#nombre").value, $("#apellidos").value, $("#dni").value, $("#fn").value,
            $("#telefono").value, $("#email").value, $("#contr").value);
        socio1.introducirDatos();
    }
});
let precio = 0;


$("#btn2").addEventListener("click", function () {
    var segunParte = $("#segunParte");
    if (document.querySelector('input[value="20"]:checked')) {
        precio = 20;
        segunParte.classList.add("desaparece");
        terceraParte.classList.remove("desaparece");
        terceraParte.show;
    } else if (document.querySelector('input[value="50"]:checked')) {
        precio = 50;
        segunParte.classList.add("desaparece");
        terceraParte.classList.remove("desaparece");
        terceraParte.show;
    } else if (document.querySelector('input[value="95"]:checked')) {
        precio = 95;
        segunParte.classList.add("desaparece");
        terceraParte.classList.remove("desaparece");
        terceraParte.show;
    } else if (document.querySelector('input[value="170"]:checked')) {
        precio = 170;
        segunParte.classList.add("desaparece");
        terceraParte.classList.remove("desaparece");
        terceraParte.show;
    } else {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = "Debes seleccionar un paquete";
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    }
});

$("#btn3").addEventListener("click", function () {
    var ultParte = $("#ultParte");
    if (document.querySelector('input[name="Spinning"]:checked')) {
        precio = precio + 10;
    }
    if (document.querySelector('input[name="Crossfit"]:checked')) {
        precio = precio + 10;
    }
    if (document.querySelector('input[name="TRX"]:checked')) {
        precio = precio + 10;
    }
    if (document.querySelector('input[name="Calistenia"]:checked')) {
        precio = precio + 10;
    }
    if (document.querySelector('input[name="HIT"]:checked')) {
        precio = precio + 10;
    }
    terceraParte.classList.add("desaparece");
    ultParte.classList.remove("desaparece");
    ultParte.show;
    var mensaje = document.querySelector("#mensaje");
    mensaje.innerText = "El precio a pagas es "+precio+"€";
    mensaje.classList.add("aparece");
    setInterval((e) => {
        mensaje.classList.remove("aparece");
        mensaje.classList.add("desaparece");
    }, 3000);
});
$("#btn4").addEventListener("click", function () {
    var validarIb = validarIban();
    var validarfechaC = validarFc();
    var validarCcv = validarCCV();
    if (validarIb != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarIb;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarfechaC != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarfechaC;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else if (validarCcv != true) {
        var mensaje = document.querySelector("#mensaje");
        mensaje.innerText = validarCcv;
        mensaje.classList.add("aparece");
        setInterval((e) => {
            mensaje.classList.remove("aparece");
            mensaje.classList.add("desaparece");
        }, 3000);
    } else {
        window.location.href = "../html/index.html";
    }
});
function $(selector) {
    return document.querySelector(selector);
}