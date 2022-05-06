const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requirelogin = require('../middleware/requirelogin');

const Post = mongoose.model("nots");
const user = mongoose.model("user");


router.get('/userdetails',requirelogin,(req,res)=>{
  user.findOne({_id:req.user._id})
 .select("-password")// to not send password to the front end
  .then(usera =>{
    // console.log(usera)
     
          res.json({usera})
      })
 
  .catch(err=>{
      return res.status(404).json({error:"user not found here"})
  })


})

router.post('/addnots',requirelogin,(req,res)=>{
 
     const {title}= req.body;
     if(!title){
        return res.status(422).json({msg : 'plz add all fields'});
     }
     console.log(req.user);
    const post = new Post({
      title, postedBy:req.user
    })
    post.save().then(result=>{
      res.json({msg:"saved succesfully"});
    }).catch(err=>{
      console.log(err);
    })
   })

   router.get('/mynots',requirelogin,(req,res)=>{
     console.log('reach')
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost=>{
     
        res.json({mypost})     
    
    }).catch(err=>{
      console.log(err);
    })
    })
    router.post('/removenots',requirelogin,(req,res)=>{
      console.log('reach')
     Post.findOneAndDelete({postedBy:req.user._id})
    //  .populate("postedBy","_id name")
     .then(data=>{
       if(!data){
         res.json({msg:"removed succesfully"});
      
        
       }
       else{
         res.json({msg:"notsuccesful"})
       }
     })
     })
 

    



module.exports = router; 
