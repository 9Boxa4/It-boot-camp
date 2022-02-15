let date= new Date();

let dan = date.getDay();

switch(dan)
{
    case 1:
        console.log(`Ponedeljak je`);
        break;
    case 2:
        console.log(`Utorak je`);
        break;
    case 3:
        console.log(`Sreda je`);
        break;
    case 4:
        console.log(`Cetvrtak je`);
        break;
    case 5:
        console.log(`Petak je`);
        break;
    case 6:
        console.log(`Subota je`);
        break;
    case 0:
        console.log(`Nedelja je`);
        break;
    default:
        console.log(`Greska`);
        break;
}


//zadatak 2

let ocena = 3;

switch(ocena)
{
    case 1:
        console.log(`Nedovoljan`);
        break;
    case 2:
        console.log(`Dovoljan`);
        break;
    case 3:
        console.log(`Dobar`);
        break;
    case 4:
        console.log(`Vrlo dobar`);
        break;
    case 5:
        console.log(`Odlican`);
        break;
    default:
        console.log(`Los unos`);
        break
}

//zadatak 3

let broj = 6;

if(broj % 2 ==0  && broj<= 10){
    switch(broj)
    {
        case 0:
            console.log(`Broj je ${broj}`);
            break;
        case 2:
            console.log(`Broj je ${broj}`);
            break;
        case 4:
            console.log(`Broj je ${broj}`);
            break;
        case 6:
            console.log(`Broj je ${broj}`);
            break;
        case 8:
            console.log(`Broj je ${broj}`);
            break;
        case 10:
            console.log(`Broj je ${broj}`);
            break;
        default:
            console.log(`Opasno si pogresio ako ne radi`);
            break;        
    }
}
else
{
    console.log(`Doslo je do greske`);
}

//zadatak 4

let  a = 2;
let b = 5;
let k = "m";

let op = 0;

switch (k)
{
    case "m" :
        op = a * b;
        console.log(`Kada se ${a} i ${b} pomnoze dobija se ${op}`);
        break;
    case "d":
        op = a / b;
        console.log(`Kada se ${a} i ${b} podele dobija se ${op}`);
        break;
    case "s" :
        op = a + b;
        console.log(`Kada se ${a} i ${b} saberu dobija se ${op}`);
        break;
    case "o":
        op = a - b;
    console.log(`Kada se ${a} i ${b} oduzmu dobija se ${op}`);
        break;
    default:
        console.log(`Ipak greska`);
        break
}

//zadatak 5

let dow = 5 - dan; // A moze da bude 6, ako brojimo i subotu

switch(dan)
{
    case 1:
        console.log(`Ostalo je jos ${dow} do vikenda`);
        break;
    case 2:
        console.log(`Ostalo je jos ${dow} do vikenda`);
        break;
    case 3:
        console.log(`Ostalo je jos ${dow} do vikenda`);
        break;
    case 4:
        console.log(`Ostalo je jos ${dow} do vikenda`);
        break;
    case 5:
        console.log(`Ostalo je jos ${dow} do vikenda`);
        break;
   case 6 :
       console.log(`Vikend je`);
       break;
    case 0 :
       console.log(`Vikend je`);
       break;
    default:
        console.log(`Pogresan unos`);
        break;
}

//zadatak 6

let mesec = date.getMonth();
let rbr = mesec + 1;

switch(mesec)
{
    case 0:
        
        console.log(`(${mesec}) Januar je ${rbr} redni broj u mesecu`);
        break;
    case 1:
       
        console.log(`(${mesec}) Februar je ${rbr} redni broj u mesecu`);
        break;
    case 2:
            console.log(`(${mesec}) Mart je ${rbr} redni broj u mesecu`);
            break;
    case 3:
            console.log(`(${mesec}) April je ${rbr} redni broj u mesecu`);
            break;
    case 4:
            console.log(`(${mesec}) Maj je ${rbr} redni broj u mesecu`);
            break;
    case 5:
            console.log(`(${mesec}) Juni je ${rbr} redni broj u mesecu`);
            break;
    case 6:
            console.log(`(${mesec}) Juli je ${rbr} redni broj u mesecu`);
            break;
    case 7:
            console.log(`(${mesec}) Avgust je ${rbr} redni broj u mesecu`);
            break;
    case 8:
            console.log(`(${mesec}) Septembar je ${rbr} redni broj u mesecu`);
            break;
    case 9:
            console.log(`(${mesec}) Oktobar je ${rbr} redni broj u mesecu`);
            break;
    case 10:
            console.log(`(${mesec}) Novembar je ${rbr} redni broj u mesecu`);
            break;
    case 11:
            
            console.log(`(${mesec}) Decembar je ${rbr} redni broj u mesecu`);
            break;
    default:
            console.log(`Doslo je do greske`);
            break;

}


//zadatak 7
let godina = date.getFullYear();
mesec += 1;
let brojD= 31;

switch(mesec)
{
    case 1, 3, 5, 7, 8, 10, 12:
        brojD= 31;
        break;
    case 2:
        if(godina % 4 == 0 && godina % 100 != 0 || godina % 400 == 0)
        {
            brojD = 29;  
        }   
        else
        {
            brojD= 28;
        }
        break;
    case 4, 6, 9, 11:
        brojD=30;
        break;
    default:
        console.log(`Greska`);
        break;
}

console.log(`${mesec} je mesec i ima ${brojD} broj dana`);

//zadatak 8


let boja = 'blue';

switch(boja)
{
    case 'red':
      document.body.innerHTML += `<p style="color : red">Paragraf</p>`;
      break;
    case 'green':
        document.body.innerHTML += `<p style="color : green">Paragraf</p>`;
        break;
    case 'blue':
        document.body.innerHTML += `<p style="color : blue">Paragraf</p>`;
        break;
    default:
        document.body.innerHTML += `<p style="color :yellow">Paragraf</p>`;
        break;
}


