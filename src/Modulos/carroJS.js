var objetoAjax;
var idProd;
var cliente = {
    email: "",
    clave: "",
    idProducto: ""
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

export function idenCarro(datoProd) {
    limpiar();
    idProd = datoProd;
    var codigoTarjeta = '<div id="login-box">\
                <div class="left">\
                    <h1>Login</h1>\
                    <input type="email" name="email" placeholder="E-mail" id="email" required/>\
                    <input type="password" name="clave" placeholder="Clave" id="clave" required/>\
                    <button type="submit" name="signup_submit" value="Identificar" id="identCli">Identificarme</button>\
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
export function identificarUs() {
    console.log("Entra en identificar()");
    cliente.email = document.getElementById("email").value;
    cliente.clave = document.getElementById("clave").value;
    cliente.idProducto = idProd;
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
export function llenaCarro() {

}
export function carro() {
    limpiar();
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('php/carro.php?prod=' + 1, iniciar)
        .then(function(response) {
            console.log('respuesta del servidor');
            return response.json();
        })
        .then(function(data) {
            var codigoTarjeta = '<table class="greyGridTable">\
                            <thead>\
                                <tr>\
                                    <th>head1</th>\
                                    <th>head2</th>\
                                </tr>\
                            </thead>\
                            <tfoot>\
                                <tr>\
                                    <td>foot1</td>\
                                    <td>foot2</td>\
                                    <td>foot3</td>\
                                    <td>foot4</td>\
                                </tr>\
                            </tfoot>\
                            <tbody>\
                                <tr>\
                                    <td>cell1_1</td>\
                                    <td>cell2_1</td>\
                                    <td>cell3_1</td>\
                                    <td>cell4_1</td>\
                                </tr>\
                                <tr>\
                                    <td>cell1_2</td>\
                                    <td>cell2_2</td>\
                                    <td>cell3_2</td>\
                                    <td>cell4_2</td>\
                                </tr>\
                                <tr>\
                                    <td>cell1_3</td>\
                                    <td>cell2_3</td>\
                                    <td>cell3_3</td>\
                                    <td>cell4_3</td>\
                                </tr>\
                                <tr>\
                                    <td>cell1_4</td>\
                                    <td>cell2_4</td>\
                                    <td>cell3_4</td>\
                                    <td>cell4_4</td>\
                                </tr>\
                            </tbody>\
                        </table>';
            var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
            var divDoc = tarjeta.getRootNode();
            document.getElementById("center").appendChild(divDoc.body);

        })
        .catch(function(err) {
            console.error(err);
        });
}