const fs = require('fs');
const { crearArchivo } = require('./helper/multiplicar');
const {argv} = require('./config/yargs')

crearArchivo(argv.b, argv.l)
.then(nombreArchivo=> console.log(nombreArchivo,'ha sido creado'))
.catch(err=>console.log(err))
