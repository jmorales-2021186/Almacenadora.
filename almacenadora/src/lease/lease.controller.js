'use strict'

const Lease = require('./lease.model');
const User = require('../user/user.routes');
const Storage = require('../storages/storage.model');

exports.createLease = async(req, res)=>{
    try{
        let data = req.body
        let userExist = await User.findOne({_id: data.user});
            if(!userExist) return res.status(404).send({message: 'User not found'});
        let storageExist = await Storage.findOne({_id: data.storage});
            if(!storageExist) return res.status(404).send({message: 'Storage not found'});
            if(!storageExist.availability) return res.status(500).send({message: 'Storage is already on lease'});

            await Storage.findOneAndUpdate(
                {_id: storageExist._id},
                {availability: false}, 
                {new: true}
              )
            const startDate = new Date();
            data.startDate = startDate.toISOString().substr(0, 10);
        
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 30);
            data.endDate = endDate.toISOString().substr(0, 10);

        let newLease = new Lease(data);
        await newLease.save()
        return res.status(200).send({message: 'Lease has been created'});
        
    }catch (err) {
        console.log(err);
    }
}