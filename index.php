<?php
// Iniciar o reanudar la sesión
session_start();

// Verificar si el usuario está autenticado
$nombreUsuario = isset($_SESSION['usuario']) ? $_SESSION['usuario'] : 'Visitante';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="images/iso.svg" type="image/svg">
    <title>ZENBRAIN</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styleIndex.css">
</head>
<body>
    <!------------ Header ------------>
    <header>
        <div class="logo">
            <img src="images/logoletras.svg" alt="ZENBRAIN Logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Principal</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="estudio.html">Estudio</a></li>
                <li><a href="biblioteca.html">Biblioteca</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <?php if (isset($_SESSION['usuario'])): ?>
                    <li><a href="logout.php">Cerrar sesión</a></li>
                <?php else: ?>
                    <li><a href="login.html">Únete</a></li>
                <?php endif; ?>
            </ul>
        </nav>
    </header>

    <!------------ Main Section ------------>
    <main>
        <section class="welcome-section">
            <h1>Bienvenido, <?php echo htmlspecialchars($nombreUsuario); ?>, a ZenBrain</h1>
            <p>Descubre un espacio dedicado a la calma y la serenidad. Aquí encontrarás herramientas y recursos para tu bienestar mental.</p>
        </section>

        <section class="pilares-section">
            <h2 id="pilares-title">Los 3 Pilares</h2>
            <div class="info-cards-container hidden">
                <div class="info-card">
                    <h2>Mindfulness</h2>
                    <p>Aprende a estar presente en el momento con nuestras guías de meditación y relajación.</p>
                </div>
                <div class="info-card">
                    <h2>Bienestar</h2>
                    <p>Explora artículos y recursos diseñados para ayudarte a encontrar balance en tu vida diaria.</p>
                </div>
                <div class="info-card">
                    <h2>Enfoque</h2>
                    <p>Trabaja tranquilamente, disfruta el proceso y avanza por el camino que necesitas.</p>
                </div>
            </div>
        </section>        

        <section class="info-details" id="info-details">
            <div class="details-content">
                <h2>Más información</h2>
                <p id="details-text">Haz clic en una tarjeta para ver más información aquí.</p>
                <a id="details-link" href="#" target="_blank" style="display: none;">Leer más</a>
            </div>
        </section>
        

        <section class="quote-section">
            <blockquote>
                “La calma es el poder supremo.” <br><span>- Lao-Tse</span>
            </blockquote>
        </section>
    </main>

    <!------------ Footer ------------>
    <footer>
        <div class="footer-content">
            <ul>
                <li><a href="nosotros.html">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <p>© 2024 ZenBrain. Todos los derechos reservados.</p>
        </div>
    </footer>

    <!------------Agregar el archivo JavaScript  ------------>
    <script src="scriptIndex.js"></script>
</body>
</html>
