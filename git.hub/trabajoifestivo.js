const productos = [
    {
        id: "001",
        nombreProducto: 'Manzanas Rojas',
        descripcion: "Manzanas rojas frescas, paquete de 1kg",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Frutas",
        cantidad: 100,
        fechaVencimiento: "2023-12-31",
        precio: 3.99,
        impuesto: 0
    },
    {
        id: "002",
        nombreProducto: "Leche Entera",
        descripcion: "Leche entera pasteurizada, 1 litro",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Lácteos",
        cantidad: 200,
        fechaVencimiento: "2023-11-20",
        precio: 1.20,
        impuesto: 0
    },
    {
        id: "003",
        nombreProducto: "Pan Integral",
        descripcion: "Pan integral, paquete de 500g",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Panadería",
        cantidad: 150,
        fechaVencimiento: "2023-11-15",
        precio: 2.50,
        impuesto: 0.05
    },
    {
        id: "004",
        nombreProducto: "Yogur Natural",
        descripcion: "Yogur natural sin azúcar, 200g",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Lácteos",
        cantidad: 100,
        fechaVencimiento: "2023-12-01",
        precio: 0.99,
        impuesto: 0.07
    },
    {
        id: "005",
        nombreProducto: "Cereal de Avena",
        descripcion: "Cereal de avena integral, paquete de 1kg",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Desayuno",
        cantidad: 80,
        fechaVencimiento: "2024-01-10",
        precio: 4.00,
        impuesto: 0.08
    },
    {
        id: "006",
        nombreProducto: "Jugo de Naranja",
        descripcion: "Jugo de naranja natural, sin azúcares añadidos, 1 litro",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Desayuno",
        cantidad: 120,
        fechaVencimiento: "2023-11-30",
        precio: 2.99,
        impuesto: 0.06
    },
    {
        id: "007",
        nombreProducto: "Pasta de Tomate",
        descripcion: "Pasta de tomate orgánico, 500g",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Desayuno",
        cantidad: 50,
        fechaVencimiento: "2023-12-25",
        precio: 1.75,
        impuesto: 0.05
    },
    {
        id: "008",
        nombreProducto: "Arroz Blanco",
        descripcion: "Arroz blanco de grano largo, paquete de 1kg",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Dulces",
        cantidad: 200,
        fechaVencimiento: "2024-03-15",
        precio: 3.20,
        impuesto: 0.08
    },
    {
        id: "009",
        nombreProducto: "Chocolate Negro",
        descripcion: "Chocolate negro 70% cacao, 100g",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Dulces",
        cantidad: 75,
        fechaVencimiento: "2023-12-10",
        precio: 2.50,
        impuesto: 0.10
    },
    {
        id: "010",
        nombreProducto: "Café Molido",
        descripcion: "Café molido de tueste medio, paquete de 500g",
        foto: "https://picsum.photos/id/1/200/300",
        categoria: "Bebidas",
        cantidad: 100,
        fechaVencimiento: "2024-05-01",
        precio: 5.99,
        impuesto: 0.09
    }
];

//Funcion para buscar usando filter
function buscarProducto(nombreProducto) {
    const productosFiltrados = productos.filter(producto => producto.nombreProducto === nombreProducto)
    console.log(productosFiltrados);
}
buscarProducto("Chocolate Negro")

//Sumar una propiedad de un Objeto
const sumaProductos = productos.reduce((sumar, producto) => sumar + producto.cantidad, 0)
console.log(sumaProductos)

//Sumar la cantidad de productos cuya categoria=Desayuno
function sumarProductosPorCategoria(categoria) {
    const productoFiltrado = productos.filter(producto => producto.categoria === categoria).reduce((sumar, producto) => sumar + producto.cantidad, 0)
    console.log(productoFiltrado);
}
sumarProductosPorCategoria("Dulces")

//Funcion recibe un valor y categoria. Busca por categoria y aumenta el valor del producto
function aumentarPrecioProducto(valor,categoria) { 
    productos.filter(producto=>producto.categoria===categoria).map(producto=>producto.precio+=valor)
}
aumentarPrecioProducto(1000,"Dulces")

productos.sort((a,b)=>b.impuesto-a.impuesto)
console.log(productos)


productos.map(producto=>console.log(producto.nombreProducto,": "+producto.foto))

// filter
// slice
// map
// forEach
// reduce
// some
// sort
//find

/*
  Requerimientos:

  1.  Mostrar la foto y nombre del producto. listo
  2.  Mostrar solo los productos que sean Frutas listo
  3.  Calcular el promedio de precio de los productos que no tengan impuestos. **filter, reduce** listo
  4.  Totalizar los precios de todos los productos. listo
  5.  Buscar el producto con el impuesto mas alto.
  6.  Buscar el producto con el precio mas alto. **sort**
  7.  Listar los productos por el precio de mayor a menor
  8.  Agregar a todos los productos el campo distribuidor y colocar como valor 'Super Express'
  9.  Ordenar los productos por la fecha de vencimiento de menor a mayor
  10. Modificar el precio de los productos Lacteos, que valgan menos de 5.0 en un 20%
  11. Agregar un producto al final y al inicio
  12. Eliminar un producto por ID ** filter,slice **
  13. Eliminar un producto por categoria
  14. Devolver un 'True' en caso que exista la categoria 'Bebidas Alcholicas' ** some **

  Usando Funciones
  1.  Filtrar Productos por Categoría: Crear una función que permita filtrar los productos por una categoría específica, como "Lácteos" o "Bebidas".
  2.  Calcular el Precio con Impuesto: Añadir una función que calcule el precio final de cada producto, incluyendo su impuesto.
  3.  Buscar Productos por Rango de Precio: Desarrollar una función que permita buscar productos dentro de un rango de precios específico.
  4.  Listar Productos con Stock Bajo: Crear una lista de productos cuya cantidad esté por debajo de un umbral específico, indicando que el stock es bajo.
  5.  Actualizar Cantidad de Producto: Implementar una función que permita actualizar la cantidad disponible de un producto específico.
  6.  Agregar Descuento a Categoría Específica: Implementar una función que aplique un descuento a todos los productos de una categoría específica.
  7.  Contar Productos por Categoría: Crear una función que cuente cuántos productos hay en cada categoría.
  8.  Mostrar Productos que Expiran en un Mes Específico: Desarrollar una función que muestre los productos cuya fecha de vencimiento sea dentro de un mes específico.
  9.  Convertir Precios a Otra Moneda: Implementar una función que convierta los precios de los productos a otra moneda, utilizando una tasa de cambio dada.
  10. Generar Reporte de Ventas Proyectadas: Crear una función que calcule las ventas proyectadas, multiplicando la cantidad de cada producto por su precio.
  11. Funcion agregar producto: Recibe como parametro un objeto producto y lo agrega
  12. Version 2 agregar producto: Recibe como parametro un objeto producto y si desea al inicio o final de la data
  13. Funcion eliminar por Id: Recibe un ID, lo busca y elimina
  14. Funcion eliminar por categoria: Recibe el nombre de la categoria y elimina todos los productos


  Ejercicio final: Cada hermoso, hermosa, hermose estudiante debera contruir su .json sobre los siguientes campos:

  estudiante={
    documento:'',
    nombres:'',
    apellidos:'',
    fechaNacimiento:'',
    direccion:'',
    telefono:'',
    email:'',
    foto:'',
    nota:'',
    temasRefuerzo:[
        {
            tema:''
        }
    ]
  }
*/
