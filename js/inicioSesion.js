$("#btn").addEventListener("click", function () {
    let nomUsuario = $("#nombre").value;
    let contrasenia = $("#constrasenia").value;
    if (localStorage.getItem('socios')) {
        let socios = [];
        socios = JSON.parse(localStorage.getItem('socios'));
        let haEntrado = false;
        socios.forEach(socio => {
            if (socio.nombre == nomUsuario && socio.contr == contrasenia) {
                window.location.href = "../html/index.html";
                haEntrado = true;
            }
        });
        if (!haEntrado) {
            var mensaje = document.querySelector(".desaparece");
            mensaje.innerText = "Usuario o contraseña incorrecta";
            mensaje.classList.add("aparece");
            setInterval((e) => {
                mensaje.classList.remove("aparece");
                mensaje.classList.add("desaparece");
            }, 3000);
        }
    }

});

function $(selector) {
    return document.querySelector(selector);
}