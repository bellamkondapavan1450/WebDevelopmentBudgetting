


 function signup(){
            var name = document.getElementById("name")
            var email = document.getElementById("emailup");
            var password = document.getElementById("passwordup");            
            localStorage.setItem('user','done'); 
            localStorage.setItem('email',email.value); 
            localStorage.setItem('nots',"welcome to budgeteer , start your financial planning now .")

        }
        
        
        
        function signin(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            localStorage.setItem('user','done');
            localStorage.setItem('email',email.value); 
            localStorage.setItem('nots',"welcome back !!!")


        }


        const postData = (img,name,email,password)=>{
            const data = new FormData()
             data.append("file",img);
             data.append("upload_preset","species");
             data.append("cloud_name","prabhath");
            
             Axios.post("https://api.cloudinary.com/v1_1/prabhath/image/upload",data)
            .then(data=>{console.log(data);
           var url=(data.data.secure_url);
            console.log(url);})
           
        
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                   },
                body:JSON.stringify({
                    name,
                    email,
                    password,
                    profile:url
                })
            }).then(res=>res.json())
            .then(res=>{
                if(res.error){
                   console.log(res.error)
                }
                else{
                  alert("Signed Up");
                    
                }
                
            }).catch(err=>{
        console.log(err);
            })
        }