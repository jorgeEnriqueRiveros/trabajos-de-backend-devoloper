// 12. Eliminar un producto por ID ** filter,slice **

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

const idProductoAEliminar = "007";
const productosSinEliminado = productos.filter(producto => producto.id !== idProductoAEliminar);
console.log(productosSinEliminado)



  