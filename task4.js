import { calculadoraEdad } from "./task3.js";

export class EdadAmigo {
    constructor(nombre, anio, mes, dia) {
        this.nombre = nombre;
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }

    retornarEdad() {
        const edad = calculadoraEdad(this.anio, this.mes, this.dia);

        return `¡${this.nombre} tiene ${edad} años hoy!`;
    }
}