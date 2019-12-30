<template>
    <html>
    <head>
        <title>Oaxacaos - Registro</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <link rel="stylesheet" href="registro.css">
        <link rel="icon" href="C:/Users/lsbpl/Downloads/oaxacos.img/Fav-icon-OaxaCaos.PNG">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <nav>
                <div class="logo">
                    <img src="C:/Users/lsbpl/Downloads/oaxacos.img/logo-OaxaCaos.PNG" alt="">
                </div>
                <div class="enlaces">
                    <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/OaxaCaos.html">Inicio</a>
                    <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/mapas.html">Mapas</a>
                    <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/OC-acerca-de.html">Acerca de</a>
                    <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/registro.html">Regístrate</a>
                </div>
            </nav>
            <div class="textos">
                <h1>¿Ya tienes Cuenta?</h1>
                <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/OC-Login.html">Inicia sesión</a>
                <div class="cuenta">
                    <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/OC-Cuenta.html">Crea una cuenta</a>
                </div>
            </div>
        </header>
    </body>
</html>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

header {
    background-image: url('C:/Users/lsbpl/Downloads/oaxacos.img/background1.JPG');
    width: 100%;
    height: 625px;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}

header nav {
    height: 70px;
    background: rgba(56, 56, 56, 0.692);
    display: flex;
    justify-content: space-between;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

.enlaces {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.enlaces a {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    padding: 4px 0;
    transition: 0.7s ease-out;
    text-decoration: none;
    color: white;
    margin-right: 60px;
}

.enlaces a:hover {
    border-bottom: 2px solid rgb(1, 192, 206);
    color: rgb(255, 5, 5);
}

nav .logo {
    height: 100%;
    margin-left: 80px;
}

nav .logo img {
    object-fit: cover;
    height: inherit;
}

header .textos {
    text-align: center;
    color: white;
    margin-top: 150px;
    font-family: 'Montserrat', sans-serif;
}

.textos h1 {
    font-size: 90px;
    margin-bottom: 45px;
}

.textos a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    transition: 0.7s ease-out;
}

.textos a:hover {
    text-decoration: none;
    color: white;
    font-size: 24px;
}

.cuenta {
    margin-top: 80px;
}
</style>