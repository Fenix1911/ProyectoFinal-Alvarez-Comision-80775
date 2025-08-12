let otroEstudiante = 1;
let nombreAlumno;
let apellidoAlumno;
let nota1 = undefined;
let nota2;
let notaFinal;
let promedios = [];
let alumno;

//Array con alumnos
let alumnos = [];

// recolectar los datos de los estudiantes

const recolectarDatos = () => {
  inputNombreAlumno = document.getElementById("nombreAlumno");
  inputApellidoAlumno = document.getElementById("apellidoAlumno");
  inputNota1 = document.getElementById("nota1");
  inputNota2 = document.getElementById("nota2");
  nombreAlumno = inputNombreAlumno.value;
  apellidoAlumno = inputApellidoAlumno.value;
  nota1 = parseFloat(inputNota1.value);
  nota2 = parseFloat(inputNota2.value);
};

//Funcion para agregar un alumno al array
const agregarAlumno = () => {
  recolectarDatos();
  alumno = {
    id: alumnos.length + 1,
    nombre: nombreAlumno,
    apellido: apellidoAlumno,
    nota1: nota1,
    nota2: nota2,
  };
  alumnos.push(alumno);
  console.log(`Alumno agregado: ${alumno.nombre} ${alumno.apellido}`);
};

//renderizar los alumnos en la pantalla
const renderizarAlumnos = () =>
  console.log("Bienvenido al sistema de evaluación de estudiantes.");

/*const bienvenida = () => {
  console.log("Bienvenido al sistema de evaluación de estudiantes.");
  console.log(
    "Por favor, sigue las instrucciones para ingresar las notas de los estudiantes."
  );
};
const promediarNotas = (a, b) => (a + b) / 2;
const recopilarNotas = () => {
  do {
    nota1 = parseFloat(prompt("Introduce la nota del primer parcial:"));
    if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
      alert(
        "Por favor, introduce un número válido para la nota del primer parcial."
      );
    }
  } while (isNaN(nota1) || nota1 < 0 || nota1 > 10);

  do {
    nota2 = parseFloat(prompt("Introduce la nota del segundo parcial:"));
    if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
      alert(
        "Por favor, introduce un número válido para la nota del segundo parcial."
      );
    }
  } while (isNaN(nota2) || nota2 < 0 || nota2 > 10);
  return [nota1, nota2];
};
const analizarSituacion = (notaFinal) => {
  if (notaFinal >= 7) {
    console.log(`${nombre} promociona con una nota de ${notaFinal}.`);
  } else if (notaFinal >= 4) {
    console.log(`${nombre} va a final con una nota de ${notaFinal}.`);
  } else {
    console.log(`${nombre} repite con una nota de ${notaFinal}.`);
  }
};
const estudiantes = () => {
  do {
    otroEstudiante = parseInt(
      prompt("¿Deseas ingresar otro estudiante? (1 para sí, 0 para no):")
    );
    if (otroEstudiante !== 0 && otroEstudiante !== 1) {
      alert(
        "Por favor, introduce un número válido para la instruccion solicitada."
      );
    }
  } while (otroEstudiante !== 0 && otroEstudiante !== 1);
  return otroEstudiante;
};
const programa = () => {
  bienvenida();
  while (otroEstudiante === 1) {
    nombre = prompt("Introduce el nombre del alumno:");
    recopilarNotas();
    notaFinal = promediarNotas(nota1, nota2);
    analizarSituacion(notaFinal);
    promedios.push(notaFinal);
    otroEstudiante = estudiantes();
  }
  console.log(`Los promedios de los estudiantes son: ${promedios}`);
  console.log(`Gracias por usar el sistema de evaluación.`);
};

programa(); */
