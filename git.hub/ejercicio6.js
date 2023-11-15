function esPrimo(numero){
    if (numero <= 1){
        return false;
    }
    for (let i = 2; i * i <= numero; i++){
        if (numero % i === 0){
            return false;
        }
      }
  return true;
}

let numero=20;
if (esPrimo(numero)) {
    console.log("El numero" + numero + " es primo ")
} else {
    console.log("El numero" + numero + " no es primo ")
}