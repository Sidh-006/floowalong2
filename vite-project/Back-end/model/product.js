const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
images:{
    type:String,
    required:[true,"Please upload product images"],
},
createdAt:{
   type:Date,
   default: Date.now,
},



})

cart: [
    {
        productid: {
            type:String,
            required: [true, "Please provide the product ID"],
            unique: true,
        },
        quantity: {
            type:Number,
            required: [true, "Please provide the product quantity"],
            min: [0,"Quantity cannot be negative"],
        },
    },
]
