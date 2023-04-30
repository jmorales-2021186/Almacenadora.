'use strict'

const bcrypt = require('bcrypt');


//Datos obligatorios
exports.validateDate = (data)=>{
    let keys = Object.keys(data), msg ='';
    for(let key of keys){
        if(data[key] !== null &
           data[key] !== undefined &
           data[key] !=='')continue;
           msg += `Params ${key} is requiered `
    }
    return msg.trim();
}

//Encriptar password
exports.encrypt = async(password)=>{
    try{
        return await bcrypt.hash(password, 10);
    }catch(e){
        console.error(e);
        return e;
    }
}


//Verificar la password
exports.checkPassword = async(password, hash)=>{
    try{
        return await bcrypt.compare(password, hash)
    }catch(e){
        console.error(e);
        return e;
    }
}