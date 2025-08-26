// Llave de API y ID de hoja de cálculo de Google Sheets
const API_KEY = 'AIzaSyAGMHgnyWuzrmM-tOjrL-Ph_tRI3r4rFZw';
const SPREADSHEET_ID = '1Hw2-E8TWrqFPtPFQM7DjlA9rj-Mm9jeVAprqmzeYun4';

// Objeto carrito
const carrito = {
    catalogo: [],
    detalle: []
};

// Función para cargar la API de Google y luego inicializar el cliente
function loadGoogleAPI() {
    gapi.load('client', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(() => {
        // Llama a la función para cargar los datos de la hoja de cálculo
        loadSheetData1();
        loadSheetData2();
    });
}

// Carga los textos del titular y subtitular de la página
function loadSheetData1() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Textos', // Rango de celdas que contienen los textos
    }).then(function(response) {
      const values = response.result.values;

        const titulo = values[0][1];
        const subtitulo = values[1][1];
  
        // Actualizar los elementos HTML con los textos obtenidos
        document.getElementById('titulo').innerText = titulo;
        document.getElementById('subtitulo').innerText = subtitulo;
    })
}

// Carga los datos de los productos
function loadSheetData2() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Copia de Productos!A2:H', // Se indica que lea a partir de la segunda fila, así excluye la info de la primera fila
    }).then((response) => {
        // Obtiene los datos de la respuesta
        const sheetData = response.result.values;

        // Convierte los datos
        carrito.catalogo = sheetData.map(row => ({
            Categoria: row[0],
            Subcategoria: row[1],
            Producto: row[2],
            Codigo: row[3],
            Precio: row[4],
            Stock: row[5],
            Caracteristicas: row[6],
            Recomendar: row[7],
        }));

        // Renderiza el catálogo y detalles
        renderCatalogo();
        renderDetalle();
    });
}

// Maneja el cambio en el select de envío
document.getElementById('envioOpciones').addEventListener('change', function() {
    // Actualizar el carrito cuando cambie la opción de envío
    verCarrito();
});

function $(selector) {
    return document.querySelector(selector);
}

function renderCatalogo() {
    var template = ``;
    for (var i in carrito.catalogo) {
        var producto = carrito.catalogo[i];
        // Verifica si el producto está en el carrito
        var estaEnCarrito = carrito.detalle.some(item => item.Codigo === producto.Codigo);
        // Determina si el botón debe estar habilitado o deshabilitado
        var botonEstado = estaEnCarrito ? 'bt-inactivo' : '';
        // Determina el texto del botón
        var textoBoton = estaEnCarrito ? 'Agregado' : 'Agregar';

        if (producto.Stock !== '0') {
            template += `
                <div class="col-xl-3 col-lg-3 col-md-3 col-6 filtro ${producto.Categoria}" category="${producto.Subcategoria}">
                    <div class="caja">
                        <div class="producto">
                            <div class="row">
                                <!-- Imagen y etiqueta -->
                                <div class="col-12">
                                <div class="${producto.Recomendar=='TRUE'?'recomendado':'recomendadono'}"><span class="tx-bold">${producto.Stock}</span> en stock</div>
                                    <img class="foto-portada" src="img/fotos/${producto.Categoria}/${producto.Subcategoria}/${producto.Codigo}.jpg" alt="Imagen - ${producto.Producto}">
                                </div>
                                <!-- Datos del producto -->
                                <div class="col-12 text-left">
                                    <p class="tx-bold tx-negro mb-0 pt-2">${producto.Producto}</p>
                                    <p class="caption tx-gris mb-2">${producto.Codigo}</p>
                                    <p>Precio: $${producto.Precio}</p>
                                    <!-- Botones -->
                                    <div class="text-center">
                                        <button class="btn bt-comprar mb-3 ${botonEstado}" onclick="agregarAlCarrito(${i}); gtag('event', 'Click', { 'event_category': 'Agregar', 'event_label': '${producto.Producto}'});">
                                            ${textoBoton}
                                        </button>
                                        <a href="#" class="bt-detalle" data-toggle="modal" data-target="#${producto.Codigo}" onclick="gtag('event', 'Click', { 'event_category': 'Detalle', 'event_label': '${producto.Producto}'});">
                                        <img src="img/ojo.svg" class="icono-link">Ver detalle</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>      
            `;
        }
    }
    $("#catalogo").innerHTML = template;
}

function renderDetalle() {
    var template = ``;
    for (var i in carrito.catalogo) {
        if (carrito.catalogo[i].Stock !== '0') {
            template += `
                <div class="modal fade" id="${carrito.catalogo[i].Codigo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <!-- Cerrar -->
                            <div class="bt-cerrar">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <img src="img/cerrar.svg" width="32px">
                                </button>
                            </div>
                            <!-- Imagen -->
                            <div class="text-center" style="background-color: #ffffff">
                                <img class="foto-detalle" src="img/fotos/${carrito.catalogo[i].Categoria}/${carrito.catalogo[i].Subcategoria}/${carrito.catalogo[i].Codigo}.jpg" alt="Imagen - ${carrito.catalogo[i].Producto}">
                            </div>
                            <div class="${carrito.catalogo[i].Recomendar=='TRUE'?'recomendado':'recomendadono'}"><span class="tx-bold">${carrito.catalogo[i].Stock}</span> en stock</div>
                            <!-- Contenido -->
                            <div class="modal-body pt-md-2 text-center">
                                <div class="py-4 px-md-5 px-3">
                                    <div class="row align-items-center">
                                        <div class="col-9 text-left">
                                            <h6 class="tx-bold tx-negro mb-0">${carrito.catalogo[i].Producto}</h6>
                                            <p class="tx-gris mb-0">${carrito.catalogo[i].Codigo}</p>
                                        </div>
                                        <div class="col-3 text-right pl-0">
                                            <h6 class="mb-0"><span class="tx-bold">Precio:</span> <span class="tx-gris">$${carrito.catalogo[i].Precio}<span></h6>
                                        </div>
                                    </div>
                                    <div class="text-left pt-4">
                                        <h6 class="tx-bold">Características:</h6>
                                        <p class="tx-gris">${carrito.catalogo[i].Caracteristicas}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Botón abajo -->
                            <div class="modal-fijo">
                                <div class="row justify-content-center">
                                    <div class="col-10"> 
                                        <a href="javascript:void(0)" class="btn bt-comprar mb-3" onclick="agregarAlCarrito(${i}); gtag('event', 'Click', { 'event_category': 'Agregar', 'event_label': '${carrito.catalogo[i].Producto}'});">
                                            Agregar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            `;
        }
    }
    $("#detalle").innerHTML = template;
}

function actualizarEstadoBotonComprar() {
    const botonComprar = document.getElementById('btn-comprar');
    // Verifica si el carrito está vacío
    if (carrito.detalle.length === 0) {
        // Si el carrito está vacío, agrega la clase 'inactivo' al botón
        botonComprar.classList.add('bt-inactivo');
    } else {
        // Si hay al menos un producto en el carrito, quita la clase 'inactivo' del botón
        botonComprar.classList.remove('bt-inactivo');
    }
}

// Se llama desde un inicio para asegurar que el botón esté actualizado cuando se carga la página
actualizarEstadoBotonComprar();

// Agrega un nuevo contenedor para el carrito en el HTML
const carritoContainer = document.getElementById('carrito-container');

function agregarAlCarrito(index) {
    const productoSeleccionado = carrito.catalogo[index];
    // Verifica si el producto ya está en el carrito
    const estaEnCarrito = carrito.detalle.some(item => item.Codigo === productoSeleccionado.Codigo);
    
    if (!estaEnCarrito) {
        // Se crea un nuevo objeto para el producto que incluya la cantidad y el precio
        const productoEnCarrito = {
            ...productoSeleccionado,
            Cantidad: 1, // Se establece la cantidad inicial como 1
            Precio: parseFloat(productoSeleccionado.Precio) // Convierte el precio a número
        };
        // Agrega el producto al detalle del carrito
        carrito.detalle.push(productoEnCarrito);
    }

    // Actualiza el contenedor del carrito y muestra la cantidad de productos
    actualizarCarrito();
    verCarrito();
    // Actualiza el estado de los botones de agregar
    renderCatalogo();
    // Actualiza el estado del botón Comprar
    actualizarEstadoBotonComprar();

    // Actualiza el estado del botón de agregar en el detalle del producto
    const botonAgregarDetalle = document.querySelector(`#${productoSeleccionado.Codigo} .btn.bt-comprar`);
    if (botonAgregarDetalle) {
        botonAgregarDetalle.classList.add('bt-inactivo');
        botonAgregarDetalle.innerText = 'Agregado';
    }
}

function actualizarCarrito() {
    // Actualiza el número de productos en el botón del carrito
    const numProductos = carrito.detalle.length;
    carritoContainer.innerHTML = `${numProductos}`;
}

function verCarrito() {
    // Crea la vista de detalles del carrito y muestra la información
    var carritoTemplate = ``;
    var totalCarrito = 0; // Inicializa el total del carrito

    for (var i in carrito.detalle) {
        var producto = carrito.detalle[i];
        var cantidad = producto.Cantidad || 1; // Establece el valor predeterminado de cantidad a 1 si no está definido
        var costoTotal = (producto.Precio * cantidad).toFixed(2); // Calcula el costo total del producto con máximo 2 decimales
        totalCarrito += parseFloat(costoTotal); // Suma el costo total del producto al total del carrito
        carritoTemplate += `
            <div class="producto-carrito">
                <div class="row align-items-center justify-content-center">
                    <!-- Imagen -->
                    <div class="col-md-4 col-8">
                        <img class="foto-carrito" src="img/fotos/${carrito.detalle[i].Categoria}/${carrito.detalle[i].Subcategoria}/${carrito.detalle[i].Codigo}.jpg" alt="Imagen - ${carrito.detalle[i].Producto}">
                    </div>
                    <!-- Información del producto -->
                    <div class="col-md-8 col-12 pt-md-0 pt-3">
                        <p class="tx-negro">${producto.Producto}</p>   
                        <div class="row justify-content-around">  
                            <div class="col-1 text-right pl-md-0 pl-1"> 
                                <button class="bt-cantidad" onclick="reducirCantidad(${i})">-</button>
                            </div>
                            <div class="col-2 pl-md-1 pl-2"> 
                                <p class="cant">${cantidad}</p>
                            </div>
                            <div class="col-1 pl-md-0 pl-1"> 
                                <button class="bt-cantidad" onclick="aumentarCantidad(${i})">+</button>
                            </div>
                            <div class="col-3 pl-md-3 pl-4"> 
                                <p class="tx-gris">$${costoTotal}</p>
                            </div>
                            <div class="col-2 text-right pl-md-2 pl-3"> 
                                <button class="bt-quitar" onclick="eliminarDelCarrito(${i})">
                                    <img width="20px" src="img/tarro.svg">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Agregar el costo de envío al total del carrito
    var envioSeleccionado = document.getElementById('envioOpciones').value;
    var envioCosto = parseFloat(envioSeleccionado.replace('$', ''));
    totalCarrito += envioCosto;

    // Actualiza el contenido del carrito en el modal
    document.getElementById('carritoContent').innerHTML = carritoTemplate;
    // Actualiza el total del carrito
    document.getElementById('totalCarrito').innerText = `$${(totalCarrito - envioCosto).toFixed(2)}`;
    document.getElementById('totalPago').innerText = `$${totalCarrito.toFixed(2)}`;
}

function reducirCantidad(index) {
    // Reduce la cantidad del producto en el carrito
    var cantidad = carrito.detalle[index].Cantidad || 1; // Establece el valor predeterminado de cantidad a 1 si no está definido
    cantidad = Math.max(cantidad - 1, 1); // Establece un mínimo de 1
    carrito.detalle[index].Cantidad = cantidad;

    // Actualiza la vista del carrito
    verCarrito();
}

function aumentarCantidad(index) {
    // Aumenta la cantidad del producto en el carrito
    var cantidad = carrito.detalle[index].Cantidad || 1; // Establece el valor predeterminado de cantidad a 1 si no está definido
    cantidad = Math.min(cantidad + 1, 99); // Establece un máximo de 99
    carrito.detalle[index].Cantidad = cantidad;

    // Actualiza la vista del carrito
    verCarrito();
}

function eliminarDelCarrito(index) {
    // Guarda el producto que se eliminará del carrito
    const productoEliminado = carrito.detalle[index];
    // Elimina el producto del carrito basado en su índice
    carrito.detalle.splice(index, 1);
    
    // Si el carrito está vacío, muestra el texto inicial
    if (carrito.detalle.length === 0) {
        document.getElementById('carritoContent').innerHTML =
        `<div class="text-center mt-4">
            <img class="pb-4" src="img/empty-carrito.svg" width="200px">
            <h6>Carrito vacio</h6>
            <p class="tx-gris">Aún no has agregado productos</p>
        </div>`;
        document.getElementById('totalCarrito').innerText = '$0.00';
    } else {
        // Si todavía hay productos en el carrito, actualiza la vista del carrito
        verCarrito();
    }

    // Actualiza el número de productos en el botón del carrito
    actualizarCarrito();
    // Vuelve a renderizar el catálogo para restaurar el estado de los botones y su texto
    renderCatalogo();
    // Actualiza el estado del boton comprar en caso de que no esté ningún producto
    actualizarEstadoBotonComprar();

    // Actualiza el estado del botón en el detalle del producto correspondiente
    const botonAgregarDetalle = document.querySelector(`#${productoEliminado.Codigo} .btn.bt-comprar`);
    if (botonAgregarDetalle) {
        botonAgregarDetalle.classList.remove('bt-inactivo');
        botonAgregarDetalle.innerText = 'Agregar';
    }
}

// Variable global para el número de carrito único
const numeroCarrito = generarNumeroCarritoUnico();

// Genera un número de carrito único
function generarNumeroCarritoUnico() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Letras y números
    const longitud = Math.floor(Math.random() * 5) + 4; // Longitud aleatoria entre 4 y 8 caracteres
    let numeroCarrito = '';
    for (let i = 0; i < longitud; i++) {
        numeroCarrito += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return numeroCarrito;
}

// Llama a los campos con los ID nombre, celular, costo del envio, forma de pago y total del carrito
const nombreContacto = document.getElementById('nombre');
const celularContacto = document.getElementById('celular');
const envioCosto = document.getElementById('envioSeleccionado');
const formaPago = document.getElementById('pagoOpciones');
const totalCarrito = document.getElementById('totalPago');

// Llama a los campos con los ID de la dirección de entrega
const callePrincipal = document.getElementById('cPrincipal');
const calleNumero = document.getElementById('cNumero');
const calleSecundario = document.getElementById('cSecundario');
const calleReferencia = document.getElementById('cReferencia');

// Llama a los campos con los ID de la UTMs
const utmSource = document.getElementById('utm_source');
const utmMedium = document.getElementById('utm_medium');
const utmCampaign = document.getElementById('utm_campaign');
const utmContent = document.getElementById('utm_content');

// Obtener la fecha y hora actual
const obtenerFechaYHora = () => {
    const fechaActual = new Date();
    const fecha = `${fechaActual.getFullYear()}-${('0' + (fechaActual.getMonth() + 1)).slice(-2)}-${('0' + fechaActual.getDate()).slice(-2)}`;
    const hora = `${('0' + fechaActual.getHours()).slice(-2)}:${('0' + fechaActual.getMinutes()).slice(-2)}:${('0' + fechaActual.getSeconds()).slice(-2)}`;
    return `${fecha} / ${hora}`;
};

// Función para enviar por WhatsApp
const enviarPorWhatsApp = () => {
    // Llama al valor del campo nombre
    const nombre = nombreContacto.value;
    // Llama al valor del campo pago
    const pago = formaPago.value;
    // Mensaje por WhatsApp
    let mensaje = "¡Hola! 👋🏼 Soy " + nombre + ". Quiero comprar los siguientes productos:\n\n";
    carrito.detalle.forEach((producto, index) => {
        mensaje += `*${index + 1}.* ${producto.Producto}\n- *Código:* ${producto.Codigo}\n- *Cantidad:* ${producto.Cantidad}\n- *Total:* $${(producto.Precio * producto.Cantidad).toFixed(2)}\n\n`;
    });
    mensaje += `_*Envío:* ${envioCosto.innerText}_\n_Total a Pagar: *${totalCarrito.innerText}*_\nPedido: *${numeroCarrito}*\n\n_*Forma de pago:* ${pago}_`;

    // Codificar el mensaje para que sea parte de la URL
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Número de WhatsApp al que se enviará el mensaje
    let numeroWhatsApp = "992568518";

    // Generar el enlace de WhatsApp con el mensaje codificado
    let enlaceWhatsApp = `https://api.whatsapp.com/send?phone=593${numeroWhatsApp}&text=${mensajeCodificado}`;
    
    // Abrir una nueva ventana con el enlace de WhatsApp
    window.open(enlaceWhatsApp, '_blank');
};

// Función para enviar a Carrito en Línea
const enviarACarritoEnLinea = () => {
    // Llama a los valores del campo nombre, celular y pago
    const nombre = nombreContacto.value;
    const celular = celularContacto.value;
    const pago = formaPago.value;
    // Llama a los valores de la dirección de entrega
    const direccion1 = callePrincipal.value;
    const direccion2 = calleNumero.value;
    const direccion3 = calleSecundario.value;
    const direccion4 = calleReferencia.value;
    let direccionEntrega = direccion1 + " " + direccion2 + " y " + direccion3 + " - " +  direccion4;
    // Llama a los valores de las UTMs
    const utm1 = utmSource.value;
    const utm2 = utmMedium.value;
    const utm3 = utmCampaign.value;
    const utm4 = utmContent.value;
    // Valida que si los campos de dirección están vacios, entonces envia vacio
    if (direccion1 === ''){
        direccionEntrega = '';
    }
    // Datos a enviar a Google Sheets - Debe tener el mismos nombres de la cabecera de la tabla
    const datos = carrito.detalle.map((producto) => ({
        Producto: producto.Producto,
        Codigo: producto.Codigo,
        Cantidad: producto.Cantidad,
        Precio: producto.Precio,
        Total: (producto.Precio * producto.Cantidad).toFixed(2),
        Envio: envioCosto.innerText,
        Carrito: totalCarrito.innerText,
        Pedido: numeroCarrito,
        Nombre: nombre,
        Celular: celular,
        Pago: pago,
        Entrega: direccionEntrega, 
        Fecha: obtenerFechaYHora(),
        Source: utm1,
        Medium: utm2,
        Campaign: utm3,
        Content: utm4,
    }));

    // Llama y ejecuta la función dentro de Apps Script para ingresar datos en Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxjeAjcSxRikA0X6akNv_I7Dlw1fuSVL7QxaaiUTqzLr8Fyp8oGhjpxJABeyk1K3R8R/exec';

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(datos)
    })
};

// Llama a la función para cargar la API de Google
loadGoogleAPI();