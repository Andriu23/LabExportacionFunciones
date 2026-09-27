export function rubricaPerfecto(puntuacion) {
    puntuacion = Number(puntuacion);
    
    if (puntuacion >= 0 && puntuacion <= 11) {
        if (puntuacion >= 5 && puntuacion < 9){
            return "Aprobado"
        } else if (puntuacion >= 9 && puntuacion < 11){
            return "Excelente"
        } else if (puntuacion = 11) {
            return "Perfecto"
        }
        return "Reprobado"
    }
}