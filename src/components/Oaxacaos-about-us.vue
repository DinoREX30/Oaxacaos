<template>
    <html>
    <head>
        <title>Oaxacaos - Acerca de</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <link rel="stylesheet" href="OC-acerca-de.css">
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
                <h1>Oaxacaos</h1>
            </div>
        </header>
        <main>
            <section class="background">
                    <div class="texto-principal">
                        <h2>¿De qué se trata Oaxacaos?</h2>
                        <p>En la última década, se han posicionado como unas de las herramientas
                            más eficaces para la sociedad, especialmente en el campo de tráfico
                            vehicular y no es para menos, pues las aplicaciones facilitan la vida de los
                            conductores y peatones en una ciudad cada día más congestionada por el
                            caos vial.
                            Según un estudio realizado por la compañía Flurry Analytics, un 97 % de
                            las personas tiene un móvil, el usuario promedio pasa alrededor de 6
                            horas diarias en su teléfono, la razón por la que los usuarios pasan cada
                            vez más tiempo en sus teléfonos es porque buscan estar informado sobre
                            temas que les permitan simplificar gran parte de la vida cotidiana como
                            las compras, las comunicaciones y el entretenimiento y sobre todo el
                            tráfico vial.
                            El objetivo de eta página wed es generar un nuevo canal de comunicación
                            facilitándole el acceso a información útil y al momento sobre todo lo que
                            acontece en la ciudad de Oaxaca relacionado al tránsito vehicular, tan
                            importante en nuestro días en un Oaxaca donde los bloqueos, marchas,
                            tomas de oficinas y cierres de calles es el pan de cada día de los peatones
                            y conductores.
                            Es por ello, que surge la idea de Oaxacaos, una herramienta que fue
                            desarrollada para que lo usuarios que se encuentren circulando por la
                            calles de la ciudad, ya sea en sus vehículos o caminando informen y se
                            informen oportunamente de los bloqueos, marchas, tomas de oficinas,
                            tomas de calles y puedan buscar rutas alternas para desplazarse a su
                            lugar de destino, evitando el caos vial y simplificando la vida tanto de
                            peatones como conductores, mediante un reporte vial en la ciudad y los
                            municipios evitando así accidentes de tráfico, estrés vehicular que es una
                            amenaza para la salud ya que el constante ruido de bocinas y motores
                            puede generar enfermedades físicas y mentales originando cambios de
                            conducta.
                        </p>
                        <div class="contenedor">
                            <div class="servicio-cont">
                                <div class="servicio-ind">
                                    <img src="C:/Users/lsbpl/Downloads/oaxacos.img/choque.png" alt="">
                                    <h3>Evita accidentes o cualquier tráfico.</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum minus libero, architecto distinctio cupiditate delectus accusamus temporibus consectetur asperiores error!</p>
                                </div>
                                <div class="servicio-ind">
                                     <img src="C:/Users/lsbpl/Downloads/oaxacos.img/mensajes.png" alt="">
                                     <h3>Reporta los incovenientes en tu ruta.</h3>
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur cupiditate, alias quibusdam aliquam voluptatibus voluptatem animi aspernatur et adipisci?</p>
                                 </div>
                                 <div class="servicio-ind">
                                    <img src="C:/Users/lsbpl/Downloads/oaxacos.img/velocimetro.png" alt="">
                                    <h3>LLega a tu destino más rapido.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio soluta impedit odit explicabo rerum voluptates fuga officiis voluptas at!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
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
    background-image: url('C:/Users/lsbpl/Downloads/oaxacos.img/background5.jpg');
}

header nav {
    height: 70px;
    background: rgba(0, 0, 0, 0.692);
    display: flex;
    justify-content: space-between;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6);
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
    font-size: 120px;
}

/*MAIN*/

.background {
    margin-top: 220px;
    margin-bottom: 180px;
    margin-left: 100px;
    margin-right: 100px;
    color: rgb(0, 0, 0);
    justify-content: center;
    text-align: justify;
}

.texto-principal h2 {
    font-size: 45px;
    margin-top: 50px;
    margin-bottom: 80px;
    text-align: center;
}

.texto-principal p {
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 70px;
    margin-left: 90px;
    margin-right: 90px;
}

.texto-principal {
    background: rgb(255, 255, 255);
    border-radius: 30px;
    padding: 20px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
}

.servicio-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.servicio-ind {
    width: 35%;
    text-align: center;
}

.servicio-ind img {
    width: 60%;
}

.servicio-ind h3 {
    font-size: 20px;
    margin: 30px 0;
}

.servicio-ind p {
    font-weight: 300;
    text-align: justify;
    margin-left: 65px;
    margin-right: 65px;
}

@media (max-width: 750px) {
    body {
        background-image: url('C:/Users/lsbpl/Downloads/oaxacos.img/background5.jpg'), no repeat;
        width: 100%;
    }

    header {
        background: transparent;
    }

    nav .logo {
        height: 100%;
        margin-left: 40px;
    }

    .cuadro {
        margin-left: 325px;
        margin-bottom: 50px;
    }
    
    .background {
        margin-top: 270px;
        margin-bottom: 180px;
        margin-left: 50px;
        margin-right: 50px;
        color: black;
        justify-content: center;
        text-align: justify;
    }

    .texto-principal {
        background: white;
        border-radius: 30px;
    }

    .texto-principal h2 {
        font-size: 35px;
        margin-top: 30px;
        margin-bottom: 60px;
        text-align: center;
    }

    .texto-principal p {
        font-size: 20px;
        margin-top: 25px;
        margin-bottom: 60px;
        margin-left: 50px;
        margin-right: 50px;
    }
}
</style>