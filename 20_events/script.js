console.log(`Events`);


// dohvatili HTML element na koji zelis da postavis oslskivac
let pKlikni = document.getElementById('klikni');

// Na element postavljamo osluskivac

pKlikni.addEventListener('click', ()=>
{
    console.log(`Jednom kliknuto na paragraf`);
});

let dvaKlika = document.getElementById(`dvaKlika`);

dvaKlika.addEventListener('dblclick', ()=>
{
    console.log(`dvaput kliknuto na paragraf`);
})

// dohvati element

let btnPlus = document.getElementById(`plus`);


//2
let res = 0;
let spanRes = document.getElementById('res');
btnPlus.addEventListener('click', ()=>
{
    res++;
    // console.log(res);
    spanRes.innerHTML =res;
    if(res<0)
    {
        spanRes.style.color="red";
    }
    else
    {
        spanRes.style.color ="green";
    }
});

let btnMinus = document.getElementById(`minus`);
btnMinus.addEventListener('click', ()=>

{
    res--;
    spanRes.innerHTML = res;
    if(res<0)
    {
        spanRes.style.color="red";
    }
    else
    {
        spanRes.style.color ="green";
    }
 
});



let btnHello = document.getElementById(`hello`);
console.log(btnHello);
let inputIme = document.getElementById(`ime`);
console.log(inputIme);
let pHelloIspis= document.getElementById(`helloIspis`);
console.log(pHelloIspis);


btnHello.addEventListener(`click`, ()=>
{
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
})

////////////////////////////////////////////////////////

//cim je input polje mora da se pokupi vrednost
//DOM

let inputGodinaRodjenja = document.getElementById(`godRodj`);
let inputPol = document.querySelectorAll(`input[name='pol']`);
let btnPosalji = document.getElementById(`posalji`);
let pIspis = document.getElementById(`ispis`);

//uvek testiraj addevent sa random consolelog
btnPosalji.addEventListener(`click`, (e)=>
{
    e.preventDefault(); // parametar e/event sluzi da se ne reloaduje stranica
    let date = new Date();
    let tekucaGodina = date.getFullYear();
    let inputGodinaRodjenjaValue =inputGodinaRodjenja.value;
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue); // prebaci u integer tj u broj
    console.log(inputGodinaRodjenjaValue);
    // console.log(typeof inputGodinaRodjenjaValue);
    let god = tekucaGodina - inputGodinaRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`;

    let checkedPol = document.querySelector(`input[name='pol']:checked`);
    //vraca HTML tag na koje je kliknuto
    console.log(checkedPol.value);

    let checkedPolValue= checkedPol.value; // vraca vrednost iz selektovanog html taga

    if(checkedPolValue == 'z')
{
    pIspis.innerHTML += ' i zenskog je pola';
}
else if( checkedPolValue == 'm')
{
    pIspis.innerHTML += ` i muskog je pola`
}
else
{
    pIspis.innerHTML += ` i nije se opredelio`
}
})