/*require('colors');
const mostrarMenu=()=>{
    return new Promise(resolve=>{

        console.clear();
        console.log("==============================".cyan);
        console.log("=seleccione una opcion ".green);
        console.log("==============================".cyan);
    
        console.log(`${'1'.blue}Crear tarea `);
        console.log(`${'2'.blue} listar tareas`);
        console.log(`${'3'.blue}listar tareas compltas`);
        console.log(`${'4'.blue}listar tareas pendientes`);
        console.log(`${'5'.blue}completar tareas`);
        console.log(`${'6'.blue}borrar tareas`);
        console.log(`${'0'.blue}Salir`);
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
    readline.question('seleccione una opcion:',(opt)=>{
        //console.log(opt);
        readline.close();
        resolve(opt);
      })
    });
}
     const pausa=()=>{
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question(`\nPresione ${'Enter'.green}para coontinuar\n`,(opt)=>{
        readline.clore();
        //resolve();
    })
}  
//
module.exports={
    mostrarMenu,
    pausa
}*/