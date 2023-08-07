require('colors');
console.clear();
const { guardarBD, leerDB } = require('./helpers/guardarArchivo');
//const{mostrarMenu,pausa}=require('./helpers/mensajes')
const{inquirerMenu,
    pausa,
    leerInput}=require('./helpers/inquirer');
const Tareas=require('./models/tareas');

const main = async()=>{
    let opt="";
        const tareas = new Tareas();
 /* const tareasDB=leerDB();
    if(tareasDB){
   tareas.crearTareaFromArray(tareasDB);
        }*/
   // await pausa();
  do{
    opt =await inquirerMenu();
    switch(opt){
        case '1':
            //
            const desc=await leerInput('Descripcion:');
            tareas.crearTarea(desc);
            console.log(desc);
        break;
        case '2':
            tareas.listadoCompleto();
          break;
        case '3':
        break;
    }
    //await pausa();
guardarBD(tareas.listadoArr);//nosotros en 
//opt=await inquirerMenu();
//console.log({opt});
//if(opt!=='0')
//const tarea=new Tarea('Comprar Comida');
//console.log(tarea);
   await pausa();
  } while(opt!=='0');
    mostrarMenu();
   // pausa();
}
main();