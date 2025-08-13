let nombreAlumno;
let apellidoAlumno;
let nota1;
let nota2;
let alumno;

//Funcion para promediar dos notas
const promediarNotas = (a, b) => (a + b) / 2;

//Array con alumnos
let alumnos = [];

// recolectar los datos de los estudiantes
const limpiarInputs = () => {
  document.getElementById("nombreAlumno").value = "";
  document.getElementById("apellidoAlumno").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
};

//validar los datos ingresados por el usuario
const validarDatos = () => {
  if (
    nombreAlumno.trim() === "" ||
    apellidoAlumno.trim() === "" ||
    isNaN(nota1) ||
    isNaN(nota2) ||
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10
  ) {
    alert("Por favor, complete todos los campos correctamente.");
    return false;
  } else return true;
};

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

  if (validarDatos()) {
    alumnos.push(alumno);
  }

  limpiarInputs();
  limpiarContenedorAlumnos();
};

//renderizar los alumnos en la pantalla

contenedorAlumnos = document.getElementById("alumnosContainer");

const limpiarContenedorAlumnos = () => {
  contenedorAlumnos.innerHTML = "";
};

const renderizarAlumnos = () => {
  alumnos.forEach((alumno) => {
    contenedorAlumnos.innerHTML += `
      <div class="alumno" id="alumno-${alumno.id}">
        <h3>Alumno: ${alumno.nombre} ${alumno.apellido}</h3> 
        <p> Nota 1: ${alumno.nota1} </p> 
        <p> Nota 2: ${alumno.nota2} </p>
        <p> Promedio: ${promediarNotas(alumno.nota1, alumno.nota2)}</p>
        <p> Situación: ${
          promediarNotas(alumno.nota1, alumno.nota2) >= 7
            ? "Promociona"
            : promediarNotas(alumno.nota1, alumno.nota2) >= 4
            ? "Va a final"
            : "Repite"
        }</p>
      </div>`;
  });
};

/*

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

 */
