'use strict'

const Lease = require('./lease.model');
const User = require('../user/user.model');
const Storage = require('../storages/storage.model');
const Service = require('../AdittionalsServices/servicios.model')
const leaseInfo = ['name']
const strongeInfo = ['name']

exports.createLease = async(req, res)=>{
    try{
        let data = req.body
        let userExist = await User.findOne({_id: data.user});
        console.log(userExist);
            if(!userExist) return res.status(404).send({message: 'User not found'});
        let storageExist = await Storage.findOne({_id: data.storage});
            if(!storageExist) return res.status(404).send({message: 'Storage not found'});
            if(!storageExist.availability) return res.status(500).send({message: 'Storage is already on lease'});

            console.log('1');
            await Storage.findOneAndUpdate(
                {_id: storageExist._id},
                {availability: false}, 
                {new: true}
              )
              console.log('2');
            const service = await Service.findOne({_id:data.additionalServices})
            if(!service) return res.status(404).send({message: 'Service not found'})

            const startDate = new Date();
            data.startDate = startDate.toISOString().substr(0, 10);
                console.log('3');
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 30);
            data.endDate = endDate.toISOString().substr(0, 10);
                console.log('4');
        let newLease = new Lease(data);
        console.log('5');
        await newLease.save()
        console.log('6');
        return res.status(200).send({message: 'Lease has been created'});
        
    }catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error Server'})
    }
}



exports.getLeases = async(req, res) =>{
    try{
        let leases = await Lease.find().populate('user', leaseInfo).populate('storage', strongeInfo);
        return res.send({leases})
    }catch(e){
        console.log(e);
        return res.status(500).send({message: 'Error Server'})
    }
}


exports.updateLease = async(req, res)=>{
    try{

    }catch(e){
        console.log(e);
        return res.status(500).send({message: 'Error Server'})
    }
}

exports.deleteLease = async(req, res)=>{
    try{
        let params = req.params.id;
        let leaseExist = await Lease.findOneAndDelete({_id: params})
        if(!leaseExist) return res.status(404).send({message: 'Lease not found'})
        let storage = await Storage.findOne({_id: leaseExist.storage})
        await Storage.findOneAndUpdate(
            {_id: storage._id},
            {availability: true}, 
            {new: true}
          )
        return res.send({message: 'Lease deleted succesfully'})
    }catch(e){
        console.log(e);
        return res.status(500).send({message: 'Error Server'})
    }
}