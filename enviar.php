<!DOCTYPE html>
<html lang="es">

<head>
  <link rel="icon" href="img/foco.png">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Creavic Design</title>

  <!-- Íconos de contactos -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

  <!-- Vista individual de las imágenes -->
  <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

  <!-- Tema de la página -->
  <link href="css/creative.min.css" rel="stylesheet">
  
  <style>
  *{
      font-family: helvetica;
  } 
  </style>

</head>

<body id="page-top">

  <!-- Menú -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="index.html">REGRESAR</a>
    </div>
  </nav>

  <!-- Sección - MENSAJE -->
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
         <div class="col-lg-8 text-center text-white">
           <?php
            $nombre = $_POST["nombre"];
            $correo = $_POST["correo"];
            $mensaje = $_POST["mensaje"];

            echo "<h2 class="text-white mt-0">LOS DATOS INGRESADOS FUERON LOS SIGUIENTES:</h2>";
            echo "<hr class="divider my-4"> ";
            echo "<strong>Nombre:</strong> ";
            echo $nombre;
            echo "<br>";
            echo "<strong>Correo:</strong> ";
            echo $correo;
            echo "<br>";
            echo "<strong>Mensaje:</strong> ";
            echo $mensaje;
            echo "<br>";

            $desde = "From: Creavic Design <www.creavicdesign.com->";
            $para = "creavicdesign@hotmail.com,victorjativa@hotmail.com";
            $asunto = "Mensaje desde la Landing Page";
            $datos = "
                Nombre: ".$nombre."
                Correo: ".$correo."
                Mensaje: ".$mensaje."";

            if(mail($para,$asunto,$datos,$desde)){
                echo "<br>";
                echo "<p><h2 class="text-white mt-0">¡Tu mensaje fué enviado exitósamente!</h2></p>";
            }
            else{
                echo "<br>";
                echo"<p><h2 class="text-white mt-0">Ocurrió un problema, inténtalo mas tarde.</h2></p>";
            }
          ?>
        </div>
      </div>
    </div>
  </header>
 

    
  <!-- Deslizamiento de la landing-page -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Otros componentes para animaciones  -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

  <!-- Barra animada sobre el color -->
  <script src="js/creative.min.js"></script>

</body>

</html>
