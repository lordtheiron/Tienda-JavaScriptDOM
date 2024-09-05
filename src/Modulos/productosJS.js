var objetoAjax;

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

export function limpiar() {
    let contenido = document.getElementById("center");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }

}
window.onload = function() {
    sacaOfertas();
    document.querySelectorAll('.subcat').forEach(item => {
        item.addEventListener('click', event => {
            limpiar();
            sacaSubCategoria(item.id);
        });
    });
    document.querySelectorAll('.categoria').forEach(item => {
        item.addEventListener('click', event => {
            limpiar();
            sacaCategoria(item.id);
        });
    });
};

export function sacaOfertas() {
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('php/ofertas.php', iniciar)
        .then(function(response) {
            console.log('respuesta del servidor');
            return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                var codigoTarjeta = '<div class="property-card" >\
                <a href="#">\
                    <div class="property-image" style="background-image: url(' + data[i].imagen + ');" id="' + data[i].id + '" onclick="infoProducto(this.id)">\
                        <div class="property-image-title"> </div>\
                    </div>\
                </a>\
                <div class="property-description">\
                    <h5> "' + data[i].nombre + '"</h5>\
                    <p style="color: blue;"><b>' + data[i].precio + '€</b></p>\
                    <p><b>Descuento del ' + data[i].descuento + '%:</b><b style="color: green;"></br> ' + data[i].precio_descuento + '€</b></p>\
                    <button type="button" id="info">Seleccionar</button>\
                </div>\
                <a href="#">\
                    <div class="property-social-icons"></div>\
                </a>\
                </div>';
                var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
                var divDoc = tarjeta.getRootNode();
                document.getElementById("center").appendChild(divDoc.body);

            }
        })
        .catch(function(err) {
            console.error(err);
        });
}

export function sacaSubCategoria(value) {
    var subcat = JSON.stringify(value);
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('php/subcategorias.php?subcat=' + subcat, iniciar)
        .then(function(response) {
            console.log('respuesta del servidor');
            return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                var codigoTarjeta = '<div class="property-card">\
                <a href="#">\
                    <div class="property-image" style="background-image: url(' + data[i].imagen + ');" id="' + data[i].id + '">\
                        <div class="property-image-title"> </div>\
                    </div>\
                </a>\
                <div class="property-description">\
                    <h5> "' + data[i].nombre + '"</h5>\
                    <p style="color: blue;"><b>' + data[i].precio + '€</b></p>\
                    <p><b>Quedan: </b><b style="color: green;"></br> ' + data[i].existencias + ' Unidades</b></p>\
                    <button type="button" id="info">Seleccionar</button>\
                </div>\
                <a href="#">\
                    <div class="property-social-icons"></div>\
                </a>\
                </div>';
                var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
                var divDoc = tarjeta.getRootNode();
                document.getElementById("center").appendChild(divDoc.body);

            }
        })
        .catch(function(err) {
            console.error(err);
        });
}

export function sacaCategoria(value) {
    var cat = JSON.stringify(value);
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('php/categorias.php?cat=' + cat, iniciar)
        .then(function(response) {
            console.log('respuesta del servidor');
            return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                var codigoTarjeta = '<div class="property-card">\
                <a href="#">\
                    <div class="property-image" style="background-image: url(' + data[i].imagen + ');">\
                        <div class="property-image-title"> </div>\
                    </div>\
                </a>\
                <div class="property-description">\
                    <h5> "' + data[i].nombre + '"</h5>\
                    <p style="color: blue;"><b>' + data[i].precio + '€</b></p>\
                    <p><b>Quedan: </b><b style="color: green;"></br> ' + data[i].existencias + ' Unidades</b></p>\
                    <button type="button" id="info">Seleccionar</button>\
                </div>\
                <a href="#">\
                    <div class="property-social-icons"></div>\
                </a>\
                </div>';
                var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
                var divDoc = tarjeta.getRootNode();
                document.getElementById("center").appendChild(divDoc.body);

            }
        })
        .catch(function(err) {
            console.error(err);
        });
}