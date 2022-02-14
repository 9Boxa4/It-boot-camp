let cars = ['toyota','BMW', 'Volvo'];
console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, 'Boxa', -8.8, true, [1,2,3]];

console.log(random);

console.log(cars[0]);

console.log(random[4][1]);

cars [0] = 'peguot';
console.log(cars);

// cars [0] = undefined; //ako hocemo da ga izbegnemo, izbacimo


for(let i =0; i<cars.length; i++)
{
    console.log(cars[i]);
}

let niz = [1,2,10,2];
let zbir =0;
for(let i =0; i <niz.length ; i++)
{
    
    zbir += niz[i];
}
console.log(zbir);

//3 zadatak
// let proizvod =1;
// for(let i = 0; i< niz.length ; i++)
// {
//     proizvod *= niz[i];
// }
// console.log(proizvod);

//4 Odrediti srednju vrednost elemenata celobrojnog niza.

let arSr=0;
let br=0;
let zbir1 =0;
for(let i =0; i <niz.length ; i++)
{
    zbir1 += niz[i];
    br++;
}

arSr =zbir1 /br;
console.log(arSr);


//5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let najveci=0;
for (let i=0; i<niz.length; i++) {
    if (niz[i]>najveci) {
        najveci = niz[i];
    }
}
console.log(najveci);

// primer vise nizova

let niz1 = [7,5,6,11];
let niz2 = [6,10,-1,1,2,54];
let niz3 = [1,6];

let sumaElemenata = nizz =>{
    let suma = 0;
    for(let i=0; i<nizz.length; i++)
    {
        suma += nizz[i];
    }
    return suma;
}

console.log(`Suma elemenata prvog niza `+ sumaElemenata(niz1));
console.log(`Suma elemenata drugog niza `+ sumaElemenata(niz2));
console.log(`Suma elemenata drugog niza `+ sumaElemenata(niz3));

let proizvodElemenata = nizz =>
{
    let proizvod =1;
    for(let i = 0; i< niz.length ; i++)
    {
        proizvod *= niz[i];
    }
    return proizvod;
    
}


console.log(`proizvod brojeva u arrayu je `+ proizvodElemenata(niz1));

let arSr1 = niz =>
{
    let arSr1=0;
let br1=0;
let zbir2 =0;
for(let i =0; i <niz.length ; i++)
{
    zbir2 += niz[i];
    br1++;
}

arSr1 =zbir2 /br1;
return (br1 !=0) ? zbir2/br1 : 0;

}




console.log(`aritmeticka sredina array-a je `+ arSr1(niz1));

let arSr2= niz =>
{
    let suma = sumaElemenata(niz)
    let broj = niz.length;
    return (broj !=0) ? suma/br1 : 0;
}


let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

//4 Odrediti srednji vrednost parnih elemata niza

let arSrParnih = niz =>
{
    let suma = 0;
    let broj =0;
   for(let i= 0; i<niz.length; i++)
   {
       if(niz[i]%2 == 0)
       {
           suma += niz[i];
           broj++;
       }
   }
   return broj == 0 ? 0: suma/broj;
}

console.log(arSrParnih(niz1));

let maxbroj= niz =>
{
    let najveci= niz[0];
    for (let i=0; i<niz.length; i++) 
    {
        if (niz[i]>najveci) 
        {
        najveci = niz[i];
        }
    }   
    return najveci;
}

console.log(`najveci broj je ` + maxbroj(niz1));

// let minbroj = niz =>
// {
//     let min= niz[0];
//     for(let i=0; i<niz.length; i++)
//     {
//         if(min > niz[i])
//         {
//             min = niz[i];
//         }
//     }
//     return min;
// }

// console.log(`Minimalna vrednost niza je `+ minbroj(niz1));






// Stefanov primer za max vrednost


 niz1 = [7,5,6,11];
 niz2 = [6,0,-1,1,2,1];
 niz3 = [1,6];


let brIndex= niz =>
{
    let br=0;
    let max = niz[0];
    
    for(let i=1; i< niz.length; i++)
    {
        if(niz[i] > max)
        {
            max = niz[i];
            br=i;
        }
        
    }
    return `maksimalna vrednost je ${max} i njegov index je ${br}`
}

console.log(brIndex(niz1));


let minbroj = niz =>
{
    br=0;
    let min= niz[0];
    for(let i=0; i<niz.length; i++)
    {
        if(min > niz[i])
        {
            min = niz[i];
            br=i;
        }
    }
    return `minimalni broj je ${min} a njegov index je ${br}`
}


console.log(minbroj(niz2));

 

// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let ElVeciodSrVr= niz =>
{
    let br=0;
    let arSr=0;
    let suma=0;
    for(let i=0; i<niz.length; i++)
    {
        suma += niz[i];
        br++;
    }
    arSr= suma/br;
    let br2=0;
    console.log(`Aritmeticka sredina je ${arSr}`);
    
    for(let i=0; i<niz.length; i++)
    {
        if(niz[i]>arSr)
        {
            br2++;
        }
    }
    console.log(br2);
}
ElVeciodSrVr(niz2);

// Odredi broj maksimalnih elementa

temp = [1,6,7,8,8,1,8]

let brmaxEl = niz =>
{
    let max=niz[0];
    let br=0;
    for(let i=1; i<niz.length; i++)
    {
        if(max<=niz[i])
        {
            max=niz[i]
        }
    }

    for(let i=0; i<niz.length; i++)
    {
        if(max == niz[i])
            {
                br++;
            }
    }
    console.log(`Max broj je ${max}`);
    console.log(`Ima ih ${br}`);
}

brmaxEl(temp);

//Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = ['hleb','mleko', `jogurt`, 'kroasan']

let spisak = niz =>
{
    lista = `<ul>`;
    for(let i=0; i<niz.length; i++)
    {
        lista += `<li>${niz[i]}</li>`;
    } 
    lista += `</ul>`;
    // document.body.innerHTML += lista;
    return lista;
}

// document.body.innerHTML += spisak(kupovina);
document.getElementById('d1').innerHTML += spisak(kupovina); // dodaje se u ID html-u

// at je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.


let team =[`Bulls`, `NY`, `Charlotte`];

let tabela = niz =>
{
    let tabla = `<table border =1>`;
    for(let i=0; i<niz.length; i++)
    {
        tabla += `<tr>
                    <td>${niz[i]}</td>
                </tr>`;
    }
    tabla += `</table>`;
    return tabla;
    
    // document.body.innerHTML += tabla;
}

// tabela(team);
document.getElementById('d2').innerHTML += tabela(team);

//Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

//Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let imgs = [`https://ih0.redbubble.net/image.295756842.5043/flat,1000x1000,075,f.jpg`, `https://cpng.pikpng.com/pngl/s/466-4660448_-bonsai-trees-pixel-art.png`,`https://cpng.pikpng.com/pngl/s/174-1744665_pixel-tree-png-pine-tree-pixel-png-clipart.png`]

let slike = niz =>
{
    slk ='';
    for(let i=0; i<niz.length; i++)
    {
       slk +=  `<img width =100 src="${niz[i]}">`
    }
    return slk;
}

document.getElementById(`slicke`).innerHTML += slike(imgs);

//Ispisati dužinu svakog elementa u nizu stringova. 

//
// let team =[`Bulls`, `NY`, `Charlotte`];

let duzEl = niz =>
{
    for(let i=0; i<niz.length; i++)
    {
        // niz[i].length
        console.log(niz[i].length);
    }
}

duzEl(team);

//Odrediti element u nizu stringova sa najvećom dužinom.
// let team =[`Bulls`, `NY`, `Charlotte`];


let najD= niz =>
{
    let najS = niz[0];
    let naj=niz[0].length;
    for(let i=0; i< niz.length; i++)
    {
        if(naj < niz[i].length)
        {
            naj = niz[i].length;
            najS = niz[i];
        }
    }
    console.log(najS);
}

najD(team);

// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

// let BrElPd= niz =>
// {
//     let br=0;
//     let zbir =0;
//     for(let i=0; i<niz.length; i++)
//     {
//         zbir += niz[i].length;
//         br++;
//     }
//     let arSr = zbir / br;
//     let br2=0;
//     console.log(`Aritmeticka sredina je ${arSr}`);
//     for(let i= 0; i<niz.length; i++)
//     {
//         if(niz[i].length>arSr)
//         {
//             br2++;
//         }
//     }
//     console.log(br2);
// }

// BrElPd(team);

let prosDuzina = niz =>
{
    let suma=0;
    let broj =0;
    for(let i=0; i<niz.length; i++)
    {
        suma += niz[i].length;
        broj++;
    }
    return broj!= 0 ? suma/broj : 0 ;
}

let brojVeciOdProsDuz = niz =>
{
    let broj = 0;
    let pd= prosDuzina(niz);
    for(let i=0; i<niz.length; i++)
    {
        if(niz[i].length > pd)
        {
            broj++;
        }
    }
    return broj;
}

console.log(`prosecna duzina je ${prosDuzina(team)}`);
console.log(`Broj veci od prosecne duzinje ${brojVeciOdProsDuz(team)}`);

// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

 team =[`Bulls`, `NY`, `Charlotte`, `Partizan`, `Arsenal`,`apatinac`];

// let sadrzi = niz =>
// {
//     let br=0
//     for(let i=0; i<niz.length; i++)
//     {
//         if(niz[i].includes('a'))
//         {
//             br++;
//         }
//     }
//     console.log(br);
// }

// sadrzi(team);


//Odrediti broj pojavljivanja slova 'a' u nizu stringova

let brojSadrziA = niz =>
{
    let broj = 0;
    for(let i=0; i<niz.length; i++)
    {
       //niz[i] je string
       let element = niz[i];
       //Sada prolazimo krov sve karaktere stringa element
       for(let j=0; j<element.length; j++)
       {
           if(element[j] == 'a')
           {
               broj++;
           }
       }
    }
    console.log(broj);
}

brojSadrziA(team); // hocemo da vidimo koliko u jednom nizu ima ukupno slova 'a'

//Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 


let brPocA = niz =>
{
    let br=0;
    for(let i=0; i<niz.length; i++)
    {
        if(niz[i].charAt(0)== 'a'|| niz[i].charAt(0)== 'A' )
        {
            br++;
        }
    }
    console.log(br);
}

brPocA(team);


// //

// let nizA =[`a`[0],`a`[1],`a`[]];

// console.log(nizA);

// 24

let a = [5,67,6];
let b = [61,1,12];

let gurka =(a,b) =>
{
    let c=[];
    
}