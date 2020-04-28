const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function (arrayTareas) {
        return fs.writeFileSync(this.archivo,JSON.stringify(arrayTareas));
 
    },

    guardarTarea: function (unaTarea) {
        let ListadoJSONTareas = this.leerJSON() ;
        ListadoJSONTareas.push(unaTarea);
        this.escribirJSON(ListadoJSONTareas);
        console.log("Ok Tarea")

    },

    leerPorEstado: function (unEstado){
        let ListadoJSONTareas = this.leerJSON() ;
        let filtrados = ListadoJSONTareas.filter(function(elemento) {
            return elemento.estado == unEstado;
        });
       return filtrados;
 
    }
}

module.exports = archivoTareas;