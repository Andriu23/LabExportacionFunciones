export function calculadoraEdad(anio, mes, dia) {
    const hoy = new Date();
    const cumpleanos = new Date(
        (anio),
        Number(mes) - 1,
        (dia)
    );

    let edad = hoy.getFullYear() - cumpleanos.getFullYear();

    const diferenciaMes = hoy.getMonth() - cumpleanos.getMonth();

    if ( diferenciaMes < 0 || ( diferenciaMes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad = edad - 1;
    }
    return edad;
}