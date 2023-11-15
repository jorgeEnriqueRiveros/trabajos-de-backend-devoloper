function factorial(numero){
    var factorial=1;
    for (var i = 2; i <= numero; i++){
        factorial *=i;
    }
    return factorial;
}
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var factorial = factorial(numeroAleatorio);
console.log("El factorial de " + numeroAleatorio + "es" + factorial);

