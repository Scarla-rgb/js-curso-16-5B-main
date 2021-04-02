

const description = {
    demand: true, //opcion obligatoria
    alias: 'd', // -
    desc: 'Descripcion de la tarea a realizar'
}

const title = {
    demand: true, //opcion obligatoria
    alias: 't', // -
    desc: 'Titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c',
    default: true, //Por default su valor es true
    desc: "Marca como completada la tarea"
}

const erased = {
    alias: 'e',
    default: true, //Por default su valor es true
    desc: "Borra la tarea"
}

//Esta bandera sera obligatoria para el coomando create.
const opcionsCreate = {
    description,
    title
}

const opcionsUpdate = {
    title,
    completed
}

const opcionsErase = {
    title,
    erased
}


module.exports = {
    opcionsCreate,
    opcionsUpdate,
    opcionsErase
}