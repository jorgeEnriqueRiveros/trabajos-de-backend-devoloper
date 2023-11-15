function aplicarImpuesto(valorLimite, valorImpuesto) {
    var valorLimite = valorLimite;
    var valorImpuesto = valorImpuesto;
  
    for (var i = 0; i < productos.length; i++) {
      if (productos[i] > valorLimite) {
        productos[i] += valorImpuesto;
      }
    }
  
    return productos;
}
var productos = [12, 3, 4, 20, 5.5];

var productosConImpuesto = aplicarImpuesto(50, 10);

console.log(productosConImpuesto);
    