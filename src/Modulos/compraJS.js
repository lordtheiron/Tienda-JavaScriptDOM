var objetoAjax;
var carro = {
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