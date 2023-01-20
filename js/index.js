/*
	Utilizar: - do while (con el primer botón`)
						- while (con el segundo botón`)

	Sin usar: - reverse
*/

document.querySelectorAll("button")[0].onclick = conDoWhile;
document.querySelectorAll("button")[1].onclick = conWhile;
let valorActual;

// Do while
function conDoWhile() {
	let contador = 0;
	document.querySelector("div").innerHTML = "";
	do {
		valorActual = REYES[contador]
		comprobar();
		dibujar();
		contador++;

	} while (contador < REYES.length);
}

function comprobar() {
	if (valorActual.imagen.length < 1) {
		// Solo se midificara el valor si este valor esta vacio
		valorActual.imagen = "https://www.html6.es/img/rey.png";
	}
}

function dibujar() {
	document.querySelector(".caja").innerHTML += `
    <div>
    <img src="${valorActual.imagen}" alt="${valorActual.nombre}">
    <div>${valorActual.nombre}</div>
    </div>
    `;
}

// while
function conWhile() {
	let contador = REYES.length - 1;
	document.querySelector("div").innerHTML = "";
	while (contador >= 0) {
		valorActual = REYES[contador]
		comprobar();
		dibujar();

		contador--;

	}
}

// La función conDoWhile se encarga de recorrer el array REYES utilizando un bucle do-while.
// El contador se inicializa en 0 y se ejecuta la primera iteración antes de comprobar la condición.
// Dentro del bucle, se asigna el valor actual del array REYES al valorActual y se llaman a las funciones comprobar y dibujar.
// La función comprobar comprueba si la propiedad "imagen" del objeto actual está vacía, y si es así, asigna una imagen predeterminada.
// La función dibujar se encarga de dibujar el objeto actual en el HTML, utilizando la propiedad "innerHTML" del elemento con clase "caja".
// El bucle continúa mientras el contador sea menor que el tamaño del array REYES.

// La función conWhile es similar a la anterior, pero utiliza un bucle while en lugar de do-while.
// El contador se inicializa en la última posición del array REYES y el bucle continúa mientras el contador sea mayor o igual a 0.
// Dentro del bucle, se asigna el valor actual del array REYES en orden inverso al valorActual y se llaman a las funciones comprobar y dibujar.
// El proceso de comprobación y dibujado es el mismo que en la función conDoWhile.










