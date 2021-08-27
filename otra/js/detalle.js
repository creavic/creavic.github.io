(function(){
    function $(selector){
        return document.querySelector(selector);
    }
    function Contenido(){
        this.detalle = [{tipo: 'alimentos',     filtro: 'rapida',           recomendar: '',     imagen: 'deli-lunch',   nombre: 'Deli Lunch',           categoria: 'Pizzas y más',          precio: 'desde $5.99',   contacto: '979314053',      modal: 'alimentos-1',      descripcion: 'No te quedes con las ganas y saborea nuestros Deli lunch, preparado con ingredientes de calidad y frescos. Entrega los viernes y sábados, envíos gratis para el sector norte de Quito. ¡Anticipa tu pedido!'},
                        {tipo: 'alimentos',     filtro: 'rapida',           recomendar: '',     imagen: 'ejemplo',      nombre: 'Comida',               categoria: 'Hamburguesas',          precio: 'desde $3.20',   contacto: '000111222',      modal: 'alimentos-2',      descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},
                        {tipo: 'alimentos',     filtro: 'postres',          recomendar: '',     imagen: 'ejemplo',      nombre: 'Comida',               categoria: 'Postres',               precio: 'desde $1.40',   contacto: '000111222',      modal: 'alimentos-3',      descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},
                        
                        {tipo: 'belleza',       filtro: 'maquillaje',       recomendar: '',     imagen: 'samy',         nombre: 'Samy Cosmetics',       categoria: 'Maquillaje',            precio: 'Cotízanos',     contacto: '963747675',      modal: 'belleza-1',        descripcion: 'Así como la vida nos inspira con sus colores, queremos inspirar tu vida con los nuestros.'},
                        {tipo: 'belleza',       filtro: 'maquillaje',       recomendar: '',     imagen: 'astra',        nombre: 'Astra Make Up',        categoria: 'Maquillaje',            precio: 'Cotízanos',     contacto: '981286887',      modal: 'belleza-2',        descripcion: 'Marca Italiana de maquillaje, desde 1988 ahora en Ecuador. ¡BE YOU! ¡Única todos los días!'},
                        {tipo: 'belleza',       filtro: 'cremas',           recomendar: '',     imagen: 'skin',         nombre: 'SkinSystem',           categoria: 'Cremas',                precio: 'Cotízanos',     contacto: '979374351',      modal: 'belleza-3',        descripcion: 'Línea dermocosmética Italiana 100% natural e hipoalergénica, con formulaciones innovadoras. Libre de: parabenos, parafinas y sles.'},
                        {tipo: 'belleza',       filtro: 'cremas',           recomendar: '',     imagen: 'transparent',  nombre: 'Transparent Clinic',   categoria: 'Cremas',                precio: 'Cotízanos',     contacto: '979374351',      modal: 'belleza-4',        descripcion: 'Línea cosmética profesional Española de uso diario, con ingredientes activos propios del mediterráneo. Creada para personas interesadas en cuidar su piel con resultados eficaces y a un precio asequible.'},
                        {tipo: 'belleza',       filtro: 'cremas',           recomendar: '',     imagen: 'tommy',        nombre: 'Tommy G',              categoria: 'Mascarillas',           precio: 'Cotízanos',     contacto: '979374351',      modal: 'belleza-5',        descripcion: 'Mascarillas PEEL-OFF Griegas con activos de última generación y compuestos naturales.'},
                        {tipo: 'belleza',       filtro: 'salones',          recomendar: '',     imagen: 'liut',         nombre: 'Liut Beauty Shop',     categoria: 'Tienda de belleza',     precio: 'Cotízanos',     contacto: '981286887',      modal: 'belleza-6',        descripcion: 'Beauty Supply más completo del pais. Servicios y productos de belleza. Creemos en el poder de tu belleza y en tu capacidad infinita de brillar en cada paso. Deléitate en nuestro mundo de color e inspiración.'},

                        {tipo: 'ropa',          filtro: 'calentadores',     recomendar: '',     imagen: 'ejemplo',      nombre: 'Ropa',                 categoria: 'Calentadores',          precio: 'desde $9.99',   contacto: '000111222',      modal: 'ropa-1',           descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},
                        {tipo: 'ropa',          filtro: 'pijamas',          recomendar: '',     imagen: 'ejemplo',      nombre: 'Ropa',                 categoria: 'Pijamas',               precio: 'desde $12',     contacto: '000111222',      modal: 'ropa-2',           descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},
                        {tipo: 'ropa',          filtro: 'zapatos',          recomendar: '',     imagen: 'ejemplo',      nombre: 'Ropa',                 categoria: 'Zapatos',               precio: 'desde $19.99',  contacto: '000111222',      modal: 'ropa-3',           descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},

                        {tipo: 'educacion',     filtro: 'tutorias',         recomendar: '',     imagen: 'x-portado',    nombre: 'X-portado',            categoria: 'Diseño gráfico',        precio: '$15/hora',      contacto: '992568518',      modal: 'educacion-1',      descripcion: 'Aprende a diseñar, editar fotografías y videos. Elige tu software preferido: Illustrador, Photoshop, InDesign, Xd, After Effects y Premiere. Clases online totalmente personalizada, el horario es a convenir.'},
                        {tipo: 'educacion',     filtro: 'tutorias',         recomendar: '',     imagen: 'webcode',      nombre: 'Webcode',              categoria: 'Programación web',      precio: '$20/hora',      contacto: '992568518',      modal: 'educacion-2',      descripcion: 'Aprende a maquetar tu propia página web mediante el uso de código HTML, CSS y Bootstrap. Dirigido para personas con o sin conocimiento previo. Clases online totalmente personalizada, el horario es a convenir.'},
                        {tipo: 'educacion',     filtro: 'tutorias',         recomendar: '',     imagen: 'seteando',     nombre: 'Seteando',             categoria: 'Fotografía',            precio: '$10/hora',      contacto: '992568518',      modal: 'educacion-3',      descripcion: 'Aprende a manejar tu cámara profesional y sus formatos para un retoque profesional. Dirigido a personas con o sin conocimiento previo. Clases online totalmente personalizada, el horario es a convenir.'},
                        {tipo: 'educacion',     filtro: 'utiles',           recomendar: '',     imagen: 'ejemplo',      nombre: 'Tienda1',              categoria: 'Útiles',                precio: 'desde $1.40',   contacto: '000111222',      modal: 'educacion-4',      descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},

                        {tipo: 'acti',          filtro: 'defensa',          recomendar: '',     imagen: 'ukiyo',        nombre: 'Ukiyo',                categoria: 'Karate-Do Shotokan',    precio: '$30/mes',       contacto: '992568518',      modal: 'acti-1',           descripcion: '¡Practica la mejor arte marcial! Mejora tu físico, disciplina y autoconfianza. Dirigido para niños y adolecentes. Clases online los días: lunes, miércoles y viernes, de 18:00h a 19:00h / 19:00h a 20:00h.'},
                        {tipo: 'acti',          filtro: 'defensa',          recomendar: '',     imagen: 'kawasu',       nombre: 'Kawasu',               categoria: 'Kick Boxing',           precio: '$25/mes',       contacto: '992568518',      modal: 'acti-2',           descripcion: 'Aprende a defenderte. Gana resistencia, agilidad y autoreflejo. Dirigido para niños y adolecentes. Clases online los días: lunes, miércoles y viernes, de 18:00h a 19:00h / 19:00h a 20:00h.'},
                        {tipo: 'acti',          filtro: 'gimnasio',         recomendar: '',     imagen: 'ejemplo',      nombre: 'Marcos Fit95',         categoria: 'Entrenador personal',   precio: '$50/mes',       contacto: '000111222',      modal: 'acti-3',           descripcion: 'Aqui va la descripción de tu emprendimiento de forma breve y persuasiva. Debe tener un mínimo de 30 palabras y un máximo de 55. Es importante que la elabores bien para que las personas decidan contactarte.'},

                        {tipo: 'servicios',     filtro: 'publicidad',       recomendar: '',     imagen: 'creavic',      nombre: 'Creavic Design',       categoria: 'Agencia Publicitaria',  precio: 'Cotízanos',     contacto: '992568518',      modal: 'servicios-1',      descripcion: 'Cubrimos tu necesidad comunicacional a través de soluciones publicitarias efectivas. Ofrecemos: Imagen corporativa, Editorial, Multimedia, Fotografía, Modelado 3D, Audiovisual, Páginas Web y Redes sociales.'},
                        {tipo: 'servicios',     filtro: 'publicidad',       recomendar: '',     imagen: 'ocrimag',      nombre: 'OCRIMAG',              categoria: 'Publicidad',            precio: 'Cotízanos',     contacto: '995251125',      modal: 'servicios-2',      descripcion: 'Servicio de diseño gráfico. Modelamos propósitos comerciales y particulares con eficientes alternativas comunicacionales como: Imagen Corporativa, Rotulación, Letra 3D, Brandeo, Promocionales y Material P.O.P.'},
                        {tipo: 'servicios',     filtro: 'eventos',          recomendar: '',     imagen: 'enfoke',       nombre: 'Enfoke',               categoria: 'Fotografía y Video',    precio: 'Cotízanos',     contacto: '992568518',      modal: 'servicios-3',      descripcion: 'Capturamos los mejores momentos de tu evento en fotografía y video. Pregunta por nuestros paquetes para que el recuerdo perdure de inicio a fin. Cubrimos: Bodas, Cumpleaños, Baby shower, graduaciones y más.'}]
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
                                        <img src="img/cerrar2.svg" width="25px" class="mt-md-5 mt-3 mr-md-5 mr-3">
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
                                                        <img src="img/whatsapp.svg" class="mr-2">
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
    var contenido = new Contenido();
    var contenido_view = new Contenido_View();
    document.addEventListener('DOMContentLoaded',function(){
        contenido_view.renderDetalle();
    });
})();
