let a = 51;
let b = 52;
let c = 51;

if(a>=b && a >= c)
{
    console.log(`Od tri broja ${a}, ${b}, ${c}. Najveci broj je ${a}`);
}
else if(b>=a && b>=c)
{
    console.log(`Od tri broja ${a}, ${b}, ${c}. Najveci broj je ${b}`);
}
else if(c>=a && c>=b)
{
    console.log(`Od tri broja ${a}, ${b}, ${c}. Najveci broj je ${c}`);
}
else
{
    console.log(`Doslo je do greske `);
}


//Zadatak 2

let temp = 40;

if(temp < -15 || temp > 40)
{
    console.log(`Ekstremna temperatura`);
}
else
{
    console.log(`Temperatura je zadovoljavajuca`);
}

//Zadatak 3

let date = new Date();
let godina = date.getFullYear();


if(godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0))
{
    console.log(`Godina je ${godina} i prestupna je godina`);
}
else if(typeof godina == 'number')
{
    console.log(`Godina je ${godina} i nije prestupna`);
}
else
{
    console.log(`Pogresan unos`);
}

// Zadatak 4

let butikP= 9;
let butikK= 20;

let butikPWeek= 10;
let butikKWeek = 18;

let dan = date.getDay();
let vreme = date.getHours();


if(dan >= 1 && dan <6)
{
    if( vreme >= butikP && vreme <= butikK)
    {
        console.log(`Butik radi i radna je nedelja`);
    }
    else
    {
        console.log(`Radna je nedelja, ali butik ne radi`);
    }
}
else if(dan == 0 || dan == 6)
{
    if(vreme >= butikPWeek && vreme <= butikKWeek )
    {
        console.log(`Vikend je i butik trenutno radi`);
    }
    else
    {
        console.log(`Vikend je i butik ne radi`);
    }
}


//Zadatak 5

let mesec = date.getMonth()+1;
let datum = date.getDate();
 let daniUMesecu = new Date(godina,mesec, 0).getDate();
 console.log(`DANI U MESECU ${daniUMesecu}`);


let doKraja= daniUMesecu - datum;


if(doKraja <= daniUMesecu)
{
    console.log(`Ostalo je jos ${doKraja} dana u mesecu`);
    document.body.innerHTML +=`<p>Ostalo je jos ${doKraja} dana u mesecu</p>`
}
else
{
    document.body.innerHTML +=`<p>Doslo je do greske</p>`
    console.log(`Doslo je do greske`);
}


//zadatak 6

const udaljenost = 3;
let kaficIma = 9;
let gostiju = 5;

let zauzimaju = udaljenost * gostiju;
let smeDaIma = kaficIma / udaljenost;
let napustiti = Math.ceil(zauzimaju - smeDaIma);


if(zauzimaju <= smeDaIma )
{
    document.body.innerHTML += `<p style = "color :green">DA</p>`
}
else if(zauzimaju >= smeDaIma )
{
    document.body.innerHTML += `<p style = "color :red">NE, takodje ${napustiti} treba da napusti lokal<hr></p>`
}
else
{
    document.body.innerHTML += `<p>Pogresan unos</p>`
}


//Zadatak 7 

let pocSatLek1 = 12;
let pocMinLek1 = 16;
let krajSatLek1 = 15;
let krajMinLek1 =2;

let pocSatLek2 = 11;
let pocMinLek2 = 12;
let krajSatLek2 = 23;
let krajMinLek2 = 5;

document.body.innerHTML +=`<p style = "color : green"> Pocetak radnog vremena prvog lekara je<b> ${pocSatLek1}h i ${pocMinLek1}min</b><p>`

document.body.innerHTML +=`<p style = "color : red"> Kraj radnog vremena prvog lekara je<b> ${krajSatLek1}h i ${krajMinLek1}min</b><p><hr>`

document.body.innerHTML +=`<p style = "color : green"> Pocetak radnog vremena prvog lekara je<b> ${pocSatLek2}h i ${pocMinLek2}min</b><p>`

document.body.innerHTML +=`<p style = "color : red"> Kraj radnog vremena prvog lekara je<b> ${krajSatLek2}h i ${krajMinLek2}min</b><p><hr>`

let lek1P= (pocSatLek1 * 60) +pocMinLek1;
let lek1K= (krajSatLek1 * 60) + krajMinLek1;

let lek2P= (pocSatLek2 * 60) +pocMinLek2;
let lek2K= (krajSatLek2 * 60) + krajMinLek2;

let poklapanje;
let poklapanjeSat;
let poklapanjeMin;

if(pocSatLek1 >= 24 || pocMinLek1 > 59 && krajSatLek1>=24 || krajMinLek1>59)
{
    document.body.innerHTML +=`Greska pri unosu informacija o vremenu za prvog lekara`;
}
else if(pocSatLek2 >= 24 || pocMinLek2 > 59 && krajSatLek2>=24 || krajMinLek2>59)
{
    document.body.innerHTML +=`Greska pri unosu informacija o vremenu za drugog lekara`;
}
else if((lek2P > lek1P &&lek2P >lek1K) && (lek2K > lek1P && lek2K > lek1K) || (lek1P > lek2P &&lek1P >lek2K) && (lek1K > lek2P && lek1K > lek2K) )
{
    document.body.innerHTML += `Smene se ne preklapaju`;
}
else if(lek1P == lek2P) //Situacija kada su im jednaki pocetci ali krajevi imaju 3 situacije
{
    if(lek1K== lek2K)
    {
        poklapanje = lek1K - lek1P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
    else if(lek1K < lek2K)
    {
        poklapanje = lek1K - lek1P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
    else if(lek2K < lek1K)
    {
        poklapanje = lek2K - lek2P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
}
else if(lek1P < lek2P) // situacija kada prvi uvek pocinje ranije
{
    if(lek2P <lek2K && lek1K < lek2K)
    {
        poklapanje = lek1K - lek2P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
    else if(lek2K < lek1K)
    {
        poklapanje = lek2K - lek2P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
    else if(lek1K == lek2K)
    {
        poklapanje = lek2K - lek2P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
}
else if(lek2P < lek1P) // situacija kada drugi pocinje ranije
{
    if(lek1K < lek2K)
    {
        poklapanje = lek1K - lek1P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
    else if(lek1P < lek2K && lek2K < lek1K)
    {
        poklapanje = lek2K - lek1P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
    else if(lek1K == lek2K)
    {
        poklapanje = lek1K - lek1P;
        poklapanjeSat = Math.floor(poklapanje / 60);
        poklapanjeMin = poklapanje % 60;
        document.body.innerHTML += `Radno vreme lekara se poklapa za ${poklapanjeSat}:${poklapanjeMin}`;
    }
}
else
{
    document.body.innerHTML += `Nema nista vise za else`
}
    
//Zadatak 8

let n = 5;
let m = 10;
let k = "o";
let op=1;

if(k=="m" ||k=="M" )
{
    op=n*m;
    console.log(`Zato sto je karakter "${k}" slovo, rezultat je ${op}`);
}
else if(k=="d" ||k=="D" )
{
    op=n/m;
    console.log(`Zato sto je karakter "${k}" slovo, rezultat je ${op}`);
}
else if(k =="s"|| k =="S")
{
    op = n + m
    console.log(`Zato sto je karakter "${k}" slovo, rezultat je ${op}`);
}
else if(k == "o" || k == "O")
{
    op = n - m
    console.log(`Zato sto je karakter "${k}" slovo, rezultat je ${op}`);
}
else
{
    console.log(`Pogresan unos`);
}

