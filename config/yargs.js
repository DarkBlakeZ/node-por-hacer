const descripcion = {
    demmand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de la tarea', { descripcion, completado })
    .command('borrar', 'Borra un elemento', { descripcion, completado })
    .help()
    .argv;


module.exports = {
    argv
}