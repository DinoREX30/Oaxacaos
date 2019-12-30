<template>
    <html>
    <head>
        <title>Oaxacaos - Login</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <link rel="stylesheet" href="OC-login.css">
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
                <!--<h1>Bienvenido a <span>Oaxacaos</span></h1>
                <h2>Dile adiós al tráfico y estrés</h2>
                <div class="cuadro">
                    <a href="C:/Users/lsbpl/OneDrive/Documentos/OaxaCaos/registro.html">registrate aquí</a>
                </div>-->
            </div>
        </header>
        <main>
            <div class="login-box">
                <img  class="avatar" src="C:/Users/lsbpl/Downloads/img/contactos.JPG" alt="">
                <h2>Inicia sesión</h2>
                <form>
                    <label for="username">correo</label>
                    <input type="mail" placeholder="Escribe tu correo">

                    <label for="password">Contraseña</label>
                    <input type="password" placeholder="Escribe tu contraseña">

                    

                    <input type="submit" value="Iniciar sesión">

                    <a href="#">¿Olvidaste tu contraseña?</a> <br>
                    <a href="#">¿No tienes cuenta?</a>
                </form>
            </div>
        </main>
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
    background-image: url('C:/Users/lsbpl/Downloads/oaxacos.img/wallpaper5.jpg');
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
}

.textos h2 {
    font-size: 40px;
    margin-bottom: 80px;
}

.textos a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.cuadro {
    height: 55px;
    width: 145px;
    background: linear-gradient(to bottom, rgb(255, 0, 0), rgb(105, 0, 0));
    align-items: center;
    margin-left: 625px;
    border-radius: 17px;
    align-content: center;
}

.cuadro:hover {
    height: 55px;
    width: 145px;
    background: linear-gradient(to bottom, rgb(0, 198, 212), rgb(0, 90, 117));
    align-items: center;
    margin-left: 625px;
    border-radius: 17px;
    align-content: center;
}

/*Main*/

.login-box {
    width: 360px;
    height: 450px;
    background: rgb(82, 82, 82);
    color: white;
    top: 60%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 70px 30px;
    font-family: 'Roboto', sans-serif;
    border-radius: 25px;
    /*border: 3px solid rgb(226, 226, 226);*/
}

.login-box .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
    /*border: 3px solid rgb(226, 226, 226);*/
}

.login-box label {
    margin: 0;
    padding: 0;
    display: block;
    margin-top: 10px;
}

.login-box h2 {
    text-align: center;
    margin-bottom: 30px;
    color: white;
}

.login-box input {
    width: 100%;
    margin-bottom: 20px;
    color: white;
}

.login-box input[type="text"],
.login-box input[type="mail"],
.login-box input[type="password"] {
    border: none;
    border-bottom: 2px solid rgb(248, 248, 248);
    background: transparent;
    outline: none;
    height: 40px;
    font-size: 16px;
    color: white;
}

.login-box input[type="submit"] {
    margin-top: 20px;
    border: transparent;
    outline: none;
    height: 40px;
    background: linear-gradient(to bottom, rgb(255, 0, 0), rgb(196, 0, 0), rgb(121, 0, 0));
    color: white;
    font-size: 18px;
    border-radius: 20px;
}

.login-box a {
    justify-content: center;
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: white;
}

/*Hover*/

.login-box input[type="submit"]:hover {
    border: transparent;
    outline: none;
    height: 40px;
    background: linear-gradient(to bottom, rgb(255, 78, 78), rgb(238, 2, 2), rgb(167, 0, 0));
    color: white;
    font-size: 18px;
    border-radius: 20px;
}

.login-box a:hover {
    justify-content: center;
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: rgb(0, 183, 255);
}
</style>