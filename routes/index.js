const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model("user");
const jwt = require('jsonwebtoken');
const {jwts}= require('../config/dev');
const requirelogin = require('../middleware/requirelogin');


router.post('/signup',(req,res)=>{
    const {name,email,password,profile}= req.body;
    if(!email || !password || !name) {
      return  res.status(422).json({error:"please fill in  all fields"});
    }
  User.findOne({email:email})
  .then((saveduser)=>{
      if(saveduser){
      return  res.status(422).json({error:"allready exists"});
          
      }
bcrypt.hash(password,12)
.then(hashedpassword=>{
  //  console.log('coming here');
    const user = new User({
        name,
        email,
        password,
        profile:profile
        
    })
    user.password = hashedpassword;
user.save()
.then(user=>{
  const token = jwt.sign({_id:user._id},jwts);  
  res.json({'user':user,'jwt':token})
})
})
.catch(err=>{
    console.log(err );
})
}

).catch(err=>{
    console.log(err );
})
     

})




router.post('/signin',(req,res)=>{
  // console.log('cmng here')
    const {email,password} = req.body
    if(!email || !password){
      return  res.status(422).json({error:'fill properly'});
    }
    User.findOne({email})
    .then(saveduser=>{
        if(!saveduser){
       return res.status(422).json({error:'invalid1 '});
        }
      //  console.log(password + saveduser.password);
    bcrypt.compare(password,saveduser.password)
     .then(doMatch =>{
        // if(password===saveduser.password){
        const token = jwt.sign({_id:saveduser._id},jwts);
        const {id,name,email}=saveduser;
        res.json({token,user:id,name,email});
            // res.json({message:'done!!!!'});
         })
        .catch(err=>{
            return res.status(422).json({message:'invalid2'})
        }
     )
     .catch(err=>{
         console.log(err);
     })
    })
})
   
router.post('/changename',requirelogin,(req,res)=>{
  const {email,name}=req.body

  // console.log('coming here')
 
  User.findOneAndUpdate({email},{name}).catch(resp=>{
    res.json({msg:"succesful"})
  }).then(err=>{
    console.log(err)
  })
})
router.post('/changeprofile',requirelogin,(req,res)=>{
  const {email,profile}=req.body

  // console.log('coming here')
 
  User.findOneAndUpdate({email},{profile}).catch(resp=>{
    res.json({msg:"succesful"})
  }).then(err=>{
    console.log(err)
  })
})
module.exports = router; 

