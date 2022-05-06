// import axios from 'axios';
// var axios = require('axios');
// const axios = require('axios');
var img2 = document.getElementById('img');
document.getElementById('but').addEventListener("click", function(event){
    event.preventDefault()
  });
  

function img(){
    img2.addEventListener('change',function(event){ console.log(event); })
   
}


function post(){

    var name = document.getElementById('name')
    var email =  localStorage.getItem('email')
    var ph = document.getElementById('ph')
    var income = document.getElementById('income')
    var img = document.getElementById('img')
    var c = document.getElementById('country')
    var password = '1234'
   localStorage.setItem('nots',"welome to the budgeteer website thank you for signinup in our website .")
    postData(name.value,email,ph.value,password,c.value)


}


    


function postData  (name,email,ph,password,country){
    console.log('cmng')
    // const data = new FormData()
    // var img = document.createElement('IMG')
    // var url2 = '../images/profile.jpg'
    // img.src = url2
    //  data.append("file",img);
    //  data.append("upload_preset","species");
    //  data.append("cloud_name","prabhath");
     const profile = 'https://res.cloudinary.com/prabhath/image/upload/v1616869609/vuplabufmhvoxrs0mjs2.jpg'
    
    //  axios.post("https://api.cloudinary.com/v1_1/prabhath/image/upload",data)
    // .then(data=>{console.log(data);
    // var url=(data.data.secure_url);
    // console.log(url);}
    // )
   const url = "http://54.89185.189:3000/signup"

    fetch(url,{
        method:"POST",
        mode: 'cors',
        headers:{
            "Content-Type":"application/json"
           },
        body:JSON.stringify({
            name,
            email,
            password,            
            profile:profile
        })
    }) .then(res=>res.json())
    .then(data=>{
        if(data.error){
            // M.toast({html: data.error})
            console.log(data.error)
        }
        else{
           localStorage.setItem('user',data.user._id)
           localStorage.setItem('jwt',data.jwt) 
          alert("Signed Up");
          window.location.href='../index.html'
        }
    }).catch(err=>{
console.log(err);
    })


 }