import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

//DOM
let formSend = document.querySelector(`#sendForm`);
let inputSend = document.querySelector(`#send`);
let lista = document.querySelector(`#ispisPor`);

//Instance klasa
let obj1 = new Chatroom(`general`, `Janko`);
let is = new ChatUI(lista);

//

// obj1.addChat(`bla bla`)
//     .then(() => {
//         console.log(`uspesno dodat chat`);
//     })
//     .catch(err => {
//         console.log(`Doslo je do greske ${err}`);
//     })

// ispis dokumenata iz db u konzoli
// obj1.getChats(d => {
//     console.log(d);
// });

//uzimamo datu iz chat kolekcije
obj1.getChats(d=>
    {
        is.templateLi(d);
    })

//za dodavanje poruke
formSend.addEventListener(`submit`, (event) =>
{
    event.preventDefault();
    
    let poruka = inputSend.value;
    obj1.addChat(poruka)
    .then(() => {
        inputSend.value = "";
        console.log(`uspesno dodat chat`);
    })
    .catch(err => {
        console.log(`Doslo je do greske ${err}`);
    })

});

//updateovanje imena
        let formaUpdate = document.querySelector(`#updateForm`)
        let inputUpdate = document.querySelector(`#update`)
        formaUpdate.addEventListener(`submit`, event=>
        {
            event.preventDefault();
            let newUsername = inputUpdate.value;
            obj1.username = newUsername;
            formaUpdate.reset();

        })