const productos = []

class Producto {
    constructor (nombre, img, precio, id) {
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.id = id
    }
}

const diezPiezas = new Producto ("10 Piezas", 'img/sushi-piezas.webp', 3000, 1)
const veintePiezas = new Producto ("20 Piezas", 'img/sushi-piezas.webp', 4000, 2)
const treintaPiezas = new Producto ("30 Piezas", 'img/sushi-piezas.webp', 5000, 3)
const gohan = new Producto ("Gohan", 'img/gohan.webp', 2000, 4)
const dosEmpanadas = new Producto ("2 Empanadas Chinas", 'img/empanadas.webp', 1000, 5)
const cuatroEmpanadas = new Producto ("4 Empanadas Chinas", 'img/empanadas.webp', 2000, 6)
const dosPalitos = new Producto ('2 Palitos', 'img/palitos.webp', 200, 7)
const cuatroPalitos = new Producto ('4 Palitos', 'img/palitos.webp', 400, 8)
const seisPalitos = new Producto ('6 Palitos', 'img/palitos.webp', 600, 9)
const vinoblanco = new Producto ('Vino Blanco', 'img/vino-y-sushi.webp', 500, 10)
const cerveza = new Producto ('Cerveza', 'img/cerveza.webp', 300, 11)
const wasabiExtra = new Producto ('Wasabi extra', 'img/Wasabi.webp', 50, 12)
const galletaFortuna = new Producto ('Galleta de la fortuna', 'img/galleta-fortuna.webp', 100, 13)


productos.push(diezPiezas, veintePiezas, treintaPiezas, gohan, dosEmpanadas, cuatroEmpanadas, dosPalitos, cuatroPalitos, seisPalitos, vinoblanco, cerveza, wasabiExtra, galletaFortuna)