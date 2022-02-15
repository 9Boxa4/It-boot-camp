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
    else //izvrsava se data ako je sve okej i ulazi u Block code
    {
        console.log(data); // ispisuje podatke sa kojima moze da raspolaze
        getTodos(`../JSON/fruits.json`,(data,err)=>
        {
            if(err)
            {
                console.log(err); 
            }
            else // ulazi sada u ovaj block
            {
                console.log(data); // ispisuje fruits
                getTodos(`../JSON/vege.json`, (data,err)=>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    else // ulazi na kraju ovde ispisuje vege podatke
                    {
                        console.log(data);
                    }
                })
            }
        })
    }
});

console.log(`kraj`);