<a name="home"></a>

<!-- INTRODUCCIÓN -->

<div align="center">
  <a href="#">
    <img src="/public/img/ofertas.jpg" alt="Logo" width="400">
  </a>

  <p align="center">
    <h3 align="center">Ofertas</h3>
    <br />
    <a href="https://github.com/VictoriaCanclini/Offers"><strong>Repositorio Github »</strong></a>
  </p>
</div>

<!-- SOBRE EL PROYECTO -->

## Sobre el proyecto

Una pequeña plataforma donde un usuario puede acceder, ver una lista de ofertas y puede haciendo click sobre alguna de ellas, generar un código único que se guardará en la base de datos y después puede revisar que códigos promocionales tiene en una página de detalle. En la página de detalle, el usuario puede pulsar sobre un botón canjear código que marcará como canjeado el código de la BBDD y confirmará al usuario que se ha canjeado.

### Tecnologías

|          |         |        |
| :------: | :-----: | :----: |
|   PHP    | Laravel | React  |
| Tailwind |         | Breeze |

<p align="right"><a href="#home">⬆ Volver a home</a></p>

<!-- PARA EMPEZAR -->

## Para empezar

Este proyecto aún no está deployado, pero puedes probarlo en tu local. Siga las instrucciones a continuación para ejecutarlo.

### Requisitos

1. Asegurarse de tener instalado PHP y Composer en su máquina local.
   <a href="https://herd.laravel.com"><strong>Link »</strong></a>

### Instalación

1. En primer lugar debe clonar el <a href="https://github.com/VictoriaCanclini/Offers">Repositorio</a> de Github:
   <br>
   `git clone git@github.com:VictoriaCanclini/Offers.git`
2. En segundo lugar moverse al directorio del proyecto:
   <br>
   `cd offer`
3. Luego ejecutar el siguiente comando para instalar las dependencias de PHP:
   <br>
   `composer install`
4. Instalar las dependencias de javascript con:
   <br>
   `npm install`
5. Instalar Laravel Breeze, el cual instalará y configurará sus dependencias de front-end por usted:
   <br>
   `composer require laravel/breeze --dev`
6. Para iniciar el servidor de desarrollo react:
   <br>
   `php artisan breeze:install react`
7. Debemos copiar el archivo que contine las variable de entorno:
   <br>
   `cp .env.example .env`
   Cuando utilizamos un sistema de control de versiones como git, este archivo se excluye del repositorio por medidas de seguridad.
8. Por medidas de seguridad cada proyecto de Laravel cuenta con una clave única en el `.env`, para ello debemos ejecutar el siguiente comando:
   <br>
   `php artisan key:generate`
9. Asegúrate de que tienes SQLite instalado o la base de datos que prefieras configurada. Para SQLite: **touch database/database.sqlite**.
10. Actualiza el archivo .env con la configuración de la base de datos: DB_CONNECTION=sqlite
    DB_DATABASE=/Users/viki/Desktop/prueba/Prueba-Offers/offer/database/database.sqlite
11. **php artisan migrate**, Para ejecutar migraciones.
12. Ejecutamos **npm run dev**.
13. Por ultimo ejecutamos **php artisan serve** para levantar el proyecto.

<p align="right"><a href="#home">⬆ Volver a home</a></p>

<!-- FUNCTIONALITIES -->

## Funcionalidades

-   [x] Register
-   [x] Login
-   [x] Ver lista de ofertas
-   [x] Generar código promocional único
-   [x] Canjear código promocional único
-   [x] Logout

<p align="right"><a href="#home">⬆ Volver a home</a></p>

<!-- CONTACTO -->

## Contacto

<p align="left">

  <p>Victoria Canclini:</p>
  <a href="mailto:vikicanclini@gmail.com" target="_blank" rel="noopener noreferrer">
    <img alt="Gmail" title="gmail" src="https://custom-icon-badges.demolab.com/badge/-vikicanclini@gmail.com-red?style=for-the-badge&logo=mention&logoColor=white"/></a>
  <a href="www.linkedin.com/in/victoriacanclini" target="_blank" rel="noopener noreferrer">
    <img alt="Linkedin" title="linkedin" src="https://custom-icon-badges.demolab.com/badge/-Linkedin-blue?style=for-the-badge&logoColor=white&logo=linkedin"/></a>
  <a href="https://github.com/VictoriaCanclini" target="_blank" rel="noopener noreferrer">
    <img alt="Github" title="Github" src="https://custom-icon-badges.demolab.com/badge/-Github-grey?style=for-the-badge&logoColor=white&logo=github"/></a>

</p>

<p align="right"><a href="#home">⬆ Volver a home</a></p>
