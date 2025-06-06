const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
const axios = require("axios");
// fetch(url,config)
// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// axios
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(response=>{
//     console.log(response.data);

// });

// GET - Hace un pedido =>http://www.empezolafiesta.com  =index.html
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.slice(0,5));

//   });
// POST - Crea un recurso =>http://www.empezolafiesta.com => body
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo Post",
    body: "SOY UN NUEVO POST",
    userId: 1,
  }),
};

// fetch("https://jsonplaceholder.typicode.com/posts", config)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// PUT - Actualizar un recurso => actualizar el perfil de usuario => body id
const configput = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "ACTUALIZACION",
    body: "Soy la actualizacion de un post",
    userId: 1,
  }),
};
fetch("https://jsonplaceholder.typicode.com/posts/1", configput)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
// PATCH - Actualizar un algo de un recurso = reset de password => body id
const configpatch = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Modificando el title",
    
  }),
};
fetch("https://jsonplaceholder.typicode.com/posts/1", configpatch)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// DELETE - elimina un recurso => id


//microservicios


