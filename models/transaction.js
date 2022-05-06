const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema.Types
const postSchema =new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    // likes:[{type:ObjectId,ref:"User" }],
    mode:{
        type:String,
        required:true
    },

   
    postedBy:{
        type:ObjectId,
        ref:"user"
        }

    
})

mongoose.model("transaction",postSchema);