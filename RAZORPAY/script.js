// var ram = 5 ;
// console.log(ram) ;

//const { createElement } = require("react");


// function discount(percentage){
//     return function(mrp){
//         mrp = mrp - mrp*(percentage/100) ;
//         console.log(mrp) ;
//     }
// }

// let finalprice = discount(20 ) ;
// finalprice(200) ;

// let arr = [1,43,4,24,5];

// arr.sort(function(a,b){
//     return a-b ;
// })
// console.log(arr) ;
// arr.sort(function(a,b){
//     return b-a ;
// })

// console.log(arr) ;


// let obj = {
//     name : "Homam " ,
//     age : 66 ,
//     height : 177 ,
//     address: {
//         city : 'patna' ,
//         pincode: 800007 
//     }
// } ;


// // pass by refrence ho jata hai .
// let obj2 = obj ;
// obj2.address.city = "delhi" ;
// console.log(obj) ;
// obj.address.city = "patna" ;
// console.log(obj) ;

// //pass by value karne ke liye ;

// let obj3 = {...obj} ;  // spread operator // shallow copy .
// obj3.age = 11 ;
// console.log(obj) ;
// console.log(obj3) ;

// // DEEP COPY ;
// let obj4 = JSON.parse(JSON.stringify(obj))
// obj4.address.city = "delhi" ;

// console.log(obj) ;

document.body.classList.add("dark-theme");


// let inputs = document.querySelectorAll("input") ;

// inputs[4].addEventListener('click',function(dets){
//     dets.preventDefault() ;

//     let newdiv = document.createElement("div") ;
//     newdiv.classList.add("card")

//     let picdiv =  document.createElement("div") ;
//     picdiv.classList.add("pic") ;

//     let h1 = document.createElement('h1')
//     h1.textContent = inputs[1].value ;
//     let h3 = document.createElement('h3')
//     h3.textContent = inputs[2].value
//     let p = document.createElement('p') ;
//     p.textContent = inputs[3].value ;
//     let imagee = document.createElement('img')
//     imagee.src = inputs[0].value ;

//     picdiv.appendChild(imagee)

//     let main = document.querySelector('#main') ;
//     newdiv.appendChild(picdiv) ;
//     newdiv.appendChild(h1)
//     newdiv.appendChild(h3)
//     newdiv.appendChild(p)
//     main.appendChild(newdiv) ; 

//     inputs.forEach(function(things){
//         if(things.type !== 'submit'){
//             things.value = ""
//         }
//     })
// })

let form = document.querySelector("#loginForm") ;
let email = document.querySelector("#email") ;
let password = document.querySelector("#password") ;

form.addEventListener("submit",function(dets){
    dets.preventDefault() ;

    document.querySelector("#emailerror").textContent = ""
    document.querySelector("#passerror").textContent = ""
    document.querySelector("#errorMsg").textContent = " "

    const vemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    const vpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/
    let message = false ;

    let emailans = vemail.test(email.value) ;
    let passans = vpass.test(password.value) ;

    if(!emailans){
        document.querySelector("#emailerror").textContent  = "Email is Incorrect! "
        document.querySelector("#emailerror").style.display = "initial"
        message = true ;
    }
    if(!passans){
        document.querySelector("#passerror").textContent = "Password is Incorrect! "
        document.querySelector("#passerror").style.display = "initial"
        
        message = true ;
    }
    
    if(!message){
        document.querySelector("#errorMsg").textContent = "Everything is fine "
        document.querySelector("#errorMsg").textContent = "Everything is fine "

    }
})