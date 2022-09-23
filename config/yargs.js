
const argv = require('yargs')
.options('b', {
    alias:'base',
    type:'number',
    demandOption:true
})
.check((argv,options)=>{

    if(isNaN(argv.b)){

        throw 'La base tiene que ser un numero'

    }

    return true;
})
.options('l',{

    alias:"listar",
    type:"number",
    demandOption: true,
    default:false
}).check((argv,options)=>{

    if (isNaN(argv.b)) {
        
        throw 'La base tiene que ser un numero'

    }

    return true;

}).argv;


module.exports = {argv:argv}