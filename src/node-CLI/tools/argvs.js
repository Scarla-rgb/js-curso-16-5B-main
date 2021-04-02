
//Agregar los nuevos comandos a nuestra aplicacion CLI

const argvs = argvs_all
    .command('create', 'Create new Task', options.optionsCreate)
    .command('update', 'Actualizar con Completed', options.optionsUpdate)
    .command('delete', 'Delete Task', options.optionsErase)
    .help()
    .argv;