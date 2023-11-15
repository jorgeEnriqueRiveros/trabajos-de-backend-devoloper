function sumarNumerosAleatoriosMayoresA4(){
    let suma=0
    for(let i=0;i<10;i++){
        let numeroAleatorio =Math.floor(Math.random() * 100);
        if (numeroAleatorio > 4){
            suma += numeroAleatorio;
        }
    }
    return suma;
}

let suma = sumarNumerosAleatoriosMayoresA4();
console.log("La suma de los numeros aleatorios mayores a 4 es:", suma);