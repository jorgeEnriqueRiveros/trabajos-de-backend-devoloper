function escrbirAlReves(palabra) {
    let cadenaInversa = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        cadenaInversa += palabra[i];
    }

    return cadenaInversa;
}

let palabra = "kikeriveros";
let cadenaInversa = escrbirAlReves(palabra);

console.log(cadenaInversa)