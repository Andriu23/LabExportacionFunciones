export class EdadAmigo {
    constructor(nombre, anio, mes, dia) {
        this.nombre = nombre;
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
    }

    retornarEdad() {
        const hoy = new Date(); 
        const cumpleanos4 = new Date(
            (this.anio),
            Number(this.mes) - 1,
            (this.dia)
        );
            
        let edad = hoy.getFullYear() - cumpleanos4.getFullYear();
        const diferenciaMes = hoy.getMonth() - cumpleanos4.getMonth();
            
        if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < cumpleanos4.getDate())
        ) {
            edad = edad - 1;
        }
        return `¡${this.nombre} tiene ${edad} años hoy!`;
    }
}