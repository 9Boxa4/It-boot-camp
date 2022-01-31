import Chatroom from "./chat.js";


let obj1 = new Chatroom(`general`, `Janko`)
let obj2 = new Chatroom(`homework`, `Zarko`)
let obj3 = new Chatroom(`JS`, `Stefan`)

// console.log(obj1.username, obj1.room);

obj1.addChat(`await testiranje`)
    .then(() => {
        console.log(`uspesno dodat chat`);
    })
    .catch(err => {
        console.log(`Doslo je do greske ${err}`);
    })

    // obj2.getChats(()=>
    // {

    // })