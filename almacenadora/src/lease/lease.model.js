const mongoose = require ('mongoose');

const leaseSchema = mongoose.Schema({
    storage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storage',
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    additionalServices:{
        type: mongoose.Schema.Types.ObjectId, 
            ref: 'Servicio'
       
        }
       
    ,
    endDate: {
        type: String,
        required: true
    }
}, 
    {
        versionKey: false,
    }
);

module.exports = mongoose.model('lease', leaseSchema);