function validarNombre() {
    let nombre = $("#nombre").value;
    let estaCorrecto = true;
    if (nombre == "") {
        estaCorrecto = "Campo nombre vacio";
    }
    return estaCorrecto;
}
function validarApellidos() {
    let apellidos = $("#apellidos").value;
    let estaCorrecto = true;
    if (apellidos == "") {
        estaCorrecto = "Campo apellidos vacio";
    }
    return estaCorrecto;
}
function validarDNI() {
    let dni = $("#dni").value;
    let estaCorrecto = true;
    var regexdni = /^(\d{8})([A-Z])$/;
    if (dni == "") {
        estaCorrecto = "Campo DNI vacio";
    } else if (!regexdni.test(dni)) {
        estaCorrecto = "DNI no valido";
    }
    return estaCorrecto;
}
function validarFn() {
    let fn = $("#fn").value;
    let estaCorrecto = true;
    if (fn == "") {
        estaCorrecto = "Campo fecha nacimiento vacio";
    }
    return estaCorrecto;
}
function validarEmail() {
    let email = $("#email").value;
    let estaCorrecto = true;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (email == "") {
        estaCorrecto = "Campo email vacio, rellena el campo";
    } else if (!emailRegex.test(email)) {
        estaCorrecto = "Email no valido";
    }
    return estaCorrecto;
}
function validarTfn() {
    let telefono = $("#telefono").value;
    let estaCorrecto = true;
    tfnRegex = /^\d{9}$/;
    if (telefono == "") {
        estaCorrecto = "Campo telefono vacio";
    } else if (!tfnRegex.test(telefono)) {
        estaCorrecto = "Telefono no valido";
        telefono.textContent = "";
    }
    return estaCorrecto;
}
function validarContr() {
    let contr = $("#contr").value;
    let estaCorrecto = true;
    if (contr == "") {
        estaCorrecto = "Campo contrasenia vacio";
        contr.onblur;
    }
    return estaCorrecto;
}
function validarContrX2() {
    let contrX2 = $("#contrX2").value;
    let estaCorrecto = true;
    if (contrX2 == "") {
        estaCorrecto = "Campo de volver a escribir la contrasenia vacio";
        contrX2.onblur;
    }
    return estaCorrecto;
}
function validarIban() {
    let iban = $("#iban").value;
    let estaCorrecto = true;
    regexIban = /^(ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4})|(ES\d{22})$/;
    if (iban == "") {
        estaCorrecto = "Campo iban vacio";
    } else if (!regexIban.test(iban)) {
        estaCorrecto = "Iban no valido";
    }
    return estaCorrecto;
}

function validarFc() {
    let fc = $("#fc").value;
    let estaCorrecto = true;
    if (fc == "") {
        estaCorrecto = "Campo fecha de caducidad vacio";
    }
    return estaCorrecto;
}

function validarCCV() {
    let ccv = $("#ccv").value;
    let estaCorrecto = true;
    if (ccv == "") {
        estaCorrecto = "Campo CCV vacio";
    }
    return estaCorrecto;
}