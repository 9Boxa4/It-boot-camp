// function zdravo(ime)
// {
//     console.log(`zdravo ${ime}`);
// }

function ispis(poruka)
{
    console.log(poruka);
}
function zdravo (ime)
{
    ispis(`Zdravo ${ime}!`)
}


let ime = `Bogdan`;

export {zdravo, ime}
// export{ime};

// export ime =`Bogdan`;  jos jedan nacin na koji moze da se eksportuje, ali se ne praktikuje
