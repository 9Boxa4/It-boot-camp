import pacijent from "./pacijenti.js";

// let lik1= new pacijent(`Zoran`, 3.12, 55);
// let lik2 = new pacijent(`Buki`, 1.99, 72);

let p1= new pacijent (`Jelena`, 1.73, 66);
let p2= new pacijent(`Ana`, 1.7, 72);
let p3 = new pacijent(`Pera`, 1.9, 149);
let p4 = new pacijent(`Mika`, 1.67, 57)
let p5= new pacijent(`Mila`, 1.5, 70)
let p10= new pacijent(`Mila`, 1.5, 70)


let pacijenti = [p1,p2,p3,p4]
// lik1.stampaj();
// lik2.stampaj();


// console.log(lik1.kritican());

let btnMinTez = document.getElementById(`minTez`);
let spanMinTezRez = document.getElementById(`minTezRez`)
btnMinTez.addEventListener(`click`, ()=>
{
    // console.log(`Hello`);
    let min = pacijenti[0] // pozivamo getter
pacijenti.forEach(pac=>
    {
        if(min.tezina > pac.tezina)
        {
            min = pac
        }
    });
    spanMinTezRez.innerHTML = min.stampajListu();

    // console.log(min);
    // min.stampaj();
})

//

let btnMaxBMI = document.querySelector(`#maxBMI`);
let maxBMIrez = document.querySelector(`#maxBMIrez`);


btnMaxBMI.addEventListener(`click`, ()=>
{
    let maxBMI = pacijenti[0];
    for(let i=1; i<pacijenti.length; i++)
    {
        if(maxBMI.BMI() < pacijenti[i].BMI())
        {
            maxBMI = pacijenti[i]
        }
    }
    maxBMIrez.innerHTML = maxBMI.stampajListu();
} )