import { sacaOfertas, limpiar, sacaSubCategoria, sacaCategoria } from './Modulos/productosJS';
import { buscaProducto } from './Modulos/busquedaJS';
import { regForm, registrar } from './Modulos/registroJS';
import { dmca } from './Modulos/dmcaJS';
import { login, identificar } from './Modulos/loginJS';
import { idenCarro, identificarUs, LLenaCarro, carro } from './Modulos/carroJS';

window.onload = function() {
    limpiar();
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
    document.getElementById("searchBar").addEventListener('keypress', event => {
        limpiar();
        buscaProducto(document.getElementById('searchBar').value);
    });

    document.getElementById("registrarse").addEventListener('click', event => {
        limpiar();
        regForm();
        document.getElementById("registrarUsuario").addEventListener('click', event => {
            registrar();
        });
    });
    document.getElementById("dmca").addEventListener('click', event => {
        dmca();
    });
    document.getElementById("carro").addEventListener('click', event => {
        login();
        document.getElementById("identificar").addEventListener('click', event => {
            identificar();
        });
    });
    document.getElementById("alCarro").addEventListener('click', event => {
        var id = document.getElementById("qt").id
        idenCarro(id);
        document.getElementById("identCli").addEventListener('click', event => {
            identificarUs();
        });
    });
}