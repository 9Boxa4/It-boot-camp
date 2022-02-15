// 1. Kreiranje XML objekta

// let request = new XMLHttpRequest();

// request.addEventListener(`readystatechange`, ()=>
// {
//     if(request.readyState === 4 && request.status === 200)
//     {
//         //sve ok
//         console.log(request.responseText);
//     }
//     else if(request.readyState === 4)
//     {
//         //nesto nije OK
//         console.log(`Ne mogu da dohvatim podatke`);
//     }
// });

// //2. otvaranje kreiranog zahteva

// request.open(`GET`,`../JSON/todos.json`);
// request.send();






 
    
 
let getTodos = resurs=>
{
    let request = new XMLHttpRequest();
    //2. otvaranje kreiranog zahteva
    request.open(`GET`,resurs);
    //3.saljemo zahtev 
    request.send();


    // return p; // vracam objekat  promise
    return  new Promise((resolve,reject)=> //cesce se ovde stavlja return nego dole
    {
        request.addEventListener(`readystatechange`, ()=>
    {
        if(request.readyState === 4 && request.status === 200)
        {
            //sve ok
            // console.log(request.responseText);
            //cb(request.responseText,undefined);
            resolve(request.responseText);
        }
        else if(request.readyState === 4)
        {
            //nesto nije OK
            // console.log(`Ne mogu da dohvatim podatke`);
            //cb(undefined,`Ne mogu da dohvatim podatke`);
            reject(`Ne mogu da dohvatim podatke`);
        }
    });
    });
    // return p; // vracam objekat  promise
}
// Zelim  1. da se ucita todos.json 
// 2. da se ucita fruits, 
// 3. da se ucita vege.json

getTodos(`../JSON/todos.json`).then(data=>
    {
        console.log(`promise todos result`, data);
        return getTodos(`../JSON/fruits.json`); // vracam promise 
    })
    .then(data=>
        {
            console.log(`Promise fruits resolved`,data);
            return getTodos(`../JSON/vege.json`)
        })
        .then(data=>
            {
                console.log(`Promise vege resolved`,data);
            })
    .catch(err=>
        {
            console.log(`promise rejected`, err);
        })

console.log(`kraj`);



