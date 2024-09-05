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

function infoProducto(value) {
    limpiar();
    var idProd = JSON.stringify(value);
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('php/infoProd.php?prod=' + idProd, iniciar)
        .then(function(response) {
            console.log('respuesta del servidor');
            return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {


                var codigoTarjeta = '   <div class="product">\
                    <div class="header">\
                    <div class="back"></div>\
                </div>\
                <div class="main">\
                    <div class="left">\
                        <h1 id="">' + data[i].nombre + '</h1>\
                        <img src="' + data[i].imagen + '" alt="" />\
                    </div>\
                    <div class="right">\
                        <p>' + data[i].descripcion + '</p>\
                        <p>En stock: <a href="">' + data[i].existencias + ' Unidades</a></p>\
                        <form>\
                        <p class="clasificacion">\
                          <input id="radio1" type="radio" name="estrellas" value="5"><!--\
                          --><label for="radio1">★</label><!--\
                          --><input id="radio2" type="radio" name="estrellas" value="4"><!--\
                          --><label for="radio2">★</label><!--\
                          --><input id="radio3" type="radio" name="estrellas" value="3"><!--\
                          --><label for="radio3">★</label><!--\
                          --><input id="radio4" type="radio" name="estrellas" value="2"><!--\
                          --><label for="radio4">★</label><!--\
                          --><input id="radio5" type="radio" name="estrellas" value="1"><!--\
                          --><label for="radio5">★</label>\
                        </p>\
                      </form>\
                        <p class="quantity">CANTIDAD <span class="fa fa-angle-left angle"></span><span id="qt">' + data[i].id + '</span><span class="fa fa-angle-right angle"></span></p>\
                    </div>\
                </div>\
                <div class="footer">\
                    <div class="left">\
                        <p id="price">' + data[i].precio + '€</p>\
                    </div>\
                    <div class="right">\
                        <p id="alCarro">Add to Cart</p>\
                    </div>\
                </div>\
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