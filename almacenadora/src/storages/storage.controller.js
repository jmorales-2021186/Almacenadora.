'use strict'

const Storage = require('./storage.model');

exports.addStorage = async(req, res)=>{
    try {
        let data = req.body
        let storage = new Storage(data);
        /* data.availability = true */
        await storage.save();
        return res.send({message: 'Storage created succesfully'})
    } catch (err) {
        console.error(err)
        return res.send({message: 'Error creating a storage'})
    }
}

exports.searchByNameStorage = async(req, res)=>{
    try {
        let data = req.body.name;
        let storage = await Storage.findOne({name: data}).lean();
        if(!storage)return res.status(404).send({message: 'Storage not found'});
        return res.send({storage});
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error getting storage' });
    }
}

exports.getStorages = async(req, res)=>{
    try {
        let storages = await Storage.find();
        return res.send({storages})
    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error getting storages'});
    }
}

exports.getStorage = async(req, res)=>{
    try{
        let data = req.params.id;
        let storage = await Storage.findOne({_id: data});
        if(!storage) return res.status(404).send({message: 'Stronge not found'});
        return res.send({storage})
    }catch(e){
        console.log(e);
        return res.status(500).send({message: 'Error server'});
    }
}

exports.updateStorage = async(req, res)=>{
    try {
        let data = req.body;
        let storageId = req.params.id;
        let updateStorage = await Storage.findOneAndUpdate(
            {_id: storageId},
            data,
            {new: true}
        ).lean()
        if(!updateStorage) return res.status(404).send({message:'Storage not found'});
        return res.send({message: 'Storage updated succesfully', updateStorage});
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error updating storage'});
    }
}

exports.deleteStorage = async(req, res)=>{
    try {
        let storageId = req.params.id;
        let deleteStorage = await Storage.findOneAndDelete({_id: storageId});
        if(!deleteStorage) return res.status(404).send({message: 'Storage not found'});
        return res.send({message: 'Storage deleted succesfully'});
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error removing product'});
    }
}