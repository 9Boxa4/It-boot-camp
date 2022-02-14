// console.log(`1`);
// console.log(`2`);

// for(let i=1; i<= 10000; i++)
// {
//     console.log(i);
// }
// FOR PETLJA JE BLOKIRAJUCI KOD

// setTimeout(function ()
// {
//     console.log(`3`); // this = objekat koji poziva metodu
// }, 4000)

let btn1= document.getElementById(`btn1`);
let btn2= document.getElementById(`btn2`);
let btn3= document.getElementById(`btn3`);
let btn4= document.getElementById(`btn4`);
let div = document.getElementById(`result`);
let ispis= document.getElementById(`ispis`);
let timer= null;
let clock = null;
btn1.addEventListener(`click`,function ()
{
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(timer === null)
    {
        timer = setTimeout(()=>
        {
            div.innerHTML += `${sati}:${minuti}:${sekunde} <br>` // ja sam dodao += i break
            timer = null;
        },2000)
    }
})

btn2.addEventListener(`click`, function()
{
    clearTimeout(timer);
    timer = null;
})



btn3.addEventListener(`click`, function()
{
    if(clock === null)
    {
        clock =setInterval(()=>
        {
            
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde} <br>`
        },1000/10);
    }
})


btn4.addEventListener(`click`, function()
{
    clearInterval(clock);
    clock= null;
})


let start = document.getElementById(`start`);
let inputVreme=document.getElementById(`inputCounter`);
let stop = document.getElementById(`stop`);
let counter = null;
let br=0;

start.addEventListener(`click`, ()=>
{ 
        
    if(counter === null)
    {
         counter = setInterval(()=>
        { 
            let datum = new Date();
            let sekunde = datum.getSeconds();
        //    inputVremeValue= inputVreme.value 
        //    inputVreme.value=sekunde;
        br++
           inputVreme.value=br;

        },1000)
    }
})

stop.addEventListener(`click`, ()=>
{
    clearInterval(counter);
    counter = null;
})

// setTimeout(()=>
// {
//     console.log(`3`); // this = window 
// }, 1000/2)

// function ispis()
// {
//     console.log(`3`);
// }

// setTimeout(ispis,2000);


// setTimeout(function ()
// {
//     console.log(`3`); // this = objekat koji poziva metodu
// }, 4000)


// setTimeout(()=>
// {
//     console.log(`3`);
// }, 1000/2)