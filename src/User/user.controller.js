'use strict'

const User = require('./user.model');
const { validateDate, encrypt, checkPassword } = require('../utils/validate');

exports.test = async(req, res)=>{
    return res.send({message: 'Test is running'})
}


//Usuario default
exports.userDefault = async()=>{
    try{
        let data = {
            name: 'admin',
            surname: '418',
            username: 'admin',
            password: 'admin',
            email: 'admin@gmail.com',
            phone: '12345678',
            role: 'ADMIN'
        }
        data.password = await encrypt(data.password)
        let existDefault = await User.findOne({name: data.name});
        let addDefault;
        (existDefault) 
         ? ( console.log(`Admin ${data.name} creado por default`) )
         :  (addDefault = new User(data),
            await addDefault.save(),
            console.log('Usuario por default creado'))


    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error server'})
    }
}


//Register Admin
exports.registerAdmin = async(req, res)=>{
    try{
        let data = req.body;
        let params = {
            password: data.password
        }

        let validate = validateDate(params);
        if(validate) return res.status(400).send({validate})

        if(data.role == 'CLIENT') return res.status(403).send({message: 'Solo puedes agregar rol Trabajador'});

        data.password = await encrypt(data.password);
        let user = new User(data)
        await user.save();
        return res.send({message: 'Account create sucessfully'});

    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error Server'});
    }
}


//Register User
exports.registerUser = async(req, res)=>{
    try{
        let data = req.body;
        //Parametros obligatorios
        let params = {
            password: data.password
        }
        
        let validate = validateDate(params);
        if(validate) return res.status(400).send({validate});
        if(data.role) return res.status(403).send({message: 'No puedes agregar un rol'});

        data.password = await encrypt(data.password);
        data.role = 'CLIENT';
        let user = new User(data);
        await user.save();
        return res.send({message: 'Account create sucessfully'});
    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error server'});
    }
}