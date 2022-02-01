import Chatroom from "./chat.js";
import ChatUI from "./ui.js";




let obj1 = new Chatroom(`general`, `Janko`)
let obj2 = new Chatroom(`homework`, `Zarko`)
let obj3 = new Chatroom(`JS`, `Stefan`)

// console.log(obj1.username, obj1.room);

// obj1.addChat(`await testiranje`)
//     .then(() => {
//         console.log(`uspesno dodat chat`);
//     })
//     .catch(err => {
//         console.log(`Doslo je do greske ${err}`);
//     })

// obj2.getChats(()=>
// {

// })

// obj1.getChats(d => {
//     console.log(d);
// });

let lista = document.querySelector(`#ispisPor`)
let is = new ChatUI(lista)

// console.log(lista);
// console.log(is.lista);

// obj1.templateUI(us,por,ts)
// {
//    let d =`${us.username}: ${por.message} <br> ${ts.createdAt}`;
// }

obj1.getChats(d=>
    {
        is.templateLi(d);
    })

//     obj1.getChats(d=>
//         {
//             formating(d)
//         })