// let request = new XMLHttpRequest();
// // request.addEventListener(`readystatechange`, ()=>
// // { 
// //     if(request.readyState == 1)
// //     {
// //         console.log(`uspostavljena konekcija`);
// //     }
// //     else if(request.readyState == 2)
// //     {
// //         console.log(`Poslat je zahtev serveru`);
// //     }
// //     else if(request.readyState == 3)
// //     {
// //         console.log(`prihvata se odgovor u statusu preuzimanja`);
// //     }
// //     else if(request.readyState == 4)
// //     {
// //         console.log(`Odgovor je preuzet`, request.responseText);
// //     }
// // });
// request.addEventListener(`readystatechange`, function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//         data.forEach(el => 
//             {
//                 if(el.website.includes(`.com`))
//                 {
//                     console.log(el);
//                 }
//             });
//        data.forEach(el=>
//         {
//             if(el.name.includes(`Clementin`) )
//             {
//                 console.log(el);
//             }
//         })
//         data.forEach(el=>
//             {
//                el.company.name.for()
                   
            // })
// //         let niz=[];
// //         data.forEach(el=>
// //             {
// //                 if( niz.indexOf(el) === -1)
// //                 {
// //                     niz.push(el);
// //                 }
// //             })
// //             console.log(niz);
        
// //     }
// //     else if(this.readyState === 4)
// //     {
// //         console.log(`could not fetch data`);
// //     }
// // })

// // request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// // request.send();

// // let gradovi = [];
// //     data.forEach((el) => {
// //       if (gradovi.includes("el.address.city")) {
// //       } else {
// //         gradovi.push(el.address.city);
// //       }
// //     });
// //     console.log(gradovi);
// //   }

// let request2 = new XMLHttpRequest();

//  request2.addEventListener(`readystatechange`, function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         let data = JSON.parse(this.responseText);
//         // console.log(data);
//         // console.log( parseInt(data[0].address.geo.lat));
//         data.forEach(el => 
//             {
                
//                 if(el.website.includes(`.com`))
//                 {
//                     console.log(el.name);
//                 }
//             });
//     }
//     else if(this.readyState === 4)
//     {
//         console.log(`greska`);
//     }
// });
// request2.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// request2.send();

// let request3 = new XMLHttpRequest();

//  request3.addEventListener(`readystatechange`, function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//         data.forEach(el=>
//             {
//                 if(el.name.includes(`Clementin`) )
//                 {
//                     console.log(el);
//                 }
//             })
//     }
//     else if(this.readyState === 4)
//     {
//         console.log(`greska`);
//     }
// });
// request3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// request3.send();

// let request4 = new XMLHttpRequest();

//  request4.addEventListener(`readystatechange`, function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//        data.forEach(el=>
//         {
//             if(el.company.name.includes(`Group`) || el.company.name.includes(`LLC`))
//             {
//                 console.log(el.name);
//             }
//         })
//     }
//     else if(this.readyState === 4)
//     {
//         console.log(`greska`);
//     }
// });
// request4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// request4.send();


// let request5 = new XMLHttpRequest();

//  request5.addEventListener(`readystatechange`, function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//         let niz=[];
//        data.forEach(el=>
//         {
//             if(!niz.includes(el.address.city))
//             {
//                 niz.push(el.address.city)
//             }
//         })
//         console.log(niz);
//     }
//     else if(this.readyState === 4)
//     {
//         console.log(`greska`);
//     }
    
// });
// request5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// request5.send();


// let request6 = new XMLHttpRequest();

//  request6.addEventListener(`readystatechange`, function()
// {
//     if(this.readyState === 4 && this.status === 200)
//     {
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//         let br=0;
//         data.forEach(el=>
//             {
//                 if(parseFloat(el.address.geo.lat)< 0 && parseFloat(el.address.geo.ing) < 0)
//                 {
//                     br++;
//                 }
//             })
//             console.log(br);
//     }
//     else if(this.readyState === 4)
//     {
//         console.log(`greska`);
//     }
    
// });
// request6.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
// request6.send();



// let getUsers = (resolve,reject) =>
// {
//     let request = new XMLHttpRequest();
//     request.addEventListener(`readystatechange`, function()
//     {
//         if(this.readyState ===4 && this.status === 200)
//         {
//             // radi nesto kada je sve u red
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }
//         else if(this.readyState === 4)
//         {
//             // radi nesto kada je doslo do greske
//             reject(`doslo je do greske!`);
//         }
//     });
//     request.open(`GET`,`https://jsonplaceholder.typicode.com/users`);
//     request.send();
// }

// let zad2 = (niz) =>
// {
//     niz.forEach(kor=>
//         {
//             if(kor.website.includes(`.com`))
//             {
//                 console.log(kor.name);
//             }
//         })
// }

// let zad3 = niz =>
// {
//     niz.forEach(kor=>
//         {
//             if(kor.name.includes(`Clementin`))
//             {
//                 console.log(kor.name);
//             }
//         })
// }

// let zad5 = niz =>
// {
//     let gradovi = [];
//     niz.forEach(kor=>
//         {
//             if(!gradovi.includes(kor.address.city))
//             {
//                 gradovi.push(kor.address.city);
//             }
//         })
//         console.log(gradovi);
// }

// let ispisPorukeStranica = poruka =>
// {
//     document.body.innerHTML += `<p class="error">${poruka}</p>`
// }

// let ispisPorukeKonzola = poruka =>
// {
//     console.log(poruka);
// }
// getUsers(zad2,ispisPorukeStranica);
// getUsers(zad3,ispisPorukeStranica);
// getUsers(zad5,ispisPorukeStranica);

// getUsers(
//     (niz)=>
// {
//     niz.forEach(kor =>
//         {
//             if(kor.company.name.includes(`Group`) || kor.company.name.includes(`LLC`))
//             {
//                 console.log(kor.name);
//             }
//         })
// }
// , 
// (poruka)=>
// {
//     document.body.innerHTML += `<p class="error">${poruka}</p>`
// })



let getSportisti = (resolve,reject) =>
{
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function()
    {
        if(this.readyState ===4 && this.status === 200)
        {
            // radi nesto kada je sve u red
            let data = JSON.parse(this.responseText);
            // resolve(data);
            console.log(resolve(data));
        }
        else if(this.readyState === 4)
        {
            // radi nesto kada je doslo do greske
            reject(`doslo je do greske!`);
        }
    });
    request.open(`GET`,`sportisti.json`);  
    request.send();
}

let prosecnaVisina = sportisti =>
{
    let br=0
    let zbir=0
    sportisti.forEach(el=>
        {
            zbir += el.visina;
            br++;
        })
        return zbir/br
        // console.log(zbir/br);
}

let najmanjeTransfera = sportisti =>
{
    let niz =[]
    let najmanje = sportisti[0].timovi.length
    sportisti.forEach(el=>
        {
            if(najmanje > el.timovi.length)
            {
                najmanje= el.timovi.length
            }
        })
        sportisti.forEach(el=>
            {
                if(najmanje == el.timovi.length)
                {
                    niz.push(el.imePrezime)
                }
            })
            return niz;
}

let igraliZaLakers = sportisti =>
{
    niz=[]
    sportisti.forEach(el=>
        {
            el.timovi.forEach(team=>
                {
                    if(team == `Lakers`)
                    {
                        niz.push(el.imePrezime);
                    }
                })
        })
        return niz;
}

// igraliZaLakers(sportisti,`Lakers`);

getSportisti(igraliZaLakers, (poruka)=>
{
    document.body.innerHTML += `<p class="error">${poruka}</p>`
})

getSportisti(najmanjeTransfera,(poruka)=>
{
    document.body.innerHTML += `<p class="error">${poruka}</p>`
})

getSportisti(prosecnaVisina,(poruka)=>
{
    document.body.innerHTML += `<p class="error">${poruka}</p>`
})






// fetch(`http://localhost:3000/sportisti`).then((response)=>
// {
//     console.log(response);
//     return response.json();
// }).catch((err)=>
// {
//     console.log(`Odbijeno`,err);
// })

let uzmiPodatke = resurs =>
{
    let obj = new XMLHttpRequest();
    obj.open("GET", resurs);
    obj.send();
    return new Promise((resolve,reject)=>
    {
        obj.addEventListener(`readystatechange`, () =>
        {
            if(obj.readyState === 4 && obj.status === 200)
            {
                // console.log(obj.responseText);
                resolve(obj.responseText);
            }
            else if(obj.readyState === 4)
            {
                // console.log(`Doslo je do greske`);
                reject(`nije uspelo`);
            }
        })
    })

}


uzmiPodatke(`http://localhost:3000/sportisti`).then(data=>
{
    let data1 = JSON.parse(data);
    // zadatak 3
    let sredina = 0;
    let br =0;
    data1.forEach(sportista => {
        sredina += sportista.visina;
        br++
        // 5 zadatak
        if (sportista.timovi.includes("Lakers")) {
            console.log(sportista.imePrezime);
        }
    });
     br != 0 ? console.log(sredina/br)  : 0;
     
     // zadatak 5

}).catch(err=>
{
    console.log(`Neuspesno,`, err);
})