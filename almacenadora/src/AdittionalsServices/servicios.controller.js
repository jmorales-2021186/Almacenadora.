'use strict'

const Servicio = require('./servicios.model')

exports.test = (req, res)=>{
    res.send({message: 'Test function is running'})

}


exports.addServices = async(req, res)=>{
    try{
        let data = req.body;
        let service =new Servicio(data)
        await service.save();
        return res.send({message: 'Service saved sucessfully', service})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error creating Services'})
    }
}

exports.getServices = async(req, res)=>{
    try{
        let servicios = await Servicio.find()
        return res.send({message: 'Services found', servicios})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error getting Services'})
    }
}        
      
exports.getService = async(req, res)=>{
    try{
        let servicioId = req.params.id
        let servicio = await Servicio.findOne({_id: servicioId})
        if(!servicio) return res.status(404).send({message: 'Service not found'})
        return res.send({message: 'Service found', servicio})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error getting Service'})
    }
}