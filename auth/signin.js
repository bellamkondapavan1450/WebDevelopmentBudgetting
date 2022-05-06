function signin(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    // var email ='p@gmail.com'
    // var password =  '123234'

    const url = "http://ec2-54-89-185-189.compute-1.amazonaws.com:3000/signin"
  

        fetch(url,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
               },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
               console.log("error");
            }
            else{
                localStorage.setItem("jwt2",data.token)
                localStorage.setItem("jwt",data.token);
                localStorage.setItem("user",JSON.stringify(data.user))
               window.location.href='../index.html'
               fetch("http://ec2-54-89-185-189.compute-1.amazonaws.com:3000/addnots",{
                method:'post',
                  headers:{
                    "Authorization":"Bearer "+ localStorage.getItem("jwt"),
                    "Content-Type":"application/json"
                  }
                  ,
                  body:JSON.stringify({
                      title:"Welcome back to Budgeteer"
                  })
              }).catch(res=>{
                  console.log(res)
              })
                
            }
        }).catch(err=>{
    console.log(err);
        })
    }



    


    