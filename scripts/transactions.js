if(!localStorage.getItem('user')|| !localStorage.getItem('jwt')){
    // && (window.location.pathname!='/signin.html' || window.location.pathname!='/signup.html')
    console.log('cmng');
    
    window.location.href='./auth/signin2.html'
   
    }
else{
// window.onload = function(){
    console.log('cmng');

    // var data = []
    var url ="http://54.89185.189:3000/mytrans"
    fetch(url,{
        method:'get',
        headers:{
            "Authorization":"Bearer "+ localStorage.getItem("jwt"),
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    .then(result=>{
        //  setdata(result.posts);
        var symbol="-"
        let data = result.mypost
        console.log(data)
     
        for (let i =data.length - 1 ; i>=0 ; i--){
            if(data[i].mode =="debit"){
                symbol = "-"
           }
           else{
                symbol = "+"
   
           }
            console.log(data[i]);
 document.getElementById('sclist').innerHTML+=" <div class='transac'> <div class='flex'><span><b>"+data[i].title+
 "</b> </span><span class='amount'>"+symbol+data[i].amount+"     </span>    </div>   </div>"     
                  
            
        }
   
    })
}





function add(){
var title = document.getElementById('tit1').value
var category = document.getElementById('tit2').value
var amount = document.getElementById('tit3').value
var mode = document.getElementById('tit4').value

var url3 ="http://54.89185.189:3000/addtrans"
// console.log(title,category,am)
// amount = toString(amount);
fetch(url3 , {
    method:'post',
    headers:{
        "Authorization":"Bearer "+ localStorage.getItem("jwt"),
        "Content-Type":"application/json"
        },
    body:JSON.stringify({
        title,category,amount,mode
    })
}).then(res=>res.json())
    .then(result=>{
        if (result.message){
          console.log("succesful")
          fetch("http://54.89185.189:3000/addnots",{
            method:'post',
              headers:{
                "Authorization":"Bearer "+ localStorage.getItem("jwt"),
                "Content-Type":"application/json"
              }
              ,
              body:JSON.stringify({
                  title:"A transaction has been added"
              })
          }).catch(res=>{
              console.log(res)
          })
          window.location.reload()
        }
        else{
        console.log(result.error)
        }
    })    

}
