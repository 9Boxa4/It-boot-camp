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


let getTodos = (resurs,cb)=>
{
    let request = new XMLHttpRequest();
    

    request.addEventListener(`readystatechange`, ()=>
    {
        if(request.readyState === 4 && request.status === 200)
        {
            //sve ok
            // console.log(request.responseText);
            cb(request.responseText,undefined);
        }
        else if(request.readyState === 4)
        {
            //nesto nije OK
            // console.log(`Ne mogu da dohvatim podatke`);
            cb(undefined,`Ne mogu da dohvatim podatke`);
        }
    });
    
    //2. otvaranje kreiranog zahteva
    
    request.open(`GET`,resurs);
    request.send();
}

getTodos(`../JSON/todos.json`, (data,err)=>
{
    console.log(`Callback okinuta`);
    if(err)
    {
        console.log(err); // ispisuje gresku
    }
    else
    {
        console.log(data); // ispisuje podatke sa kojima moze da raspolaze
    }
});

console.log(`kraj`);