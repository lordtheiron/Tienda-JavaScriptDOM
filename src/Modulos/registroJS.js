var objetoAjax;
var cliente = {
    nombre: "",
    email: "",
    dni: "",
    ciudad: "",
    calle: "",
    codPost: ""
}

function AJAXCrearObjeto() {
    if (window.XMLHttpRequest) {
        // navegadores que siguen los estándares
        objetoAjax = new XMLHttpRequest();
    } else {
        // navegadores obsoletos
        objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return objetoAjax;
}

function limpiar() {
    let contenido = document.getElementById("center");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }

}

export function regForm() {
    limpiar();
    var codigoTarjeta = '<div id="login-box">\
                <div class="left">\
                    <form>\
                        <h1>Sign up</h1>\
                        <input type="text" name="nombre" placeholder="Nombre" id="nombre" required/>\
                        <input type="email" name="email" placeholder="E-mail" id="email" required/>\
                        <input type="text" name="dni" placeholder="DNI" id="dni" pattern="[0-9]{8}[A-Za-z]{1}" title="Debe poner 8 números y una letra" required/>\
                        <input type="text" name="ciudad" placeholder="Ciudad" id="ciudad" required/>\
                        <input type="text" name="calle" placeholder="Calle" id="calle" required/>\
                        <input type="text" name="codPost" placeholder="Codigo Postal" id="codPost" maxlength="5" minlength="5" title="Debe contener 5 cifras" required/>\
                        <button type="submit" name="signup_submit" value="Registrarme" id="registrarUsuario">Registrarme</button>\
                    <form/>\
                </div>\
                <div class="right">\
                    <span class="loginwith">Sign in with<br />social network</span>\
                    <button class="social-signin facebook" style="font-size: 16px;">Sign in with facebook</button>\
                    <button class="social-signin twitter" style="font-size: 16px;">Sign in with Twitter</button>\
                    <button class="social-signin google" style="font-size: 16px;">Sign in with Google+</button>\
                </div>\
                <div class="or">OR</div>\
            </div>';
    var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
    var divDoc = tarjeta.getRootNode();
    document.getElementById("center").appendChild(divDoc.body);
}

export function registrar() {
    alert("Entra en registrar()");
    cliente.nombre = document.getElementById("nombre").value;
    cliente.email = document.getElementById("email").value;
    cliente.dni = document.getElementById("dni").value;
    cliente.ciudad = document.getElementById("ciudad").value;
    cliente.calle = document.getElementById("calle").value;
    cliente.codPost = document.getElementById("codPost").value;
    if (cliente.nombre != "" || cliente.email != "" || cliente.dni != "" ||
        cliente.ciudad != "" || cliente.calle != "" || cliente.codPost != "") {
        alert("Registrado");
        const iniciar = {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-type': 'application/json ; charset=utf-8'
            }
        }
        fetch(`php/registrar.php?cliente=${JSON.stringify(cliente)}`, iniciar)
            .then(function(response) {
                console.log('respuesta del servidor');
                return response.json();
            })
            .catch(function(err) {
                console.error(err);
            });
    } else {
        alert("Falta algún dato.");
    }

}