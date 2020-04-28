 

let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();

        tareas.forEach(function(elemento, indice){
            console.log(`${indice + 1}. ${elemento.titulo} - ${elemento.estado}`)
        });

       // for (let i = 0;  i < tareas.length; i++) {
           // console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
           // console.log(`${i + 1}. ${elemento[i]} - ${elemento[i]}`);
       // }
        console.log()
        break;
    case 'tarea':
        
       let unaTarea = {
            titulo: process.argv[3],
            estado: "pendiente"
        }   
        archivoTareas.guardarTarea(unaTarea);

        break;

    case 'filtrar' :
     
        let unEstado = process.argv[3]; 
        let filtroTareas = archivoTareas.leerPorEstado(unEstado);

        filtroTareas.forEach(function(elemento, indice){
            console.log(`${indice + 1}. ${elemento.titulo} - ${elemento.estado}`)
        });

        break;

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

     default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
