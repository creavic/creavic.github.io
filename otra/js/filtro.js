$(document).ready(function(){

	// Asignar clase activa en el primer botón
	$('.submenu-d .subcategoria[category="all"]').addClass('subcategoria-activo');
	$('.submenu-m .subcategoria[category="all"]').addClass('subcategoria-activo');

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

	// Mostrar todos alimentos
	$('.alimentosTodo').click(function(){
		// Función de ocultar productos
		$('.filtro').css('transform', 'scale(0)');
		function hideProduct(){
			$('.filtro').hide();
		} setTimeout(hideProduct,200);

		// Función de mostrar productos
		function showProduct(){
			$('.alimentos').show();
			$('.filtro').css('transform', 'scale(1)');
		} setTimeout(showProduct,200);
	});

	// Mostrar todos belleza
	$('.bellezaTodo').click(function(){
		// Función de ocultar productos
		$('.filtro').css('transform', 'scale(0)');
		function hideProduct(){
			$('.filtro').hide();
		} setTimeout(hideProduct,200);

		// Función de mostrar productos
		function showProduct(){
			$('.belleza').show();
			$('.filtro').css('transform', 'scale(1)');
		} setTimeout(showProduct,200);
	});

	// Mostrar todos ropa
	$('.ropaTodo').click(function(){
		// Función de ocultar productos
		$('.filtro').css('transform', 'scale(0)');
		function hideProduct(){
			$('.filtro').hide();
		} setTimeout(hideProduct,200);

		// Función de mostrar productos
		function showProduct(){
			$('.ropa').show();
			$('.filtro').css('transform', 'scale(1)');
		} setTimeout(showProduct,200);
	});

	// Mostrar todos educación
	$('.educacionTodo').click(function(){
		// Función de ocultar productos
		$('.filtro').css('transform', 'scale(0)');
		function hideProduct(){
			$('.filtro').hide();
		} setTimeout(hideProduct,200);

		// Función de mostrar productos
		function showProduct(){
			$('.educacion').show();
			$('.filtro').css('transform', 'scale(1)');
		} setTimeout(showProduct,200);
	});

	// Mostrar todos actividades
	$('.actiTodo').click(function(){
		// Función de ocultar productos
		$('.filtro').css('transform', 'scale(0)');
		function hideProduct(){
			$('.filtro').hide();
		} setTimeout(hideProduct,200);

		// Función de mostrar productos
		function showProduct(){
			$('.acti').show();
			$('.filtro').css('transform', 'scale(1)');
		} setTimeout(showProduct,200);
	});

	// Mostrar todos servicios
	$('.serviciosTodo').click(function(){
		// Función de ocultar productos
		$('.filtro').css('transform', 'scale(0)');
		function hideProduct(){
			$('.filtro').hide();
		} setTimeout(hideProduct,200);

		// Función de mostrar productos
		function showProduct(){
			$('.servicios').show();
			$('.filtro').css('transform', 'scale(1)');
		} setTimeout(showProduct,200);
	});
});