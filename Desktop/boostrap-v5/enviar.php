<?php 

    /* CALLING VARIABLES */
    $name = $_POST['inputFirstName'];
    $L_name = $_POST['inputLastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];


    /* DATOS PARA CORREO */

    $destinatario = "sandovalgus7@gmail.com";
    $asunto = "Contacto desde portafolio";

    $carta = "De: $name\n";
    $carta .= "$L_name\n";
    $carta .= "Correo: $email \n";
    $carta .= "Mensaje: $message";


    /* SENDING EMAIL */

    mail($destinatario, $asunto, $carta);
    header('Location: mensaje_envio.html')

?>