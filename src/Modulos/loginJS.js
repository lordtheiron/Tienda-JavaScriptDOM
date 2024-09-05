import { carro } from './carroJS';
var objetoAjax;

var cliente = {
    email: "",
    clave: ""
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

export function login() {
    limpiar();
    var codigoTarjeta = '<div id="login-box">\
                <div class="left">\
                    <h1>Login</h1>\
                    <input type="email" name="email" placeholder="E-mail" id="email" required/>\
                    <input type="password" name="clave" placeholder="Clave" id="clave" required/>\
                    <button type="submit" name="signup_submit" value="Identificar" id="identificar">Identificarme</button>\
                </div>\
                <div class="right">\
                    <span class="loginwith">Sign in with<br />social network</span>\
                    <button class="social-signin facebook" style="font-size: 16px;">Log in with facebook</button>\
                    <button class="social-signin twitter" style="font-size: 16px;">Log in with Twitter</button>\
                    <button class="social-signin google" style="font-size: 16px;">Log in with Google+</button>\
                </div>\
                <div class="or">OR</div>\
            </div>';
    var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
    var divDoc = tarjeta.getRootNode();
    document.getElementById("center").appendChild(divDoc.body);
}
export function identificar() {
    console.log("Entra en identificar()");
    cliente.email = document.getElementById("email").value;
    cliente.clave = document.getElementById("clave").value;
    if (cliente.email != "" || cliente.clave != "") {
        console.log("Hay datos");
        const iniciar = {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-type': 'application/json ; charset=utf-8'
            }
        }
        fetch(`php/loguear.php?cliente=${JSON.stringify(cliente)}`, iniciar)
            .then(function(response) {
                console.log('respuesta del servidor');
                return response.text();
            })
            .then(function(data) {
                if (data == 1) {
                    alert("Usuario reconocido");
                    carro();
                } else {
                    alert("Usuario no reconocido.");
                }
            })
            .catch(function(err) {
                console.error(err);
            });
    } else {
        alert("Falta algún dato.");
    }
}