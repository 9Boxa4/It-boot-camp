console.log("If else grananje");


if(true)
{
    console.log("Uslov je ispunjen");
}
else
{
    console.log('Uslov nije ispunjen');
}

if(false)
{
    console.log("Uslov je ispunjen");
}
else
{
    console.log('Uslov nije ispunjen');
}

////////////

a = 10;
b = 7;

if(a < b)
{
    // console.log('Broj a je strogo manji od broja b');
    console.log(`Broj ${a} je strogo manji od broja ${b}`);

}
else
{
    console.log("broj a je veci  ili jednak broju b");
}


///////////////////////////

let god = 7;

if(god >= 18)
{
    console.log("Osoba je punoletna");
}
else
{
    console.log(`Osoba je maloletna`);
}



///////////////////

// Prvi zadatak 
let h = 5;
let m = 7;

if( h > m)
{
    console.log(`Broj ${h} je veci od broja ${m}`);
}
else
{
    console.log(`Broj ${h} je manji od broja ${m}`);
}


// Drugi zadatak

let temp = 11;

if(temp >= 0)
{
    console.log(`Temperatura je ${temp}stepeni i u plusu je`)
}
else
{
    console.log(`Temperatura je u minusu`)
}

//Cetvrti zadatak


let vreme = new Date();

let vrSad = vreme.getHours();

if(vrSad >= 15)
{
    console.log(`Trenutno je podne`);
}
else
{
    console.log(`trenutno je jutro`);
}

//peti zadatak

let godina = vreme.getFullYear();
console.log(godina);
let  Ja = 1994;


if(godina - 1994 >= 18)
{
    console.log(`Ova osoba je punoletna`);
}
else
{
    console.log(`Ova osoba je maloletna`);
}

// //sesti

// let j = 30;
// let l = 2;
// let v = 15;

// if(l > j)
// {
//     if(l > v)
//     {
//         console.log(`l je najveci broj`);
//     }
// }
// else 
// {
//     console.log(`Ovo moram tri put ako bih za svaki ovako`);
// }





//Drugi primer
let temperatura = -10;
if(temperatura >= 0)
{
    document.body.innerHTML = `<p style = "color:red">Temperatura od ${temperatura} stepeni je u plusu</p>`;
}
else
{
    document.body.innerHTML = `<p  style = "color:blue">Temperatura  od ${temperatura} stepeni je u minusu</p>`;
}


//////////////////

//treci zadatak cas

let pol = "m";

if(pol == "z")
{
 //prikazi avatar muskarca
 document.body.innerHTML += `<img src="slike/boy.jpg">`;
}
else
{
    document.body.innerHTML += `<img src="slike/girl.jpg">`;
    // Prikazi avater zene
}

////////////////////

//sesti zadatak predavanje

let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; //pretpostavka
//ako je moja pretpostavka losa uradim njen update

if(maks < b2)
{
    maks = b2;
}

if(maks < b3)
{
    maks = b3;
}

document.body.innerHTML += `<p> ${maks}</p>`


