var data={}

if(!localStorage.getItem('user')|| !localStorage.getItem('jwt')){
    // && (window.location.pathname!='/signin.html' || window.location.pathname!='/signup.html')
    console.log('cmng');
    
    window.location.href='./auth/signin2.html'
   
    }
else{// window.onload = function(){
    // console.log('cmng');
    // var data = []
    var url ="http://localhost:3000/mynots"
    fetch(url,{
        method:'get',
        headers:{
            "Authorization":"Bearer "+ localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        
        //  setdata(result.posts);
       data = result.mypost
        // console.log(data)
        if(!data){
            console.log('cmng');
            document.getElementById('notifications').innerHTML+=" <div class='points' > <span class='notifies' id = 'nots'>   No new notifications </span> </div>  "
        }
        for (let i = 0; i < data.length; i++){
        console.log(data[i].title)       
        document.getElementById('notifications').innerHTML+=" <div class='points' > <span class='notifies' id = 'nots'>" +
          data[i].title+
    "</span> </div>  "
              
        }
   
    })
}


function clearnots(){
    var url2 ="http://localhost:3000/removenots"
    fetch(url2,{
        method:'post',
         headers:{
            "Authorization":"Bearer "+ localStorage.getItem("jwt")
        }
    
    }).catch(err=>{
        if(err.msg=="notsuccesful"){
            clearnots()
        }
        else{
            window.location.reload()
        }
        console.log(error)
    })
}


// <div class="points">
// <span class="notifies" id = 'nots'>
//      hello world
// </span>
// <div class="ion"  >
// <ion-icon name="close-circle-outline" id = 'ion' onclick="close()"></ion-icon>

// </div>