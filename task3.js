export function calculadoraEdad(anio, mes, dia) {
    const hoy = new Date();
    const nacimiento = new Date(
        Number(anio),
        Number(mes) - 1,
        Number(dia)
    );

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (
        diferenciaMes < 0 ||
        (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad = edad - 1;
    }

    return edad;
}