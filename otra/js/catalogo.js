var url = "../js/productos.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
var datos;
    
oReq.onload = function(e) {
    datos = readData();

    function $(selector){
        return document.querySelector(selector);
    }

    function Carrito(){
        this.catalogo = datos;
    }
    function Carrito_View(){
        this.renderCatalogo = function(){
            var template = ``;
            for (var i in carrito.catalogo) {
                template += `
                    <div class="col-xl-3 col-lg-4 col-md-4 col-6 filtro ${carrito.catalogo[i].categoria}" category="${carrito.catalogo[i].tipo}">
                        <div class="caja">
                            <a class="producto">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="${carrito.catalogo[i].recomendar=='si'?'recomendadosi':'recomendado'}"><img src="../img/estrella.svg" class="estrella">Recomendado</div>
                                        <div style="background-image: url(img/${carrito.catalogo[i].imagen}/portada.jpg);" class="foto"></div>
                                    </div>
                                    <div class="col-12 info">
                                        <h5 class="tx-bold tx-negro mb-1">${carrito.catalogo[i].nombre}</h5>
                                        <h6 class="tx-gris mb-2">${carrito.catalogo[i].categoria}</h6>
                                        <h6>Precio: ${carrito.catalogo[i].precio}</h6>
                                        <button class="btn bt-agregar" data-toggle="modal" data-target="#${carrito.catalogo[i].modal}" onclick="gtag('event', 'Click', { 'event_category': 'Detalle', 'event_label': '${carrito.catalogo[i].nombre}'});">Ver detalle</button>
                                    </div>
                                </div>
                            </a>
                        </div>  
                    </div>    
                `;
            }
            $("#catalogo").innerHTML = template;
        }
    }

    function Contenido(){
        this.detalle = datos;
    }
    function Contenido_View(){
        this.renderDetalle = function(){
            var template = ``;
            for (var i in contenido.detalle) {
                template += `
                    <div class="modal fade" id="${contenido.detalle[i].modal}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <!-- Carrusel -->
                                <div id="carouselExampleIndicators${contenido.detalle[i].modal}" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators${contenido.detalle[i].modal}" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators${contenido.detalle[i].modal}" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators${contenido.detalle[i].modal}" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="img/${contenido.detalle[i].imagen}/1.jpg" alt="First slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="img/${contenido.detalle[i].imagen}/2.jpg" alt="Second slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="img/${contenido.detalle[i].imagen}/3.jpg"" alt="Third slide">
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${contenido.detalle[i].modal}" role="button" data-slide="prev">
                                        <div class="controles-fondo">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </div>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators${contenido.detalle[i].modal}" role="button" data-slide="next">
                                        <div class="controles-fondo">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </div>
                                    </a>
                                </div>
                                <!-- Cerrar -->
                                <div class="bt-cerrar">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <img src="../img/cerrar2.svg" width="25px" class="mt-md-5 mt-3 mr-md-5 mr-3">
                                    </button>
                                </div>
                                <!-- Contenido -->
                                <div class="modal-body pt-md-2 pt-1 pb-4">
                                    <div class="row justify-content-center py-3 px-md-5 px-4">
                                        <div class="col-12 text-center">
                                            <h3 class="tx-bold tx-negro mb-1">${contenido.detalle[i].nombre}</h3>
                                            <h5 class="tx-gris mb-2">${contenido.detalle[i].categoria}</h5>
                                            <div class="info">
                                                <h5 class="tx-bold">Descripción:</h5>
                                                <h6 class="tx-gris">${contenido.detalle[i].descripcion}</h6>
                                                <h5><span class="tx-bold">Precio:</span> ${contenido.detalle[i].precio}</h5>
                                            </div>
                                            <h6 class="mt-3 mb-2 tx-bold tx-turqueza">¿Necesitas más información?</h6>
                                            <div class="row justify-content-center">
                                                <div class="col-md-5 col-10"> 
                                                    <a href="https://api.whatsapp.com/send?phone=593${contenido.detalle[i].contacto}&text=¡Hola ${contenido.detalle[i].nombre}! Encontré tu emprendimiento en exhibidos. ¿Me puedes ayudar con más información?" target="blank" class="btn bt-agregar" onclick="gtag('event', 'Click', { 'event_category': 'Contactar', 'event_label': '${contenido.detalle[i].nombre}'});">
                                                        <img src="../img/whatsapp.svg" class="mr-2">
                                                        Contáctanos
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                `;
            }
            $("#detalle").innerHTML = template;
        }
    }
    
    var carrito = new Carrito();
    var carrito_view = new Carrito_View();
    carrito_view.renderCatalogo();

    var contenido = new Contenido();
    var contenido_view = new Contenido_View();
    contenido_view.renderDetalle();
    
    function readData() {
        var arraybuffer = oReq.response;
        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        /* Traer el excel */
        var workbook = XLSX.read(bstr, {type:"binary"});
        /* Se elige que pestaña del excel se va a leer */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        var datos = XLSX.utils.sheet_to_json(worksheet);
        return datos;
    }
}
oReq.send();