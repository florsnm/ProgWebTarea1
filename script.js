/*El archivo script.js contiene la lógica para interactuar con 
el usuario: captura los datos del formulario y los muestra en la tabla.*/

// Definir el array fuera de la función de evento
//Define un array vacío students que almacenará los datos de los estudiantes (nombre y apellido).
let students = [];

//Asocia una función al botón "Guardar" para que se ejecute cada vez que se hace clic en él.
document.getElementById('guardarBtn').addEventListener('click', function() 
{

    const addStudent = () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;

        // Agregar un objeto al array
        students.push({ nombre: nombre, apellido: apellido });
        console.log(students);

        // Limpiar los campos de texto
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
    };

    const renderTable = () => {
        const tbody = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        // Crear filas para cada estudiante en el array
        students.forEach((student) => {
            let row = document.createElement("tr");

            // Crear celdas y agregarles los valores
            row.innerHTML = "<td>" + student.nombre + "</td><td>" + student.apellido + "</td>";
            tbody.appendChild(row);
        });
    };

    // Añadir estudiante y renderizar tabla
    addStudent();
    renderTable();
});
