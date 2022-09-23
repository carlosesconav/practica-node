
const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number'.bgRed,
        describe: "Es la base de la tabla de multiplicar".bgYellow,
        demandOption: true
    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {

            throw 'La base tiene que ser un numero'

        }

        return true;
    })
    .options('l', {

        alias: "listar",
        type: "boolean",
        default: false,
        describe:"Mustra la tabla en la consola".bgYellow
    }).check((argv, options) => {

        if (isNaN(argv.b)) {

            throw 'La base tiene que ser un numero'

        }

        return true;

    }).argv;

module.exports = { argv: argv }