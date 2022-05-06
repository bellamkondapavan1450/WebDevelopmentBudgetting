const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requirelogin = require('../middleware/requirelogin');

const Post = mongoose.model("transaction");
const user = mongoose.model("user");



router.post('/addtrans',requirelogin,(req,res)=>{
  
    // console.log("coming here");
     const {title,category,amount,mode,date,month,year }= req.body;
     if(!title||!category){
        return res.status(422).json({msg : 'plz add all fields'});
     }
    //  console.log(req.user);
    const post = new Post({
      title, category,amount,mode,postedBy:req.user
    })
    post.save().then(reult=>{
      res.json({message:"posted succesfully"});
    }).catch(err=>{
      res.json({error:err});
    })
   })

   router.get('/mytrans',requirelogin,(req,res)=>{
    const user = mongoose.model("user");
    Post.find({postedBy:req.user})
  // user.findOne({_id:req.user._id})

    .populate("postedBy","_idname")
    .then(mypost=>{
      // user.findOne({_id:mypost[0]._idname})
      // .select("-password")
      // .then(usera =>{
        res.json({mypost})
      // })
    
    }).catch(err=>{
      console.log(err);
    })
    })
    



module.exports = router; 
