let  getSomething = () =>
{
    let obj = new Promise((resolve,reject)=>
    {
        // resolve(`Nesto resolve`); //sve ok proslo onda je resolve
        // reject(`Nesto reject`); // nesto nije ok proslo
    });
    // console.log(obj);
    return obj; // vraca promise objekat
}

// ako je promise vratio resolve, realizuje se .then() grana
//ako je promise vratio reject, realizuje se catch() grama
getSomething().then( data =>
    {
        console.log(`Aktivirana je .then grana ${data}`); // dobija vrednost koja se prosledjuje u resolve
    }).catch(err=>
        {
            console.log(`Aktivirana je catch grana ${err}`); // dobija vrednost one poruke koja se prosledjuje u recejt
        })