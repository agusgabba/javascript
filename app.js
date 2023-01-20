//SUSHI DI MARE"

alert ("Bienvenido a SushiDiMare")
alert ("En compras superiores a los $10000 tenes $1000 de descuento y en cuotas sin interés")
alert ("Realizamos envíos GRATIS a Cordoba Capital!!!")

//Funciones

function carritoTotalDeCompras (producto1=0, producto2=0, producto3=0){
    return producto1 + producto2 + producto3
}
function descuentoTotalDeCompras(producto1=0, producto2=0){
    return producto1 - producto2
}

//Variables

let producto1 = Number(prompt("Primer producto"))
console.log (producto1)
let producto2 = Number(prompt("Segundo producto"))
console.log (producto2)
let producto3 = Number(prompt("Tercer producto"))
console.log (producto3)

let productosFinales = carritoTotalDeCompras(producto1,producto2,producto3)
alert(productosFinales)
// let descuentosFinales = descuentoTotalDeCompras (producto1,producto2)
// alert(descuentosFinales)

//Condicionales

if (productosFinales >= 10000){
   alert("Recibiste U$S200 de descuento")
} 
if (productosFinales <= 9000){
    alert("No recibiste el descuento")
}

//Datos del usuario para envíos

alert("A continuación debe ingresar sus datos para el envío")

let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let provincia = prompt ("Ingrese provincia")
let ciudad = prompt ("Ingrese ciudad")
let domicilio = prompt ("Ingrese su domicilio, departamento y timbre")
let formasDePago = prompt ("Ingresa tu forma de pago \n 1 pago con transferencia o debito \n2 pago con tarjeta de crédito")
let cantidadDeCuotas = prompt("Ingresa la cantidad de cuotas, puedes pagar en 3, 6 y 12 SIN INTERES")

alert ("En los próximos minutos recibiras tus productos en la puerta de tu hogar")
alert ("Muchas gracias por su compra, vuelva pronto!!!")

//Objetos

class Producto{
    constructor(pescado, relleno, arroz, piezas, precio){
     this.pescado = pescado;
     this.relleno = relleno;
     this.arroz = arroz;
     this.piezas = piezas;
     this.precio = precio;
     this.stock = true;
 }
mostrar(){
    console.log("El relleno es " + (this.relleno) + " y el numero de piezas: " + (this.piezas));
    console.log("La carne utilizada es " + (this.pescado) + " y es de " + (this.arroz));
    console.log("El precio del elemento es de " + (this.precio));
    console.log("Hay disponibilidad " + (this.stock))
}
}


let producto4 = new Producto ("kanicama", "queso crema", "arroz blanco", "10", 1200);
producto4.mostrar(Producto);
let producto5 = new Producto ("langostino", "mostaza y queso crema", "arroz rebozado", "10", 1400);
producto5.mostrar(Producto);
let producto6 = new Producto ("Salmon", "palta y queso crema", "arroz blanco y alga nori", "10", 1800);
producto6.mostrar(Producto); 
//Array
const arrayProductos = ["kanicama", "langostino", "salmon"]; 

//Agregado de elementos en el array
arrayProductos.push("Fundas")
console.log(arrayProductos.length)
console.log(arrayProductos)
const arrayDePrecios = ["Precio del kanicama ", 1200, "Precio del langostino ", 1400, "Precio del salmon ", 1800]
console.log(arrayDePrecios)

//Ordenes de función superior
const sushi = [
    {nombre: "palitos", precio: 100},
    {nombre: "salsa de soja", precio: 200}, 
    {nombre: "vino blanco", precio: 500}, 
    {nombre: "cerveza", precio: 300}
]
const nombres = sushi.map ((el) => el.nombre)
console.log(nombres)
const precio = sushi.map ((el) => el.precio )
console.log(precio)