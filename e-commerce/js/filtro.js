jQuery(document).ready(function($) { 

	$(document).ready(function(){

		// Asignar clase activa en el primer botón
		$('.submenu-d .subcategoria[category="all"]').addClass('subcategoria-activo');
		$('.navbar-nav .subcategoria[category="all"]').addClass('subcategoria-activo');

		// Filtro de productos
		$('.subcategoria').click(function(){
			var catProduct = $(this).attr('category');

			// Asignar clase activa en botón apretado
			$('.subcategoria').removeClass('subcategoria-activo');
			$(this).addClass('subcategoria-activo');

			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.filtro[category="'+catProduct+'"]').show();
				$('.filtro[category="'+catProduct+'"]').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});

		// Mostrar todos los productos
		$('.subcategoria[category="all"]').click(function(){
			function showAll(){
				$('.filtro').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showAll,200);
		});

		// Mostrar todos Manuales
		$('.ManualesTodo').click(function(){
			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.MANUALES').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});

		// Mostrar todos Electricas
		$('.ElectricasTodo').click(function(){
			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.ELECTRICAS').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});

		// Mostrar todos Accesorios
		$('.AccesoriosTodo').click(function(){
			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.ACCESORIOS').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});

		// Mostrar todos Medicion
		$('.MedicionTodo').click(function(){
			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.MEDICION').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});

		// Mostrar todos Elevacion
		$('.NeumaticasTodo').click(function(){
			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.NEUMATICAS').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});

		// Mostrar todos Seguridad
		$('.SeguridadTodo').click(function(){
			// Función de ocultar productos
			$('.filtro').css('transform', 'scale(0)');
			function hideProduct(){
				$('.filtro').hide();
			} setTimeout(hideProduct,200);

			// Función de mostrar productos
			function showProduct(){
				$('.SEGURIDAD').show();
				$('.filtro').css('transform', 'scale(1)');
			} setTimeout(showProduct,200);
		});
	});

	$(document).ready(function(){
		// Función para mostrar/ocultar el icono de borrar en el campo de búsqueda
		$('#buscar').on('input', function() {
			var valor = $(this).val();
			if (valor.length > 0) {
				$('#icono-borrar').addClass('mostrado');
				if (!$(this).is(":focus")) {
					$(this).css('background-position', '114%'); // Ajustar la posición de fondo cuando el campo no está vacío y no está en foco
				}
			} else {
				$('#icono-borrar').removeClass('mostrado');
				$(this).css('background-position', ''); // Restaurar la posición de fondo a su valor por defecto
				mostrarTodosLosProductos(); // Llamar a la función para mostrar todos los productos cuando el campo de búsqueda está vacío
			}
		});
	
		// Función para borrar el contenido del campo de búsqueda al hacer clic en el icono
		$('#icono-borrar').click(function() {
			$('#buscar').val('').focus(); // Borra el contenido y enfoca el campo
	
			// Mostrar todos los productos
			mostrarTodosLosProductos();
	
			// Ocultar el icono de borrar
			$(this).removeClass('mostrado');
		});
	
		// Función para filtrar productos mientras se escribe en el campo de búsqueda
		$('#buscar').on('keyup', function(){
			var valor = $(this).val().toLowerCase(); // Obtener el valor del campo de búsqueda en minúsculas
			$('.filtro').hide().filter(function(){
				return $(this).text().toLowerCase().indexOf(valor) > -1; // Mostrar solo productos que coincidan con la búsqueda
			}).show();
	
			// Mostrar mensaje si no hay resultados
			if ($('.filtro:visible').length === 0) {
				$('#no-resultados').show();
			} else {
				$('#no-resultados').hide();
			}
		});
	
		// Función para mostrar todos los productos
		function mostrarTodosLosProductos() {
			$('.subcategoria[category="all"]').addClass('subcategoria-activo');
			$('.filtro').show();
			$('.filtro').css('transform', 'scale(1)');
		}
	});

});