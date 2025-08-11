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

// let arra = [1,43,4,24,5];

// arra.sort(function(a,b){
//     return a-b ;
// })
// console.log(arra) ;
// arra.sort(function(a,b){
//     return b-a ;
// })

// console.log(arra) ;


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


const monuments = [
  {
    name: "Tower of Pisa",
    pic: "https://plus.unsplash.com/premium_photo-1661962754715-d081d9ec53a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9udW1lbnRzfGVufDB8fDB8fHww",
    bio: "The Leaning Tower of Pisa, in Italy, is a freestanding bell tower famous for its unintended tilt due to unstable foundation soil."
  },
  {
    name: "Taj Mahal",
    pic: "https://plus.unsplash.com/premium_photo-1694475144012-f69becf88a2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    bio: "The Taj Mahal, located in Agra, India, is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
  },
  {
    name: "Humayun's Tomb",
    pic: "https://images.unsplash.com/photo-1672399241096-4d27d7ae4aca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    bio: "Humayun's Tomb in Delhi, India, is a UNESCO World Heritage Site and the first garden-tomb in the Indian subcontinent, built in 1572."
  },
  {
    name: "Eiffel Tower",
    pic: "https://plus.unsplash.com/premium_photo-1719430569503-338fc89eb21f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "The Eiffel Tower in Paris, France, is a wrought-iron lattice tower built for the 1889 World's Fair, and is one of the most visited monuments in the world."
  },
  {
    name: "Golden Temple",
    pic: "https://images.unsplash.com/photo-1614252087112-24d64a89d6e4?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "The Golden Temple, or Harmandir Sahib, in Amritsar, India, is the holiest Gurdwara of Sikhism and is known for its golden-plated exterior."
  },
  {
    name: "Masjid al-Haram",
    pic: "https://media.istockphoto.com/id/1192573795/photo/the-holy-mosque-in-makkah.webp?a=1&s=612x612&w=0&k=20&c=rXkbtx8wCLyGKTUrP7p80qMlveWB6eZjL-KGIyRyp6E=",
    bio: "Masjid al-Haram in Makkah, Saudi Arabia, is the largest mosque in the world and surrounds Islam's holiest site, the Kaaba."
  }
];

function showPlaces(arra){
    arra.forEach(function(place){
        // Create main card div
const card = document.createElement('div');
card.classList.add('card');

// Create image element
const img = document.createElement('img');
img.src = place.pic ;
img.alt = "";
img.classList.add("bg-img") ;

// Create content div
const content = document.createElement('div');
content.classList.add('content');

// Create heading
const h3 = document.createElement('h3');
h3.textContent = place.name ;

// Create paragraph
const p = document.createElement('p');
p.textContent = place.bio;

// Append heading & paragraph to content
content.appendChild(h3);
content.appendChild(p);

// Append img & content to card
card.appendChild(img);
card.appendChild(content);

// Append card to body or a container
document.querySelector(".cards").appendChild(card);
})
}

showPlaces(monuments) ;
let temp = monuments;

let inp = document.querySelector("input") ;
inp.addEventListener("input", function () {
    document.querySelector(".cards").innerHTML = "";

    // Remove any existing message first
    const existingMessage = document.querySelector(".message");
    if (existingMessage) {
        existingMessage.remove();
    }

    let newUsers = monuments.filter((things) => {
        return things.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    if (newUsers.length === 0) {
        let mess = document.createElement('div');
        mess.textContent = "Sorry! No Cards found.";
        mess.classList.add("message");
        document.querySelector('.main').appendChild(mess);
    } else {
        showPlaces(newUsers);
    }
});


    
