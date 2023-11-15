function verificarDatos(nombreDeUsuario, contrasenna){
var nombreDeUsuario=nombreDeUsuario;
var contrasenna=contrasenna;

let mensaje="";

if(nombreDeUsuario === "admin" && contrasenna === "12345"){
    mensaje = "acceso concevido"
} else{
    mensaje = "acceso denegado"
}
return mensaje;
}
var mensaje = verificarDatos("admin","12345")
console.log (mensaje)
