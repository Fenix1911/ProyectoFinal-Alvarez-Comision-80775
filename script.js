let otroEstudiante = 1
let nombre;
let nota1;
let nota2;
let notaFinal;
const bienvenida = () => {
    console.log("Bienvenido al sistema de evaluación de estudiantes.");
    console.log("Por favor, sigue las instrucciones para ingresar las notas de los estudiantes.");
}
const promediarNotas = (a, b) => (a + b) / 2;
const recopilarNotas = () => {
    do {
        nota1 = parseFloat(prompt("Introduce la nota del primer parcial:"));
        if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
            alert("Por favor, introduce un número válido para la nota del primer parcial.");
        }
    } while (isNaN(nota1) || nota1 < 0 || nota1 > 10);

    do {
        nota2 = parseFloat(prompt("Introduce la nota del segundo parcial:"));
        if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
            alert("Por favor, introduce un número válido para la nota del segundo parcial.");
        }
    } while (isNaN(nota2) || nota2 < 0 || nota2 > 10);
    return [nota1, nota2];
}
const analizarSituacion = (notaFinal) => {
    if (notaFinal >= 7) {
        console.log(`${nombre} promociona con una nota de ${notaFinal}.`);
    }else if (notaFinal >= 4) {
        console.log(`${nombre} va a final con una nota de ${notaFinal}.`);
    }else {
        console.log(`${nombre} repite con una nota de ${notaFinal}.`);
    }
}
const estudiantes = () => { 
    do {
        otroEstudiante = parseInt(prompt("¿Deseas ingresar otro estudiante? (1 para sí, 0 para no):"));
        if (otroEstudiante !== 0 && otroEstudiante !== 1) {
            alert("Por favor, introduce un número válido para la instruccion solicitada.");
        }
    } while (otroEstudiante !== 0 && otroEstudiante !== 1);
    return otroEstudiante;
}
const programa = () => {
    
    bienvenida();
    while (otroEstudiante === 1) {
        nombre = prompt("Introduce el nombre del alumno:");
        recopilarNotas();
        notaFinal = promediarNotas(nota1, nota2);
        analizarSituacion(notaFinal);
        otroEstudiante = estudiantes();
    }
    console.log(`Gracias por usar el sistema de evaluación.`);
}


programa();