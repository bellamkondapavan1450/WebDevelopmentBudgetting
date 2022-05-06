// // const e = require("cors")
// import tata from 'tata-js';
// tata.text('Hello World', 'CSSScript.Com', {
//     position: 'tr'
//   })
var url ="http://localhost:3000/userdetails"
var name1="";
var email = "";
var profile="";
var user_id ="";
fetch("http://localhost:3000/userdetails",{
    method:'get',
    headers:{
        "Authorization":"Bearer "+ localStorage.getItem("jwt")
    }
}).then(res=>res.json())
.then(result=>{
    console.log(result)
      name1 = result.usera.name
    //   email = result.email
    //   profile= result.profile
    //   user_id=result._id
    const k =document.getElementById('n1');
    k.innerHTML =name1
    document.getElementById('p1').style.backgroundImage="url("+result.usera.profile+")"
    console.log(name1)
})



  // var data = []
  var url ="http://localhost:3000/mytrans"
  fetch(url,{
      method:'get',
      headers:{
          "Authorization":"Bearer "+ localStorage.getItem("jwt")
      }
  }).then(res=>res.json())
  .then(result=>{
    data= result.mypost
    for (let i =data.length-1;i>data.length-5;i--){
        if(data[i].mode =="debit"){
            symbol = "-"
       }
       else{
            symbol = "+"
       }
    document.getElementById('sc1').innerHTML+="<div class='t1'><span class='t2'><b>"+data[i].title+
    "</b></span><span class='ta'><b>"+symbol+ data[i].amount+
    "</b></span></div><br>"
    console.log(data[i]);
// document.getElementById('sclist').innerHTML+=" <div class='transac'> <div class='flex'><span><b>"+data[i].title+
// "</b> </span><span class='amount'>"+symbol+data[i].amount+"     </span>    </div>   </div>"  
    }
    
  }).catch(err=>{
      console.log(err)
  })

