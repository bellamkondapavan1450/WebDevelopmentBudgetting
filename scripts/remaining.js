if(!localStorage.getItem('user')|| !localStorage.getItem('jwt')){
    // && (window.location.pathname!='/signin.html' || window.location.pathname!='/signup.html')
    
    window.location.href='./auth/signin2.html'
   
    }

function logout(){
        localStorage.removeItem('user')
        localStorage.clear()
    }
//     function username(){
//         user= JSON.parse(localStorage.getItem('userdetails')).name
//         console.log(user)
//         return user
//     }
// function close(){
//         localStorage.removeItem('nots')
//         document.getElementById('nots').innerHTML="No new notifications"
//     }
// function addtransaction(){
//    var title = document.getElementById('tit1');
//    var amount = document.getElementById('tit3');
//    var mode=document.getElementById('tit4');
//    var category= document.getElementById('tit2');
//    var present={
//         title:title.value,
//         amount:amount.value,
//         mode:mode.value,
//         category:category.value
//     };
//     var  t= localStorage.getItem('transactions');
//     if(t){
//     console.log(t[0]);

//         t.push(present)
//         localStorage.setItem('transactions',t)

//     }
//     else{
//         var  transactions=[present];
//         localStorage.setItem('transactions',transactions);
//     }
//     console.log(t);   

// }

//     // document.getElementById('ion').onclick={
//     //     localStorage.removeItem('nots')
//     //   document.getElementById('nots').innerHTML="No new notifications"} 