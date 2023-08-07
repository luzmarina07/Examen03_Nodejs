const inquirer=require('inquirer');
//const { default: Choices } = require('inquirer/lib/objects/choices');
require('colors');
//envio de informacion automatica
const preguntas=[
    {
type:'list',
name:'opcion',
message:'¿que desea hacer?',
choices:[
    {
        value:'1',
       name:`${'1.'.cyan} crear tarea`
    },
    {
        value:'2',
        name:`${'2.'.cyan} listar tareas`
    },
    {
        value:'3',
        name:`${'3.'.cyan} listar tareas completadas`
    },
    {
        value:'4',
        name:`${'4.'.cyan} listar tareas pendientes`
    },
    {
        value:'5',
        name:`${'5.'.cyan} listar tareas pendientes`
    },
    {
        value:'6',
        name:`${'6.'.cyan} listar tareas pendientes`
    },
     {
        value:'0',
        name:`${'0.'.cyan} listar tareas pendientes`
     }
   ]
  }
];
const inquirerMenu=async()=>{
        console.clear();
        console.log("==============================".green);
        console.log("seleccione una opcion".bgMagenta);
        console.log("==============================\n".green);
        const {opcion} = await inquirer.prompt(preguntas);
        return opcion;

    }
    const pausa=async()=>{
        const question=[
            {
            type:'input',
            name:'enter',
            message:`presione ${'enter'.green} para continuar`
            }
        ];
        console.log("\n");
        await inquirer.prompt(question);
    }
    const leerInput=async(message)=>{
        const question=[
            {
                type:'input',
                name:'desc',
                message,
                validate(value){
                    if(value.length==0)
                    return "por favor ingrese un valor"
                    return true;
                }
            }
        ];
        //aplicamos la desestructuracion
        const {desc}=await inquirer.prompt(question);
        return desc;
    }
    module.exports={
        inquirerMenu,
        pausa,
        leerInput
    }