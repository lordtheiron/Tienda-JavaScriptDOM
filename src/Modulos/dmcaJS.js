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

export function dmca() {
    limpiar();
    var codigoTarjeta = '   <h1 class="my-4">DMCA\
    <small> in ElAmigos-Games</small>\
  </h1>\
  <p style="color: white; font-size: large;">\
      <a href="#" target="_blank">TheranGames.com</a>\
       does not host any of the video links available on this website and nor does it engage in copying\
        or uploading video games or movies to any website. <a href="#" target="_blank">TheranGames.com</a>\
         is merely an index of available games on the internet mostly on the popular hosting sources like Google, DailyMotion, Facebook, MySpace, VK, KAT, Thepirate and YouTube.\
          <a href="#" target="_blank">TheranGames.com</a> is not responsible for video game content hosted on third party websites.\
           Therefore, Copyright infringement notices should be directed to the responsible third party websites where the content is actually hosted.\
            If you believe that any of the content above, links to content that infringes your copyright, please contact the respective third party\
             websites for removal of your content off the internet. Please write to us at <strong>dmca@therangames.com</strong>\
              , if you have any questions or concerns.</p>\
              <img src="img/elite.png">';
    var tarjeta = new DOMParser().parseFromString(codigoTarjeta, "text/html");
    var divDoc = tarjeta.getRootNode();
    document.getElementById("center").appendChild(divDoc.body);
}