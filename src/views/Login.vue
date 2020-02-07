<template>
    <div class="login-box">
        <img  class="avatar" src="C:/Users/lsbpl/Downloads/img/contactos.JPG" alt="">
        <h2>Inicia sesión</h2>
        <form>
            <label for="username">correo</label>
            <input type="mail" placeholder="Escribe tu correo">
            <label for="password">Contraseña</label>
            <input type="password" placeholder="Escribe tu contraseña">
            <input type="submit" value="Iniciar sesión">
            <a href="#">¿No tienes cuenta?</a>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
