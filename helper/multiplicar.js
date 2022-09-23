const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta=10) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`

        }

        if (listar) {

            console.log('=========================='.bgMagenta);
            console.log(`     Tabla del ${base} `);
            console.log('=========================='.bgMagenta);

            console.log(salida);
        }

        fs.writeFileSync(`./out/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.bgGreen;

    } catch (error) {

        throw error;

    }

}

module.exports = {

    crearArchivo: crearArchivo

};
