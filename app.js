
// simulador 

alert ("Bienvenido, comencemos con tu pedido")

let combo = prompt("Indicanos cual combo te gusto (con numeros):")
let precioAPagar = Number

switch (combo) {
    case "1":
        precioAPagar = 1500
        console.log(precioAPagar)
        break;

    case "2":
        precioAPagar = 3000
        console.log(precioAPagar)
        break;

    case "3":
        precioAPagar = 6000
        console.log(precioAPagar)
        break;
    case "4":
        precioAPagar = 4000
        console.log(precioAPagar)
        break;
        
    case "5":
        precioAPagar = 3000
        console.log(precioAPagar)
        break;

    case "6":
            precioAPagar = 1450
            console.log(precioAPagar)
            break;
    default:
        break;
}

console.log(precioAPagar)

alert("Como queres abonar? \n En efectivo tenes un 10% de descuento y con tarjeta tenes 1 o 3 cuotas sin interes.")

let metodoPago = prompt("Indicanos como queres pagar:")
let efectivo = "efectivo" || "Efectivo"
let tarjeta = "tarjeta" || "Tarjeta"
let total = Number

let descuento = (n1) => {return resultado = n1 - (n1 * 0.1) }
let cuota1 = (n1, n2) => {return resultado = n1 / n2}
let cuota3 = (n1, n2) => {return resultado = n1 / n2}

if (efectivo == metodoPago) {
    total = descuento(precioAPagar)
        alert("Tu total a pagar es $" + total)
        console.log(total)
} else if (tarjeta == metodoPago) {

    let cuotas = prompt("En cuantas cuotas queres pagar? En 1 o 3 (respuesta con numeros).")
    switch (cuotas) {
        case "1":
            total = cuota1(precioAPagar, 1)
            alert("El precio a pagar es $" + precioAPagar + ", en 1 cuota de $" + total)
            console.log(total)
            break;

        case "3":
            total = cuota3(precioAPagar, 3)
            alert("El precio a pagar es $" + precioAPagar + ", en 3 cuotas de $" + total)
            console.log(total)
            break;

    default:
        break;
    }
}
let nombre = prompt("Indicanos tu nombre para registrar el pedido.")
let apellido = prompt("Indicanos tu apellido para registrar el pedido")
const dni = prompt("Indicanos tu DNI para registrar el pedido.")
let direccion = prompt("Indicanos tu dirección para hacer el envio.")
const ciudad = prompt("Indicanos tu ciudad.")
let correo = prompt("Mail donde recibiras factura.")

alert("El pedido esta hecho a nombre de " + nombre + " " + apellido + " con DNI n°" + dni + " y dirección " + direccion + " en la ciudad de " + ciudad + ".")
alert("Gracias por tu compra! Te llegara en 1 hs a " + direccion)