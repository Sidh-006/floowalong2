const mongoose = require('mongoose');

const productSchema = new mongoose .Schema(

)

images:{
    type:[String],
    required:[true,"Please upload product images"],
},
createdAt:{
   type:Date,
   default:Date.now
},

},
