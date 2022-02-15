// let forma = document.getElementById(`form`);
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