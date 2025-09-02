let nombreAlumno;
let apellidoAlumno;
let nota1;
let nota2;
let alumno;

//Funcion para promediar dos notas
const promediarNotas = (a, b) => (a + b) / 2;

//Array con alumnos
let alumnos = [];

const borrarDatos = () => {
  borrarDelLocalStorage();
  limpiarContenedorAlumnos();
};

const validarBorrado = async () => {
  const result = await Swal.fire({
    title: "¿Está seguro que desea borrar todos los datos?",
    text: "Esta acción no se puede deshacer.",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí, borrar todo.",
    cancelButtonText: "No, cancelar.",
  });
  return result.isConfirmed;
};

const btnBorrarDatos = document.getElementById("BtnBorrarDatos");
btnBorrarDatos.onclick = async function () {
  const confirmado = await validarBorrado();
  if (confirmado) {
    borrarDatos();
  } else {
    await Swal.fire({
      title: "Acción cancelada.",
      text: "Los datos no fueron borrados.",
      icon: "info",
      confirmButtonText: "Continuar.",
    });
  }
};

//Guardar los datos en el local storage
const guardarEnLocalStorage = () => {
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
};

//Recuperar los datos del local storage
const recuperarDelLocalStorage = () => {
  const datos = localStorage.getItem("alumnos");
  if (datos) {
    alumnos = JSON.parse(datos);
  }
};
//borrar los datos del local storage

const borrarDelLocalStorage = () => {
  localStorage.removeItem("alumnos");
  alumnos = [];
  limpiarContenedorAlumnos();
};

//Recuperar los datos al cargar la pagina
window.onload = recuperarDelLocalStorage();

//Guardar los datos al cerrar la pagina
window.onbeforeunload = guardarEnLocalStorage();

// recolectar los datos de los estudiantes
const limpiarInputs = () => {
  document.getElementById("nombreAlumno").value = "";
  document.getElementById("apellidoAlumno").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
};

// funcion auxiliar de validacion de datos
const esNombreValido = (nombre) => nombre.trim() !== "" && !/\d/.test(nombre);
const esApellidoValido = (apellido) =>
  apellido.trim() !== "" && !/\d/.test(apellido);
const esNotaValida = (nota) => !isNaN(nota) && nota >= 0 && nota <= 10;

//validar los datos ingresados por el usuario
const validarDatos = () => {
  if (
    !esNombreValido(nombreAlumno) ||
    !esApellidoValido(apellidoAlumno) ||
    !esNotaValida(nota1) ||
    !esNotaValida(nota2)
  ) {
    Swal.fire({
      title: "Los datos ingresados no son validos.",
      text: "Por favor, ingrese los datos correctamente.",
      icon: "error",
      confirmButtonText: "Continuar.",
    });
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
  guardarEnLocalStorage();
  limpiarInputs();
  limpiarContenedorAlumnos();
};

btnAgregarAlumno = document.getElementById("BtnAgregarAlumno");
btnAgregarAlumno.onclick = () => {
  agregarAlumno();
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
        <button onclick="
          document.getElementById('alumno-${alumno.id}').remove();
          alumnos = alumnos.filter(a => a.id !== ${alumno.id});
          guardarEnLocalStorage();
        ">
          Borrar Alumno
        </button>
      </div>`;
  });
};

const btnRenderizarAlumnos = document.getElementById("BtnRenderizarAlumnos");
btnRenderizarAlumnos.onclick = () => {
  if (alumnos.length === 0) {
    Swal.fire({
      title: "No hay alumnos para mostrar.",
      text: "Por favor, ingrese al menos un alumno.",
      icon: "warning",
      confirmButtonText: "Continuar.",
    });
    return;
  }
  renderizarAlumnos();
};

// Contenedor para alumnos de otros profesores
const contenedorAlumnosProfesores = document.getElementById(
  "alumnosContainerProfesores"
);

let alumnosProfesores = [];

// fetch para traer alumnos de otros profesores
const GetAlumnosProfesores = async () => {
  const response = await fetch("./alumnos.json");
  const res = await response.json();
  alumnosProfesores = res;
};

GetAlumnosProfesores();

// renderizar alumnos de otros profesores

const renderizarAlumnosProfesores = () => {
  alumnosProfesores.forEach((alumnos) => {
    contenedorAlumnosProfesores.innerHTML += `
      <div class="alumno">
        <h3>Alumno: ${alumnos.nombre} ${alumnos.apellido}</h3> 
        <p> Nota 1: ${alumnos.nota1} </p> 
        <p> Nota 2: ${alumnos.nota2} </p>
        <p> Promedio: ${promediarNotas(alumnos.nota1, alumnos.nota2)}</p>
        <p> Situación: ${
          promediarNotas(alumnos.nota1, alumnos.nota2) >= 7
            ? "Promociona"
            : promediarNotas(alumnos.nota1, alumnos.nota2) >= 4
            ? "Va a final"
            : "Repite"
        }</p>
      </div>`;
  });
};

addEventListener("DOMContentLoaded", async () => {
  await GetAlumnosProfesores();
  renderizarAlumnosProfesores();
});

/**/
