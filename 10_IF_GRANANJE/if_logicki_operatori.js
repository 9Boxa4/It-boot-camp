console.log(`Logicki operatori`);

let pol = "z";
let god = -27;

// 1. Negacija  !
// 2. &&
// 3. ||

if( pol == "m" && god >=18 )
{
    console.log(`Osoba je muskog pola i punaoletna je`);
}
else if (pol == "m" && god < 18 && god >= 0)
{
    console.log(`Osoba je muskog pola i maloletna je`);
}
else if(pol == "z" && god >= 18)
{
    console.log(`Osoba je zenskog pola i punoletna je `);
}
else if (pol == "z" && god < 18 && god >= 0)
{
    console.log(`Osoba je zenskog pola i maloletna je`);
}
else
{
    console.log(`Doslo je do greske priliko ubacivanja informacija`);
}

//////////////////////////////////////
pol = "Ž";

if(pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž")
{
    document.body.innerHTML = `<img src = "slike/z.png">
    `
}
else if(pol == "m" || pol == "M")
{
    document.body.innerHTML = `<img src = "slike/m.png">
    `
}
else
{
    document.body.innerHTML = `<p> Pogresan unos </p>`
    
}

////////////////////////////////////
pol = "m";
god = 18;

if((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18)
{
    console.log(`Osoba je zenskog pola i punoletna je `);
}
else if((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 0 && god <18  )
{
    console.log(`Osoba je zenskog pola i maloletna`);
}
else if((pol == "m" || pol == "M") && god >= 18)
{
    console.log(`Osoba je muskog pola i punoletna je`);
}
else if((pol == "m" || pol == "M") && god >=0 && god < 18)
{
    console.log(`Osoba je muskog pola i maloletna je`);
}
else
{
    console.log(`Pogresan unos`);
}