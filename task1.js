export function calculadoraCosto(monto) {

    monto = Number(monto);
    const tarifa = 3;
    const valorInteres = monto * 0.01;

    return monto + tarifa + valorInteres;
}