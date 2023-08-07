const fs=require('fs');

const guardarBD=(data)=>{
const archivo ="./db/data.json";
fs.writeFileSync(archivo,JSON.stringify(data));
}
const leerDB = ()=>{
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info =fs.readFileSync(archivo,{encoding:'utf-8'});
    const data =JSON.parse(info);
    console.log(data);
    return null;
}
module.exports={
    guardarBD,
    leerDB
}