<a name="top"></a>

<h1>App reservas de restaurante</h1>



🧐 [Acerca de](#id1)   

💻 [Tecnologías](#id2)

:clipboard: [Instrucciones](#id3)

⚙️ [Fase I desarrollo Backend](#id4)




---

<a name="id1"></a>
## **Acerca de**

Se trata de la realización backend para una aplicación de reservas a restaurantes.

Este proyecto forma parte del Bootcamp  de full Stack Developer impartido por  [GeeksHubs Academy](https://bootcamp.geekshubsacademy.com/).

---
**Fase I**
**Fecha de comienzo:** 01/ junio /2021
**Deadline:** 07 / junio / 2021

**Colaboradores:**
* [Carlos Quintero Moreno](https://github.com/CarlosRQuinteroM)
* [Juan Felipe Porras Gallego](https://github.com/juanfegallego)

---

<a name="id2"></a>

## **Tecnologías**

Estas son las tecnologías con las que hemos trabajado en este proyecto:

<img src="img/logovisual.png" alt="Visual" width="30"/> <img src="img/javascript2.png" alt="JavaScript" width="30"/><img src="img/nodejs.png" alt="HTML5" width="30"/>  <img src="img/git.png" alt="Git" width="30"/> <img src="img/github2.png" alt="GitHub" width="30"/><img src="img/postman.png" alt="GitHub" width="30"/>   <img src="img/trelloLogo.png" alt="trello" width="30"/>  <details><summary>Click para ver la imagen de trello</summary><img src="img/trello.png" alt="trello" width="1000"></details>



<a name="id3"></a>
***
## **Instrucciones**
<details>

<summary>Click para expandir</summary>

<br>

- [Descargar](https://nodejs.org/es/) e Instalar <b>Node.</b>
```
    $ npm install node
```
- Instalar <b>Nodemon.</b>
```
    $ npm install nodemon
```
- Instalar <b>Express.</b>
```
    $ npm install express
```
- Instalar <b>mongoose.</b>
```
    $ npm install mongoose
```
- Instalar <b>bcrypt.</b>
```
    $ npm install bcrypt
```
- Instalar <b>jsonwebtoken.</b>
```
    $ npm install jsonwebtoken
```
- Instalar <b>Cors.</b>
```
    $ npm install cors
```
- Instalar <b>Validator.</b>
```
    $ npm install validator
```


</details>

<a name="id4"></a>
## Fase I desarrollo Backend
<details>
<summary>Click para expandir</summary>

El proyecto consiste en el desarrollo de un sistema de gestión de reservas.

Trabajamos con una base de datos interna que esta alojada en <b>MongoDB Atlas</b> y con una API propia.

Los endpoints trabajados son :

<b>User</b>

- Login de usuario
  http://localhost:3000/user/login  
- Creación de usuario
  http://localhost:3000/user + datos del usuario mediante el body
- Eliminación de usuario
http://localhost:3000/user/ (+ id del usuario que se quiera eliminar)
- Busqueda de todos los usuarios
http://localhost:3000/user

<br>
<b>Restaurantes</b>

- Creación de restaurante
http://localhost:3000/rest/create + datos del restaurante por body
````
{
    "name":,
    "country":,
    "city":,
    "bookings":[],
    "isActive": 

}
````
- Listado de restaurantes
http://localhost:3000/rest
<br>

<b>Reservas</b>

- Crear reserva
- Eliminar reserva
- Listado de todas las reservas de un restaurante

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/532d6afed35da38b6876?action=collection%2Fimport)

<a name="id5"></a>



</details>

<a name="id6"></a>
***


[UP](#top)