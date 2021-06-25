console.log("************Generate HTML with JS************");

//Create  Element
const link = document.createElement("a");
//Add Text
link.textContent = "New Link"
//Add href
link.href = "/new-link"

const navigation3 = document.querySelector(".navegacion")
// navigation3.appendChild(link)
navigation3.insertBefore(link, navigation3.children[1])

console.log(link);


// Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards... sin duda será algo más complejo...

// crear los 3 parrafos.

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Mi card';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');

// crear el div...
const info1 = document.createElement('div');
info1.classList.add('info');
info1.appendChild(parrafo1)
info1.appendChild(parrafo2)
info1.appendChild(parrafo3);


// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer1.jpg';

// Crear el Card..
const card4 = document.createElement('div');
card4.classList.add('card');

// Vamos a asignar la imagen al card...
card4.appendChild(imagen);

// y el info
card4.appendChild(info1);


// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card4, contenedor.children[0]); // al inicio info

console.log(card4);
console.log(contenedor);
