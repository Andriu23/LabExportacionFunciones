export function rubricaAprobadoReprobado(puntuacion) {
    puntuacion = Number(puntuacion);
    
    if (puntuacion >= 0 && puntuacion <= 11) {
        if (puntuacion >= 5){
            return "Aprobado"
        }
        return "Reprobado"
    }
}