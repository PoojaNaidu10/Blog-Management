const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: {
        type:String,
        
    },
    author: {
        type: ObjectId,
        ref: "Authors"

    },
    price: Number,
    ratings: Number,

    publisher: {
        type: ObjectId,
        ref:"publisher"
    },
    isHardCover : {
        type:Boolean,
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
