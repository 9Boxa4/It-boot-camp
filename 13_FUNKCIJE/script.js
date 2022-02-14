console.log(`Funkcije`);

function zdravo()
{
    console.log(`Hello world!`);
}

zdravo();
zdravo();


function stampaj(tekst)
{
    console.log(tekst);
}

stampaj("Jelena");
stampaj("stefan");

let ime = "Sofija";

stampaj(ime);

///////////////////////////////////////////////////

function korisnik (ime,prezime)
{
    console.log(`ulogovani korisnik je ${ime} ${prezime}`);
}

korisnik("Stefan", "Stenimirovic");
korisnik("Bogdan", 'Jovanovic');

///////////////////////////////////

function korisnikGodine(ime, prezime, godine)
{
    console.log(`Korisnik ${ime} ${prezime} ima ${godine} godina`);
}

korisnikGodine("Bogdan","Jovanovic", 27);
korisnikGodine('Pera', 'Peric', 17);

/////////////////////////////



function zbirDvaBroja(x, y)
{
    let zbir = x+y;
    console.log(zbir);
}

zbirDvaBroja(15, 12);
zbirDvaBroja(591,9);

////////////////////////////////

function vratiZbirDvaBroja(a,b)
{
    let zbir = a + b;
    return zbir;
}

let rez = vratiZbirDvaBroja(50,70);
console.log(rez);

rez = vratiZbirDvaBroja(16, 15);
console.log(rez);


let rez1 = vratiZbirDvaBroja(4,6); // 10
let rez2 = vratiZbirDvaBroja(5,7); // 12

let rez3 = vratiZbirDvaBroja(rez1, rez2); //22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4+5,1+3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7,9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1,2),vratiZbirDvaBroja(5,3));
console.log(rez6);

//////////////////////////////////////////////////

function voda(temperatura)
{
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`);
    if(temperatura <= 0)
    {
        console.log(`Voda je u cvrstom agregatnom stanju`);
    }
    else if(temperatura >= 100)
    {
        console.log(`Voda je u gasovitom agregatnom stanju`);
    }
    else
    {
        console.log(`Voda je u tecnom agregatnom stanju`);
    }
}

voda(-5);
voda(100);
///////////////////////////////////////////////
//2. Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function racunaj(br1,br2, operacija)
{
    if(operacija == "+")
    {
        let rezultat = br1 + br2;
        console.log(rezultat);
    }
    else if(operacija == "-")
    {
        let rezultat= br1-br2;
        console.log(rezultat);
    }
    else if(operacija == "*")
    {
        let rezultat = br1 * br2;
        console.log(rezultat);
    }
    else if(operacija == "/")
    {
        if(br2==0)
        {
            console.log(`Deljenje ${br2} nije dozvoljeno `);
        }
        else
        {
            let rezultat = br1 / br2;
            console.log(rezultat);
        }
        
    }
    else 
    {
        console.log(`Los unos`);
    }
}

racunaj(10,2,"+");
racunaj(5,0,"/");

//////////////////////////////////////////////
//primer 1 za scope za if 





//Primer 2 za scope i let

if(true)
{
    let test ="Zdravo"; // Linija *
    console.log(test); // Ispisuje zdravo koji dodeljen u liniji *
    if(true)
    {
        let test = "hello";// Linije **
        console.log(test);// Ovde vidi test iz linije ** jer je u tom scope
    }
    console.log(test); // Ovde vidi testi iz linije *
}
// console.log(test); // ovde ne vidi test

//primer 3

if(true)
{
    let test ="Zdravo"; // Linija *
    console.log(test); // Ispisuje zdravo koji dodeljen u liniji *
    if(true)
    {
        test = "ZZZ"
        console.log(test);
        // let test = "hello";// Linije **
        console.log(test);// Ovde vidi test iz linije ** jer je u tom scope
    }
    console.log(test); // Ovde vidi testi iz linije *
}

/////////////////////
if(true)
{
    var proba = 'proba' // ako ne stavimo ni let ni var, racuna se kao da je var
}

console.log(proba);


// let vidim samo u okviru scop-a, dok var vidim i izvan scope-a(ako nista ne stavim racuna se kao var)


if(true)
{
    var promenljiva = 'promenljiva';
    if(true)
    {
        var promenljiva = 'hmmm'; // var se posmatra na globalnom nivou
        console.log(promenljiva);
    }
    console.log(promenljiva);
}
//////////////////////////////////////////


//zadatak 3

function neparan(n)
{
    console.log(`Broj koji je unet je neparan ${n}`);
    
    if(n % 2 != 0)
    {
        
        // return "Tacno";
        return true;
         
    }
    else if(n % 2 == 0)
    {
        // return "Netacno";
        return false;
    }
    else
    {
        return `Greska`;
    }
}

let rezultat = neparan(5)
console.log(rezultat);

let rezultat2 = neparan(10)
console.log(rezultat2);

function neparan1 (n)
{
    let rez= true;
    if(n%2 ==0)
    {
        rez =false;
    }
  return rez;
}

let nep1= neparan1(6);
console.log(nep1);

function neparan2(n)
{
    return n%2 != 0
}

let nep2= neparan2(173);
console.log(nep2);

// 4 zadatak

function maks2(a,b)
{
    console.log(`Izmedju brojeva ${a} i ${b} broj koji je veci je`);
    if(a>=b)
    {
        return a;
    }
    else if(b>=a)
    {
        return b;
    }
    else
    {
        return 'Greska u zapisu';
    }
}

let veciB = maks2(81,82);
console.log(veciB);

function maks4(a,b,c,d)
{
    console.log(`Od brojeva ${a}, ${b}, ${c}, ${d} najveci broj je`);
    if(a>=b && a>=c && a>=d)
    {
        return a;
    }
    else if(b>=a && b>= c && b>= d)
    {
        return b;
    }
    else if(c>= a && c>=b && c>= d)
    {
        return c;
    }
    else if(d>=a && d>=b && d>=c)
    {
        return d;
    }
    else
    {
        return 'Greska';
    }
}

let veciOd4= maks4(10,1,1,7);
console.log(veciOd4);
///////////////////////////////////////////
//jelenin predlog za max brojeve

function maks4_jelena(a,b,c,d)
{
    let max1 =maks2(a,b); //vrati mi koji je veci broj izmedju a i b npr. 5 i 7, vratice 7
    let max2 = maks2(c,d); // vrati mi koji je veci broj izmedju c i d npr. izmedju 2 i 9, vratice 9
    let max = maks2(max1,max2);
    return max;
}

let maks4broja = maks4_jelena(5,7,2,9);
console.log(maks4broja);

///////////////////////////////////////////
//primer aleksandar

function maks4_aleksandar(a,b,c,d)
{
    let max = maks2(maks2(a,b),maks2(c,d)); 
    return max;
    //ili zadatak resiti u jednoj liniji kao
    //return maks(maks2(a,b), maks2(c,d));
}

let maks4brojaA = maks4_aleksandar(1,5,17,99);
console.log(maks4brojaA);

//zadatak 5

function  slika(url)
{
    document.body.innerHTML +=`<img width=150 src="${url}"></img>`;
}

slika(`https://media.istockphoto.com/vectors/happy-new-year-2020-gold-star-gray-vector-id1175405816?k=20&m=1175405816&s=612x612&w=0&h=moPj5qb01kYMsjoG3sD0SIV4z4gb_SoT9SFilVVYfCQ=`);


//zadatak6
function boja(boja)
{
    document.body.innerHTML += `<p style="color:${boja}">Ovde se nalazi neki tekst</p>`;
}

 boja('green');



function sedmiDan(n)
{
    if(n %7 == 0)
    {
        console.log(`Nedelja`);
    }
    else if(n %7 == 1)
    {
        console.log(`Ponedeljak`);
    }
    else if(n % 7 == 2)
    {
        console.log(`Utorak`);
    }
    else if(n%7 == 3)
    {
        console.log(`Sreda`);
    }
    else if(n%7 == 4)
    {
        console.log(`Cetvrtak`);
    }
    else if(n%7 == 5)
    {
        console.log(`Petak`);
    }
    else if(n%7 == 6)
    {
        console.log(`Subota`);
    }
    else
    {
        console.log('Greska');
    } 
}

sedmiDan(10); // ako je sa case-evima stavi n%7;

function MesecPlus(n)
{
    switch(n)
    {
        case 0:
            console.log(`Januar`);
            break;
        case 1:
            console.log(`Februar`);
            break;
        case 2:
            console.log(`Mart`);
            break;
        case 3:
            console.log(`April`);
            break;
        case 4:
                console.log(`Maj`);
                break;
        case 5:
                console.log(`Jun`);
                break;
        case 6:
                console.log(`Jul`);
                break;
        case 7:
                console.log(`Avgust`);
                break;
        case 8:
                console.log(`Septembar`);
                    break;
        case 9:
                console.log(`Oktobar`);
                break;
        case 10:
                    console.log(`Novembar`);
                    break;
        case 11:
        default:
                console.log(`Pogresan unos`);
                break
    }
}

// 8 zadatak
function deljivSaTri(n,m)
{
    let br=0;
    for(let i =n; i<=m ; i++)
    {
        if(i%3 == 0)
        {
           console.log(i);
            br++;
        } 
    }
    console.log(`Ima ${br} brojeva`);
}

 deljivSaTri(1,6);



// 9 zadatak

function sumiraj (n,m)
{
    let sum = 0;
    for(let i = n; i<=m ; i++)
    {
        sum += i;
    }
    console.log(`Suma brojeva je ${sum}`);
}

sumiraj(1,4);

// 10 zadatak 

function mnozi(n,m)
{
    let proizvod=1;
    for(let i=n; i<=m; i++)
    {
        proizvod *= i;
    }
    console.log(`Proizvod brojeva je ${proizvod}`);
}

// 13 zadatak - za domaci

//14 zadatak

function petPuta (recenica, boja)
{
    for(let i=1; i<=5; i++)
    {
        document.body.innerHTML += `<p style = "font-size: ${i*5}px; color:${boja}" >${recenica}</p>`
    }
}
petPuta("Neki paragraf");



//zadatak 15

// kolika je plata poslednjeg meseca

function izPraksu(n,a,d)
{
    
    for(let i= 2; i<= n; i++)
    {
        a+= d;
        console.log(a);
    } 
    return a;
}


//n meseci npr 6.
//a prvi mesec 50000
//d je povisica svakog meseca za 2000

let praksa = izPraksu(1,50000,2000);
console.log(praksa);

////////////////////////////
//ako je suma 
function praksa_Aleksandar(n,a,d)
{
    suma =a;                    //da izbegnemo if(i==1) jer prvog meseca nema povisice
    for(let i=2; i<=n; i++)
    {
        if(i>=2)
        {
            suma+= a+d; // povisica (d)
        }
    }
    return suma;
}

let p = praksa_Aleksandar(3,50000, 5000);
console.log(p);

//jelena

let n=3;
let a=5000;
let d =200;

//1 mesec - 5000;
//2 mesec - 5000 +200;
//3 mesec 5000 +200;

let ukupno = a*n + d*(n-1); // plate + povisice
let ukupno1 = n*(a+d) - d; // plate sa povisicama - 1. mesec kada nemam povisicu
let ukupno2 = a + (n-1) * (a+d); // plata za 1 mesec + plata za preostalih n-1 meseci

//16 zadatak

function vreme(t,p,n)
let cekaj = n+p -t
{
    if(p>t || t>= p+n)
    {
        console.log(`Trci`);
    }
    else
    {
        console.log(`treba da ceka${cekaj} da ne bi cekao most`);
    }
    
}
vreme(11,10,160);

