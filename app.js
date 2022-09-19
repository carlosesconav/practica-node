const fs = require('fs')
const { crearArchivo } = require('./helper/multiplicar');

console.log(process.argv);
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=')
console.log(base)

// const base = 7;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'))
    .catch(err => console.log(err));