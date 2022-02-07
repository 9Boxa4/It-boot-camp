import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

//DOM
let formUpdColor = document.querySelector(`#updateColorForm`);
let formSend = document.querySelector(`#sendForm`);
let inputSend = document.querySelector(`#send`);
let lista = document.querySelector(`#ispisPor`);
let navMenu = document.querySelector(`nav`)
let formaUpdate = document.querySelector(`#updateForm`);
let inputUpdate = document.querySelector(`#update`);
let formDates = document.querySelector(`#formDates`);
let date1 = document.querySelector(`#date1`);
let date2 = document.querySelector(`#date2`);



let username;
if(localStorage.username)
{
    username = localStorage.username;

}
else
{
    username ="anonymus"
}

if(localStorage.color)
{
    let allSubmitBtns= document.querySelectorAll(`button, input[type="submit"]`);
        
    allSubmitBtns.forEach(dugme=>
        {
            dugme.style.backgroundColor = localStorage.color;
        })
}
else
{
    localStorage.setItem("color","#ffa500");
}
if(localStorage.roomNow)
{
    let allNavBtns = document.querySelectorAll(`nav button`);
    allNavBtns.forEach(button=>
        {
            if(button.id == localStorage.roomNow)
            {
                button.style.backgroundColor = "#f542b9"
            }
        })
}
else
{
    let allNavBtns = document.querySelectorAll(`nav button`);
    allNavBtns.forEach(button=>
        {
            if(button.id == `general`)
            {
                button.style.backgroundColor = "#f542b9"
            }
        })
}
// pozivanje instanci
let chatroom = new Chatroom(`general`, username);
let chatUI = new ChatUI(lista);

if(localStorage.roomNow)
{
    chatroom.room = localStorage.roomNow
}

//uzimamo datu iz chat kolekcije
chatroom.getChats((d,di)=>
    {
        chatUI.templateLi(d,di);
    })

//za dodavanje poruke
formSend.addEventListener(`submit`, (event) =>
{
    event.preventDefault();
    if(inputSend.value.trim().length <= 0 )
    {
        alert(`Ne mozete staviti praznu poruku`)
    }
    else
    {
        let poruka = inputSend.value;
        chatroom.addChat(poruka)
        .then(() => {
            inputSend.value = "";
            console.log(`uspesno dodat chat`);
        })
        .catch(err => {
            console.log(`Doslo je do greske ${err}`);
        })
    }
});

    //updateovanje imena
    formaUpdate.addEventListener(`submit`, event=>
    {
        event.preventDefault();
        let spaces= inputUpdate.value.trim().replace(/\S/g, "").length
        if (spaces <= 0 && inputUpdate.value.length >= 2 && inputUpdate.value.length <= 10)
        {

            let newUsername = inputUpdate.value;
            let updateIspis = document.querySelector(`#updateIspis`);
            let paragraph = `<p id="updateNews">Novi korisnik je ${newUsername} 😊</p>`;

            chatroom.username = newUsername;
            username= localStorage.setItem("username",newUsername);
            updateIspis.innerHTML = paragraph; 
            setTimeout(()=>
            {
                updateIspis.innerHTML = "";
            },3000)
            formaUpdate.reset();  
        }
        else {
            alert(`Nevalidan unos, ne smete stavljati razmake`)
        }
    })

    navMenu.addEventListener(`click`, event=>
    {
        if(event.target.tagName == "BUTTON")
        {
            let id = event.target.id
            localStorage.setItem("roomNow", id)
            let allNavBtns= document.querySelectorAll(`nav button`);
            allNavBtns.forEach(button=>
                {
                    if(button.id == id)
                    {
                        button.style.backgroundColor ="#f542b9"
                    }
                    else
                    {
                        button.style.backgroundColor =localStorage.color
                    }
                })
        
            // izbrisati sve poruke sa ekrana
            chatUI.clear();
            //menjaj sobe
            chatroom.roomUpdate(event.target.id)
            //3. prikaz poruka
            chatroom.getChats((d,id) =>
                {
                    chatUI.templateLi(d,id)
                })
        }
    })

    lista.addEventListener(`click`, e=>
    {
        
        if(e.target.tagName === "SPAN")
        {
            let liRoditelj= e.target.parentElement;
            let id = liRoditelj.id;         
            let imePoruke = liRoditelj.innerText;
            imePoruke = imePoruke.split(":")[0].trim();
            if(imePoruke == localStorage.username)
            {             
            if(confirm(`da li zelite da izbrisete`))
            {
                liRoditelj.remove();
                chatroom.deleteChat(id)
                .then(()=>
                {
                    console.log(`uspesno obrisan chat`);
                })
                .catch(err=>
                    {
                        console.log(`Ne mozete obrisati chat ${err}`);
                    })
            }     
            }
            else{
            liRoditelj.remove();
            }
        }
    })
    
    formUpdColor.addEventListener(`submit`, e=>
    {
        e.preventDefault();
        setTimeout(()=>
        {  
            let allSubmitBtns= document.querySelectorAll(`button, input[type="submit"]`);
            let inputBoja = document.querySelector(`#colorPicker`);
            if(localStorage.color)
            {
                localStorage.color = inputBoja.value;
            }
            else{
                localStorage.setItem("color",inputBoja.value);
            }
            
        
            allSubmitBtns.forEach(button=>
            {
                
               if(localStorage.roomNow.toLowerCase() != button.innerText.slice(1).toLowerCase())
               {
                 button.style.backgroundColor = inputBoja.value;
               }
                
            })
        },500);
    })
    
    formDates.addEventListener(`submit`, e=>
    {
        e.preventDefault();
        if( date1.value != "" && date2.value != "")
        {
           
            chatUI.lista.innerHTML = "";
            chatroom.getChats((d,id)=>
            {
                let datumKreiranja = new Date(d.createdAt.toDate());
                let prviDatum = new Date(date1.value);
                let drugiDatum = new Date(date2.value);
              if(datumKreiranja >= prviDatum && datumKreiranja<= drugiDatum)
              {
                chatUI.templateLi(d,id);
              }
            
        })
        }
        else
        {
            alert(`niste uneli oba datuma`)
        }
    })

   
    