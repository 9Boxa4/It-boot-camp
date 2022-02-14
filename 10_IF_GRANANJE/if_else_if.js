console.log(`Hello`);


let ocena = 2;


if(ocena == 5)
{
    console.log(`Odlican 5`);
}
else if (ocena == 4)
{
    console.log(`Vrlo dobar 4`);
}
else if(ocena == 3)
{
    console.log(`Dobar 3`);
}
else if (ocena == 2)
{
    console.log(`Dovoljan 2`);

}

else if(ocena == 1)
{
    console.log(`Nedovoljan 1`);
}
else
{
    console.log(`pogresan unos`);
}
///////////////


//zadatak 7

let poeniUncenik = 10;
let minPoena = 50;

if(poeniUncenik > 50)
{
    console.log(`Dobio je ocenu 6`);
}
else if(poeniUncenik > 60)
{
    console.log(`Dobio je ocenu 7`);
}
else if(poeniUncenik > 70)
{
    console.log(`Dobio je ocenu 8`);

}
else if(poeniUncenik > 80)
{
    console.log(`Dobio je ocenu 9`);
}
else if(poeniUncenik > 90)
{
    console.log(`Dobio je ocenu 10`);

}
else{
    console.log(`Ucenik je pao ispit`);
}


////////////////////////////

//zadatak 8

let date = new Date();
let dan = date.getDay();

// if( dan == 0 || dan == 6)
// {
//     console.log(`Danas je vikend`)
// }
// else{
//     console.log(`Danas  je dan u radnoj nedelj`)
// }


if(dan == 0)
{
    console.log(`Danas je nedelja`);
}
else if(dan == 6)
{
    console.log(`Danas je subota`);

}
else{
    console.log(`Danas je radni dan`);
}
///////////////////////

//zadatak 9

let dobaDana = date.getHours();
// console.log(`doba dana je ${dobaDana}`)

if(dobaDana < 12)
{
    console.log(`Dobro jutro`)
}
else if(dobaDana < 18)
{
    console.log(`Dobar dan`)
}
else
{
    console.log(`Dobro vece`)
}



///////////////////////

//zadatak 10

let d1 = 10;
let m1 = 2;
let g1 = 1995;

let d2= 15;
let m2 = 4;
let g2 = 1991;



if(g1 < g2)
{
    console.log(g1)
}
else if( g1 < g2 ){
    console.log(g2);
}
else if(m1 > m2)
{
    console.log(m1);
}
else if(m1 < m2)
{
    console.log(m2);
}











/////////////
//zadatak 11


// let frPocetak = 9;
// let frKraj= 17;

let radnoVreme = dobaDana;

// if(radnoVreme > frPocetak && radnoVreme < frKraj)
// {
//     console.log(`Radno vreme firme je u toku jer je ${radnoVreme} sati`)
// }
// else
// {
//     console.log(`Radno vreme firme se zavrsilo jer je ${radnoVreme} sati`);
// }

if(radnoVreme < 9)
{
    console.log(`Firma ne radi`);
}
else if(radnoVreme >= 17)
{
    console.log(`Firma ne radi`);
}
else
{
    console.log(`Firma radi`);
}


////////////////////////////

// zadatak 12

let lekar1Pocetak= 7;
let lekar1Kraj= 10;

let lekar2Pocetak= 8;
let leakr2Kraj= 9;

if (lekar1Kraj < lekar2Pocetak)
{
    console.log(`Ne preklapaju se`)
}
else if (leakr2Kraj < lekar2Pocetak )
{
    console.log(`Ne preklapaju se`)
}
else
{
    console.log(`Preklapaju se`);
}

/////////////////

//zadatak 13
// 4  / 2 = 2 cela + 0
// 5 / 2 = 2 cela i jedan ostatak
// 6 / 2 = 3 cela i nula ostatka
// 7 / 2 = 3 cela i jedan ostatak
let k = 19;

if( k % 2 == 0)
{
    console.log(`broj ${k} je paran`);
}
else 
{
    console.log(`broj ${k} je neparan`);
}

/////////////

//zadatak 15
// nesto / 0 = beskonacno
// 0 / nesto = 0

if (k % 3 != 0)
{
    console.log(`broj ${k} nije deljiv brojem 3`);
}
else
{
    console.log(`broj ${k} je deljiv brojem 3`);
}



// zadatak 16

let broj = -8;

if(broj <= 0)
{
    broj = broj -1;  //broj -- ili broj -=
    console.log(broj);
}
else 
{
    broj = broj + 1;    // broj ++ ili broj +=
    console.log(broj);
}


// zadatak 17

let a = 5;
let b = 7;
let c = 12;


let maks = a;

if(maks < b)
{
    maks = b
}

if(maks < c )
{
    maks = c
}

console.log(`Najveci broj je ${maks}`);

let min = a;

if(min > b)
{
    min = b;
}
if( min > c)
{
    min = c;
}

console.log(`Najmanji broj je ${min}`);

// srednji broj 
let srednji = (a+b+c) - (min+maks);
console.log(`Srednji broj je ${srednji}`);

// 18 zadatak
// Za ucitani broj ispitati da li je ceo
//1. nacin

let s = 15.3;

console.log(s % 1);

if(s % 1 == 0)
{
    console.log(`broj ${s} je ceo`);
}
else
{
    console.log(`broj ${s} nije ceo broj`)
}

// 2. nacin
s = 14;
console.log(Math.floor(s)); 

if(Math.floor(s) == s) // moze i sa round i sa ceil
{
    console.log(`broj ${s} je ceo`)
}
else 
{
    console.log(`broj ${s} nije ceo broj`)
}