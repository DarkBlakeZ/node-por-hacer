const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let i = 0;
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./DB/data.json`, data, (e) => {
        if (e) throw new Error('El programa a fallado', e);
    })
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../DB/data.json')

    } catch (e) {
        listadoPorHacer = [];
    }
}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true;
    } else {
        return false
    }

    //Segunda Opcion
    /*
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

        if (listadoPorHacer.length === nuevoListado.length) {
            return false;
        } else {
            listadoPorHacer = nuevoListado;
            guardarDB();
            return true;
        }
    */

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};