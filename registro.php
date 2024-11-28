<?php
// Conexión a la base de datos
$conn = new mysqli('localhost', 'root', '', 'zenbrain');

// Verificar conexión
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

// Capturar datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encriptar contraseña

// Insertar datos en la tabla usuarios
$sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    // Registro exitoso
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>
        <title>Registro</title>
    </head>
    <body>
        <script>
            // Mostrar alerta y redirigir
            Swal.fire({
                title: '¡Registro exitoso!',
                text: 'Ahora puedes iniciar sesión.',
                icon: 'success',
                confirmButtonText: 'Continuar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'login.html'; // Redirección al iniciar sesión
                }
            });
        </script>
    </body>
    </html>";
} else {
    // Error al registrar
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>
    </head>
    <body>
        <script>
            Swal.fire({
                title: 'Error',
                text: 'No se pudo registrar. Inténtalo más tarde.',
                icon: 'error',
                confirmButtonText: 'Volver'
            }).then(() => {
                window.location.href = 'registro.html';
            });
        </script>
    </body>
    </html>";
}

$conn->close();
?>



