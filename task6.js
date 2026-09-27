export function rubricaExcelente(puntuacion) {
    puntuacion = Number(puntuacion);
    
    if (puntuacion >= 0 && puntuacion <= 11) {
        if (puntuacion >= 5 && puntuacion < 9){
            return "Aprobado"
        } else if (puntuacion >= 9){
            return "Excelente"
        }
        return "Reprobado"
    }
}