class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca,
            this.modelo = modelo,
            this.precio = precio
    }
}

class Automovil extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }
}

const vehiculos = []
const automovilUno = vehiculos.push(new Automovil('Peugeot', '206', 4, 200000));
const MotocicletaUno = vehiculos.push(new Motocicleta('Honda', 'Titan', 125, 60000));
const automovil1Dos = vehiculos.push(new Automovil('Peugeot', '208', 5, 250000));
const MotocicletaDos = vehiculos.push(new Motocicleta('Yamaha', 'YBR', 160, 80500.50));

vehiculos.map(vehiculo => {
    if (!vehiculo.cilindrada) {
        console.log('Marca: ' + vehiculo.marca + " // " + 'Modelo: ' + vehiculo.modelo + " // "
            + 'Puertas: ' + vehiculo.puertas + " // " + 'Precio: $' +
            formatearPrecio(vehiculo.precio.toFixed(2)));
    } else {
        console.log('Marca: ' + vehiculo.marca + " // " + 'Modelo: ' + vehiculo.modelo + " // "
            + 'cilindrada: ' + vehiculo.cilindrada + 'cc' + " // " + 'Precio: $' +
            formatearPrecio(vehiculo.precio.toFixed(2)));
    }
})

function ordenarVehiculosPorPrecio(a, b) {
    return (b.precio - a.precio)
}

let vehiculosOrdenados = vehiculos.sort(ordenarVehiculosPorPrecio);
let vehiculoMasCaro = vehiculosOrdenados[0];
let vehiculoMasBarato = vehiculosOrdenados[vehiculosOrdenados.length - 1];
let vehiculoContieneY = vehiculos.filter(function (vehiculo) {
    return vehiculo.modelo.includes('Y');
});

console.log('=============================')

console.log('Vehículo mas caro: ' + vehiculoMasCaro.marca
    + " " + vehiculoMasCaro.modelo);
console.log('Vehículo mas barato: ' + vehiculoMasBarato.marca +
    " " + vehiculoMasBarato.modelo);
console.log("Vehículo que contiene en el modelo la letra 'Y': " +
    vehiculoContieneY[0].marca + " " + vehiculoContieneY[0].modelo +
    " $" + formatearPrecio(vehiculoContieneY[0].precio.toFixed(2)));

console.log('=============================')

console.log('Vehículos ordenados por precio de mayor a menor:')
vehiculosOrdenados.map(vehiculo => {
    return (console.log(vehiculo.marca + " " + vehiculo.modelo));
})

function formatearPrecio(precio) {
    precio += '';
    x = precio.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}
