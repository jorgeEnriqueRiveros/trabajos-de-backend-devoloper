function sumarImparesConRaizExacta(limite) {
    let suma = 0;
    let i = 1;

    while (i <= limite) {
        if (i % 2 !== 0 &&  Math.sqrt(i) % 1 === 0) {
            suma += i;
        }
        i++;
    }
    
    return suma;
}

let suma = sumarImparesConRaizExacta(1000);

console.log(suma);