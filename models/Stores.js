const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    itemId:{
        type:String,
        trim:true,
        required:'Favor poner un nombre'
    },
    descripcion:{
        type:String
    },
    valor:Number
})

module.exports = mongoose.model('pedidos',storeSchema)