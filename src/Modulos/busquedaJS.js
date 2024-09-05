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

function limpiar() {
    let contenido = document.getElementById("center");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }

}

export function buscaProducto(value) {
    limpiar();
    var cat = JSON.stringify(value);
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('php/productos.php?prod=' + cat, iniciar)
        .then(function(response) {
            console.log('respuesta del servidor');
            return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                var codigoTarjeta = '<div class="property-card">\
                <a href="#">\
                    <div class="property-image" style="background-image: url(' + data[i].imagen + ');" id="' + data[i].id + '" onclick="infoProducto(this.id)">\
                        <div class="property-image-title"> </div>\
                    </div>\
                </a>\
                <div class="property-description">\
                    <h5> "' + data[i].nombre + '"</h5>\
                    <p style="color: blue;"><b>' + data[i].precio + '€</b></p>\
                    <p><b>Quedan: </b><b style="color: green;"></br> ' + data[i].existencias + ' Unidades</b></p>\
                    <button type="button" id="info">Comprar</button>\
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