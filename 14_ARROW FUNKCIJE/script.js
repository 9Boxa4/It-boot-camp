function suma(a,b) // definicija funkje
{
    return a+b;
}

console.log(suma(4,5)); // poziv funkje
console.log(suma(2,5)); // poziv f-je


// anonimne funkcije
let suma2 =function(a,b)
{
    return a+b;
}

console.log(suma2(6,7));


// arrow funkcija (skracen zapis anonimnih funkcija)
let suma3 = (a,b) => {
    return a+b;
}

console.log(suma3(5,98));

//arrow funkcija za ipsis poruke

let hello = ()=> 
{
    console.log('Hello world');
}

hello();

let pozdrav = (ime, prezime) =>
{
    console.log(`Zdravo ${ime} ${prezime}`);
}

pozdrav(`Bogdan`,`Jovanovic`);
pozdrav(`Zoki`, `Gagic`);

//arrow funkcija kojoj se prosledjuje i godine korisnika
//a ona ispisuje ime i da li je korisnik punoletan ili ne

let ispis = (ime,godine) =>
{
    if(godine <18)
    {
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color:blue">${poruka}</p>`
    }
    else
    {
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color:green">${poruka}</p>`
    }
}

ispis("pera", 17);


// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.


let neparan = n =>  n%2 != 0 ? `Jeste` : `Nije`; 
// bez blok koda ako je 1 red (return nije potreban?)


console.log(neparan(5));
neparan(5);
neparan(10);

//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a,b) =>
{
    console.log(`Od brojeva ${a} i ${b} veci je`);
    if(a>=b)
    {
        return a;
    }
    else
    {
        return b;
    }
  
}




console.log(maks2(1,5));

let maks4 = (a,b,c,d) =>
{
    console.log(`Od brojeva ${a}, ${b}, ${c}, ${d} najveci je`);
    if(a>=b && a>=c && a>=d)
    {
        return a;
    }
    else if(b>=a && b>=c && b>=d)
    {
        return b;
    }
    else if(c>=a && c>=b && c>=d)
    {
        return c;
    }
    else
    {
        return d;
    }
}


console.log(maks4(2,5,15,81));

// 5 

let slika = url =>
{
    document.body.innerHTML += `<img src="${url}" width = 200> `;
}


slika("https://www.thespruce.com/thmb/2fz1zlPNq7cj7QkLAtKdqYrKvs0=/3704x2778/smart/filters:no_upscale()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg");


// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.


let color = boja =>
{
    document.body.innerHTML += `<p style="color:${boja}">I love ${boja} eyes</p>`;
}

color(`blue`);

// 7 Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

// let sedmiDan = n =>
// {
//     dan = n%7;
//     switch(dan)
//     {
//         case 0:
//             console.log(`Nedelja`);
//             break;
//         case 1:
//             console.log(`Ponedeljak`);
//             break;
//         case 2:
//             console.log(`Utorak`);
//             break;
//         case 3:
//             console.log(`Sreda`);
//             break;
//         default:
//             console.log(`Greska`);
//             break;
//     }
// }


// sedmiDan(8);


// Stefan primer za 5 zadatak

let slicka = putanja => `<img src="${putanja}" width= 200> `

document.body.innerHTML += slicka("https://media.istockphoto.com/vectors/logo-of-a-green-life-tree-with-roots-and-leaves-vector-illustration-vector-id1130887322?k=20&m=1130887322&s=612x612&w=0&h=dPVnCDJ4ocIqtn51iJDzEKdesx_RikdT74asv81jJdk=")


//stefan 4 zadatak 

let max2 = (a,b) => a>b ? a : b;

console.log(max2(1,1));

// max 4 primer


// let max4 = (a,b,c,d) =>
// {
//     let m1 = max2 (a,b);
//     let m2 = max2(c,d)
//     return max2(m1,m2)
// }

// console.log(max2(16,16));
// console.log(max4(6,19,-5,5));



// let max4 = (a,b,c,d) => max2(max2(a,b), max2(c,d));


let max4DN = (a,b,c,d) => max2(max2(max2(a,b),c),d) // uporedjuvanje iz unutrasnjosti

// console.log(max2(16,16));
// console.log(max4(6,19,-5,5));
console.log(max4DN(6,1,61,2));

// da li je broj paran ili ne

let paran = n => n%2 == 0;

console.log(paran(5));

// 7 Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

// let sedmiDan = n =>
// {
//     dan = n%7;
//     switch(dan)
//     {
//         case 0:
//             return`Nedelja`;
//             break;
//         case 1:
//             return `Ponedeljak`;
//             break;
//         case 2:
//             return`Utorak`;
//             break;
//         case 3:
//             return `Sreda`;
//             break;
//         case 4:
//                 return `Cetvrtak`
//                 break;
//         case 5:
//                 return `Petak`;
//                 break;
//         case 6:
//                 return `Subota`;
//                 break;

//         default:
//             console.log(`Greska`);
//             break;
//     }
// }

// console.log(sedmiDan(8));




let mesec = n =>
{
    mesec = n%12;
    switch(mesec)
    {
        case 0:
            return`Januar`;
            break;
        case 1:
            return `Februar`;
            break;
        case 2:
            return`mart`;
            break;
        case 3:
            return `April`;
            break;
        case 4:
                return `Maj`
                break;
        case 5:
                return `Jun`;
                break;
        case 6:
                return `Jul`;
                break;
        case 7:
            return `Avgust`;
            break;
        case 8:
            return`Septembar`;
            break;
        case 9:
            return `Oktobar`;
            break;
        case 10:
                return `Novembar`
                break;
        case 11:
                return `Decembar`;
                break;

        default:
            return`Greska`;
            break;
    }
}

console.log(mesec(12));

//8 Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

// let deljivSaTri = (n.m) =>
// {
//     for(let i=n; i<=m; i++)
// }


//
let sedmiDan = n => (n%7==0) ? 'Ned': (n%7 == 1) ? 'pon': (n%7 == 2) ? 'uto' : (n%7 ==3) ?'sreda' : (n%7==4) ? 'cet': (n%7 ==5)? 'pet': 'sub';

console.log(sedmiDan(14));