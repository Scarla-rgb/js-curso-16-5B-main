//Argumentos procesados
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argvs_all = yargs(hideBin(process.argv))
const options = require('./options');


//Exportamos argv para poder usarlo en todo mi proyecto
module.exports = { argv }