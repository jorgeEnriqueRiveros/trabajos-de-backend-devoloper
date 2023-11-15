function calcularEdadEnDias(edad) {
    let edadEnAños = edad / 365.25;
    let edadEnDias = edadEnAños * 365.25;
    return edadEnDias; 
}
let edad = 32;

let edadEnDias = calcularEdadEnDias(edad);

console.log(edadEnDias);
