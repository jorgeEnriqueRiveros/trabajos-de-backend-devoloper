function contarLetras(palabra) {
    let contador = 0;

    for (let i = 0; i < palabra.lentgth; i++) {
        contador++;
    }

    return contador;
}

let palabra = "Hola"

let numeroLetras = contarLetras(palabra);

console.log(numeroLetras);