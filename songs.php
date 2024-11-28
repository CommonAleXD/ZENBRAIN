<?php

$servername = "localhost";
$username = "root"; // Cambia si tienes otro usuario
$password = ""; // Cambia contraseña
$dbname = "zenbrain"; // Cambia por el nombre de la BD


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT ID, nombre, autor, mp3, imagen FROM canciones";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $songs = [];
    while ($row = $result->fetch_assoc()) {
        $row['mp3'] = "Musica/" . $row['mp3']; //Cambia por la ubicación de la musica (Recomiendo ponerla donde mismo)
        $row['imagen'] = "Musica/" . $row['imagen'];//Cambia por la ubicación de la imagen (Recomiendo ponerla donde mismo)
        $songs[] = $row;
    }
    echo json_encode($songs);
} else {
    echo json_encode([]);
}

$conn->close();
?>

