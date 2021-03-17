import {TipoVehiculo} from "./TipoVehiculo"

//JSDOC
class Ticket {

    /**
     * 
     * @param {TipoVehiculo} tipoVehiculo 
     * @param {string} patente 
     * @param {Date} horaEntrada 
     * @param {Date} horaSalida 
     * @param {Number} secuencia 
     * @param {Number} total 
     */
    constructor (tipoVehiculo, patente, horaEntrada, horaSalida, secuencia, total) {
        this.tipoVehiculo = tipoVehiculo
        this.patente = patente        
        this.horaEntrada = horaEntrada
        this.horaSalida = horaSalida
        this.secuencia = secuencia
        this.total = total
    }
    calcularTotal() {
        // obtener la tarifa x dia, de este ticket
        console.log(this.tipoVehiculo.tarifaEstadia)
    }
}

const bici = new TipoVehiculo("bici", 100, 300, 400,  10)

const ticket1 = new Ticket(bici, 234, new Date(), null, 1, null)
