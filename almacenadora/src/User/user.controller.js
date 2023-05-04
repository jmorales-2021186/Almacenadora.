'use strict'

const User = require('./user.model');
const { validateDate, encrypt, checkPassword } = require('../utils/validate');
const { createToken } = require('../services/jwt');

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




//Obtener todos los usuario
exports.getUsers = async(req, res)=>{
    try{
        let existUsers = await User.find();
        return res.send({message: 'Users', existUsers})
    }catch(e){
        console.error(e)
        return res.status(500).send({message: 'Error Server'})
    }
}



//Obtener un usuario
exports.getUser = async(req, res)=>{
    try{
        let params = req.params._id;
        let exitUser = await User.findOne({_id: params})
        if(!exitUser) return res.status(404).send({message: 'User not found'});
        return res.send({message: 'User found', exitUser})
    }catch(e){
        console.error(e)
        return res.status(500).send({message: 'Error Server'})
    }
}


//Eliminar un usuario
exports.deleteUser = async(req, res)=>{
    try{
        let params = req.params._id;
        let exitUser = await User.findOneAndDelete({_id: params});
        console.log(params)
        if(!exitUser) return res.status(404).send({message: 'User not found'});
        return res.send({message: 'User delete', exitUser});
    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error Server'});
    }
}


//Login
exports.login = async(req, res)=>{
    try{
        let data = req.body;
        let credentials = {
            username: data.username,
            password: data.password
        }
        let validate = validateDate(credentials);
        if(validate) return res.status(400).send(validate)

        //Buscarlo en la base de datos
        let user = await User.findOne({username: data.username});
        console.log(user);

        //vaidar la contraseña
         if(user && await checkPassword(data.password, user.password)){
            let userLogged = {
                name: user.name,
                username: user.username,
                role: user.role
            }
            let token = await createToken(user)
            return res.send({message: `Bienvenid@ ${user.name}`, token, userLogged})
        }
        return res.status(401).send({message: 'Invalid credentials'});
    }catch(e){
        console.error(e)
        return res.status(500).send({message: 'Error Server'})
    }
}