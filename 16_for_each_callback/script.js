


// function ispisKonzola(niz)
// {
//     let res="";
//     for(let i=0; i<niz.length; i++)
//     {
//         res += niz[i] + ", ";
//     }
//     console.log(res);
// }

// function ispisHTML(niz)
// {
//     let res="";
//     for(let i=0; i<niz.length; i++)
//     {
//         res += niz[i] + ", ";
//     }
//     document.body.innerHTML += `<div>${res}</div>`;
// }

// let brojevi=[1,5,-5,6];

// function ispisKonzola(poruka)
// {
//     console.log(poruka);
// }

// function ispisStranica(poruka)
// {
//     document.body.innerHTML += `<div>${poruka}</div>`;
// }

// function ispisNiza (niz,cb)
// {
//     let res="";
//     for(let i=0; i<niz.length; i++)
//     {
//         res += niz[i] + ", ";
//     }
//     cb(res);
// }

// // ispisKonzola(brojevi);
// // ispisHTML(brojevi);

// ispisNiza(brojevi,ispisKonzola);
// ispisNiza(brojevi,ispisStranica);


// // isti zadatak, samo se pozivaju anonimne funkcije

// ispisNiza(brojevi,function(poruka)
// {console.log(poruka);
// });

// ispisNiza(brojevi, function(poruka)
// {
//     document.body.innerHTML +=`<div>${poruka}</div>`
// });

// // isti zadatak, samo se pozivaju arrow funkcije

// ispisNiza(brojevi, poruka =>
//     {
//         console.log(poruka);
//     });

// ispisNiza(brojevi, poruka =>
//     {
//         document.body.innerHTML +=`<div>${poruka}</div>`;
//     });

    // Broj max elemenata u celom nizu i min broj u celom nizu


    //  brojevi=[1,5,-5,6,6,6,1];


    function maxEl(niz)
    {
        let max = niz[0];
        for(let i=1; i<niz.length; i++)
        {
            if(niz[i]>max)
            {
                max=niz[i]
            }
        }
        return max;
    }

    function minEl(niz)
    {
        let min = niz[0];
        for(let i=1; i<niz.length; i++)
        {
            if(niz[i]<min)
            {
                min=niz[i]
            }
        }
        return min;
    }


    function brojSvojstvoNiz(niz,svojstvo)
    {
        let s= svojstvo(niz);
        let br=0;
        for (let i=0; i<niz.length; i++)
        {
            if(niz[i] == s)
            {
                br++;
            }
        }
        return br;
    }


    let temp = [0,0,1,2,2,1,2,1,0,0];



    console.log(brojSvojstvoNiz(temp,maxEl));
    console.log(brojSvojstvoNiz(temp,minEl));

    ///////////////////////////////////////////
    let namirnice = ['hleb', 'mleko', 'jogurt', 'zejtin'];

let itemi = niz =>
{
    lista =`<ul>`;
    niz.forEach(el=>
        {
            lista += `<li>${el}</li>`;
        })
    lista += `</ul>`;
    return lista;
}

//prvi ispis
let ispisHTML =doc=>
{
    document.body.innerHTML += doc;
};

// itemi(namirnice,ispisHTML);

//drugi ispis
let ispisLOG = doc =>
{
    console.log(doc);
}

zvanje = (funk,kako) => kako(funk);





let team = [`Chicago`,`Partizan`, `Zvezda`, `Radnicki`, `Lakers`];


let tablica = niz =>
{
    let tabla = `<table border= 1>`;
    niz.forEach(el=>
        {
            tabla += `<tr><td>${el}</td></tr>`;
        })
        tabla += `</table>`;
        return tabla;
}

tablica(team,ispisHTML);

//Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.


let imgs=[`https://images.squarespace-cdn.com/content/v1/5a79d837aeb625f12ad4e9b2/1599054986361-FFDAP5L9R3BJGAE9CVI3/Skateboard+England+-+Paul+Scott.jpg?format=1000w`,`https://i.ytimg.com/vi/MJZBd6-OFzw/maxresdefault.jpg`, `https://upload.wikimedia.org/wikipedia/commons/4/4d/FL_5767388.jpg` ];


// let slike = (url, cb) =>
// {
//     let pic=``;
//     url.forEach(el=>
//         {
//             pic += `<img width= 100 height=72 src="${el}">`;
//         });
//         cb(pic)
// };

// slike(imgs,ispisHTML);


let slike = url =>
{
    let pic=``;
    url.forEach(el=>pic += `<img width= 100 height=72 src="${el}">`);return pic;
};

// slike(imgs,ispisHTML); 



zvanje(itemi(namirnice),ispisHTML);
zvanje(tablica(namirnice),ispisHTML);
zvanje(itemi(team),ispisHTML);