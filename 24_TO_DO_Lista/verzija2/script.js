
// let lista = document.createElement(`ul`);

// let naslov= document.createElement(`h2`);
// naslov.innerText = `Moj podsetnik`
// forma.appendChild(naslov);
// forma.appendChild(lista);

// niz= [`Plati racune`, `Pripremi predavanja`, `Odgovori na mail`]



// let praviListu = niz =>
// {
//     niz.forEach(el=>
//         {
//            let li = document.createElement(`li`)
//            li.innerText = `${el}`;
//            lista.appendChild(li);
            
//         })
// }

let sviLi = document.querySelectorAll(`li`);


// let dodajEvLi = sviLi =>
// {
    // sviLi.forEach(li => 
    //     {
    //         li.addEventListener(`click`, ()=>
    //         {
    //             li.style.textDecoration = `line-through`;
    //             li.addEventListener(`click`, ()=>
    //             {
    //                 li.style.textDecoration = `none`;
    //             })
    //         })
    //     });
// }

// dodajEvLi(sviLi)

sviLi.forEach(li => 
    {
        li.addEventListener(`click`, ()=>
        {
           if(li.style.textDecoration == `line-through`)
           {
            li.style.textDecoration = `none`
           }
           else
           {
            li.style.textDecoration = `line-through`
           }
        })
    });



// sviLi.forEach(li => 
//     {
//         li.addEventListener(`click`, ()=>
//         {
//             li.classList.toggle(`lineThrough`);
//         })
//     });

// let forma = document.getElementById(`form`);
// let lista = document.querySelectorAll(`#lista`);
// let btnSubmit = document.querySelectorAll(`#submit`);
// let inputText = document.querySelectorAll(`#task`);


// btnSubmit.addEventListener(`click`, e =>
// {
//     e.preventDefault();
//       let inputTextValue= inputText.value;
//     let noviLi = document.createElement(`li`);
//     noviLi.innerText += inputTextValue;
//     lista.appendChild(noviLi)
// })

let ulTasks = document.querySelector(`ul`);
let inputTask = document.getElementById(`task`);
// let submitTask = document.getElementById(`submit`);
// let radioInput = document.querySelector(`input[name="gde"]:checked`);

//submitTask
inputTask.addEventListener(`keyup`, e=>
{
    e.preventDefault();
    // console.log(e.key, e.keyCode); // kljuc za enter je 13


    if(e.keyCode == 13)
    {
        
        let inputTaskValue = inputTask.value; // uzimam vrednosti iz input polja
        // let radioInputValue= radioInput.input;
        inputTaskValue= inputTaskValue.trim();
        
        if(inputTaskValue == "" || inputTaskValue == null)
        {
            alert(`Morate uneti tekst zadatka`)
        } 
        else
        {
            let liNewTask = document.createElement(`li`); // kreairam novi list item 
        liNewTask.innerText += inputTaskValue; // u listu ubacujem tekst
    
        let radioAdd = document.querySelector(`input[name="gde"]:checked`)
        if(radioAdd.value == `pocetak`)
        {
            ulTasks.prepend(liNewTask); // dodajemo li cvor na pocetak liste
        }
        else
        {
            ulTasks.appendChild(liNewTask); // U listu dodajemo list item
        }
    
        
        inputTask.value = ""; 
        }
    
    }


});

ulTasks.addEventListener(`dblclick`, e=>
{
    // console.log(`kliknuto na ul`);
    // console.log(e.target); // vraca ceo tag ili ceo tag i njegovu decu gde je kliknuto
    // console.log(e.target.tagName); // vraca samo ime taga na koji je kliknut
    if(e.target.tagName == `LI`)
    {
        // console.log(`kliknuto na LI`);
        e.target.remove();
    }

});


let tekst = "    Neki      tekst    "
let teksts = "         ";
console.log(teksts.trim());