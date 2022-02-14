import {film} from "./film.js";

let movie = new film(`Trcko`,`Mark Markson`,1956,[8.2,9.3,7.9]);
let movie2 = new film(`Munja`,`Filip Zikic`,2001, [8,9,7,6] )
let movie3 = new film(`Filmmm`,`Zoran Marjanovic`,`neka godina`, [7,6,7,7,8,7] );

let filmovi = [movie,movie2,movie3];

movie.stampaj();
movie2.stampaj();
movie3.stampaj();

movie3.naslov =`Drugo ime filma`;

console.log(movie3.godinaIzdanja);

let stampajSve = filmovi =>
{
    
    filmovi.forEach(film => 
        {
            film.stampaj();
        });
}

stampajSve(filmovi);

movie.dodajOcenu(10);
console.log(movie);

// prikaz svih filmova u tabelici



let tabelica = `<table border=1>
<tr>
    <th>Naziv filma</th>
    <th>Reziser</th>
    <th>Godina izdanja</th>
    <th>Ocene</th>
    <th>Prosecna</th>
</tr>`;
// let filmovi = [movie,movie2,movie3];

filmovi.forEach(film=>
    {
        tabelica +=
    `    <tr>
    <td>${film.naslov}</td>
    <td>${film.reziser}</td>
    <td>${film.godinaIzdanja}</td>
    <td>${film.ocena}</td>
    <td>${film.prosek()}</td>
</tr>`
    })

tabelica += `</table>`;


document.body.innerHTML += tabelica;


//let filmovi = [movie,movie2,movie3];


console.log(movie.prosek());


let vekFilmova = (filmovi,vek) =>
{
    vek = vek *0.100
    //vek+1 = vek *0.100
    // console.log(2001/100);

    filmovi.forEach(film=>
        
        {
            if((film.godIzdanja/100)>=vek)
            {
                console.log(film);
            }
        })
}


//Jelenin nacin

let vekFilmova2 = (filmovi,vek) =>
{
    let pocetak = vek *100-99;
    let kraj = vek* 100;
    filmovi.forEach(film=>
        {
            if(film.godinaIzdanja <= kraj && film.godinaIzdanja>= pocetak)
            {
                console.log(film);
            }
        })
}

// vekFilmova2(filmovi,21);
vekFilmova(filmovi,21);
// console.log(21*0.100);
// console.log(filmovi[1].godinaIzdanja/100);


let prosecnaOcena = filmovi =>
{
    let globZbir =0;
    let globBr=0;
    let globAvg =0;
    filmovi.forEach(film=>
        {
            film.ocena.forEach(ocena=>
                {
                    globZbir += ocena;
                    globBr++;
                })
        })
        globAvg =globZbir / globBr;
        return globAvg;
}

// console.log(prosecnaOcena(filmovi));
//let movie = new film(`Trcko`,`Mark Markson`,1956,[8.2,9.3,7.9]);

let najboljeOcenjeni = filmovi =>
{
    // let best=[];
    let best;
    let najboljiFilm= filmovi[0].prosek();
    // let globAvg = prosecnaOcena(filmovi);

    filmovi.forEach(film=>
        {
            if(najboljiFilm < film.prosek())
            {
                najboljiFilm = film.prosek()
            }
        })
        filmovi.forEach(film=>
            {
                if(film.prosek() == najboljiFilm)
                {
                    // best.push(film);
                    best = film;
                }
            })
    return best;
}

console.log(najboljeOcenjeni(filmovi));

///////////////////////////////////////////////////////////////////////

// let osrednjiFilm = filmovi =>
// {
//     let globAvg = prosecnaOcena(filmovi);
//     let najblizi= Math.abs(globAvg - filmovi[0].prosek());
//     let movie =[];
//     filmovi.forEach(film=>
//         {
//             if(najblizi > Math.abs(globAvg -film.prosek()))
//             {
//                 najblizi = Math.abs(globAvg -film.prosek())
//             }
//         })
//         filmovi.forEach(film=>
//             {
//                 if(najblizi == Math.abs(globAvg -film.prosek()))
//                 {
//                     movie.push(film)
//                 }
//             })
//             return movie
// }


// console.log(osrednjiFilm(filmovi));


let osrednjiFilm = filmovi =>
{
    let globAvg = prosecnaOcena(filmovi);
    let najblizi= filmovi[0]
    let najmanjaRazlika = Math.abs(globAvg -najblizi.prosek());
    let movie =[];
    filmovi.forEach(film=>
        {
            let procecnaOcenaFilma = film.prosek();
            if(Math.abs(globAvg-procecnaOcenaFilma)< najmanjaRazlika)
            {
                najmanjaRazlika = Math.abs(globAvg-procecnaOcenaFilma);
                najblizi = film;
            }
        })
        return najblizi;
    
}

console.log(osrednjiFilm(filmovi));
// console.log(movie.prosek());
// console.log(movie2.prosek());
// console.log(movie3.prosek());

let najmanjaOcenaNajboljeg = filmovi =>
{
    let najboljiFilm = najboljeOcenjeni(filmovi);
    let ocenaNajboljegFilma =najboljiFilm.ocena; // vraca niz ocena
    let najslabijaOcena = ocenaNajboljegFilma[0];
    ocenaNajboljegFilma.forEach(ocena=>
        {
            if(ocena < najslabijaOcena)
            {
                najslabijaOcena = ocena;
            }
        })
        console.log(najslabijaOcena);
}

najmanjaOcenaNajboljeg(filmovi)


let najmanjaOcena = filmovi =>
{
    let najmanjaOcena = filmovi[0].ocena[0];
    filmovi.forEach(film=>
        {
            film.ocena.forEach(oc=>
                {
                    if(najmanjaOcena> oc)
                    {
                         najmanjaOcena = oc;
                    }
                })
        })
        return najmanjaOcena;
}
    
let f1 = [8.2,9.3,7.9];
let f2 =  [8,9,7,6];
let f3 = [7,6,7,7,8,7];
let f =[];

// f = f.concat(f1,f2,f3);
// f = f.concat(f1);
// f = f.concat(f2);
// f = f.concat(f3);
// console.log(f);

let sveOcene = filmovi =>
{
    let arrSveOcene = [];
    filmovi.forEach(film=>
        {
            arrSveOcene = arrSveOcene.concat(film.ocena)
        });
        return arrSveOcene;
}

console.log(sveOcene(filmovi));


let najcescaOcena = filmovi =>
{

let pretpostavkaEl = filmovi[0];
let pretpostavkaElPojavljivanja=1;
for(let i=0; i<filmovi.length; i++)
{
    let tekuci=filmovi[i];//zvezdica
    let tekuciBrPojavljivanja =0;

    for(let j=0; j<filmovi.length; j++)
    {
        if(tekuci == filmovi [j])
        {
            //nasli smo isti element
            tekuciBrPojavljivanja++;
        }
    }
    if(pretpostavkaElPojavljivanja < tekuciBrPojavljivanja)
    {
        pretpostavkaElPojavljivanja = tekuciBrPojavljivanja;
        pretpostavkaEl = tekuci;
    }
}
return pretpostavkaEl;
}

let sve = sveOcene(filmovi); // niz svih ocena
console.log(najcescaOcena(sve));



// napraviti funkciju iznadOcene kojoj se prosledjuje ocena i niz filmova, a ona vraca niz onih filmova koji su bolje ocenjeni (veca im je prosecna ocena) od prosledjene ocene


let iznadOcene = (ocena,filmovi) =>
{
    let nizFilmova = []
    filmovi.forEach(film=>
        {
            if(film.prosek() > ocena)
            {
                nizFilmova.push(film)
            }
        })
        return nizFilmova;
}

console.log(iznadOcene(7.4, filmovi));

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

// let iznadOceneNoviji = (ocena,filmovi) =>
// {
//     let filll=[]
//     // let nizFilmova = []
//     let fff;
//     let noviji= filmovi[0].godinaIzdanja;
//     filmovi.forEach(film=>
//         {
//             if(film.prosek() > ocena)
//             {
//                 // nizFilmova.push(film)
//                 fff = film;
//             }
//         })

//         filmovi.forEach(film=>
//             {
//                 if(noviji < film.godinaIzdanja)
//                 {
//                     noviji = film.godIzdanja;
//                 }
//             })

//             filmovi.forEach(film=>
//                 {
//                     if(noviji == film.godIzdanja)
//                     {
//                         filll.push(film)
//                     }
//                 })
//                 if(fill )
// }


// iznadOceneNoviji(7,4,filmovi)


//dzonijev pokusaj

let iznadOceneNoviji = (ocena,filmovi) =>
{
    let nizf = iznadOcene(ocena,filmovi);
    let noviji= filmovi[0];
    

}