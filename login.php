<?php
// Iniciar sesión
session_start();

// Conexión a la base de datos
$conn = new mysqli('localhost', 'root', '', 'zenbrain');

// Verificar conexión
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

// Capturar datos del formulario
$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;

// Validar que los campos no estén vacíos
if (!$email || !$password) {
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>
    </head>
    <body>
        <script>
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                icon: 'warning',
                confirmButtonText: 'Intentar de nuevo'
            }).then(() => {
                window.location.href = 'login.html';
            });
        </script>
    </body>
    </html>";
    exit();
}

// Consultar el usuario en la base de datos
$stmt = $conn->prepare("SELECT nombre, password FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Verificar la contraseña
    if (password_verify($password, $user['password'])) {
        // Guardar el nombre del usuario en la sesión
        $_SESSION['usuario'] = $user['nombre'];

        // Respuesta de éxito
        echo "<!DOCTYPE html>
        <html lang='en'>
        <head>
            <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>
        </head>
        <body>
            <script>
                Swal.fire({
                    title: '¡Bienvenido!',
                    text: 'Inicio de sesión exitoso.',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                }).then(() => {
                    window.location.href = 'index.php';
                });
            </script>
        </body>
        </html>";
    } else {
        // Contraseña incorrecta
        echo "<!DOCTYPE html>
        <html lang='en'>
        <head>
            <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>
        </head>
        <body>
            <script>
                Swal.fire({
                    title: 'Error',
                    text: 'Contraseña incorrecta.',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                }).then(() => {
                    window.location.href = 'login.html';
                });
            </script>
        </body>
        </html>";
    }
} else {
    // Usuario no encontrado
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>
    </head>
    <body>
        <script>
            Swal.fire({
                title: 'Error',
                text: 'Usuario no encontrado.',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            }).then(() => {
                window.location.href = 'login.html';
            });
        </script>
    </body>
    </html>";
}

$stmt->close();
$conn->close();
?>