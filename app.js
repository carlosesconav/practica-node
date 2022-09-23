const fs = require('fs');
const { crearArchivo } = require('./helper/multiplicar');
const { argv } = require('./config/yargs')
const colors = require('colors');

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'.green))
    .catch(err => console.log(err))
