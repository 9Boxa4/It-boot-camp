// PRIMERI CALLBACK FUNKCIJA

let myFunc = callback =>
{
    callback();
}


// realizacije callback funkcije, vrsi se prilikom poziva roditeljske funkcije
myFunc(()=>
{
    console.log(`Callback okinuta`);
});

///////////////////////////////////////////////////////////////

let sum = callback =>
{
    callback(5,7);
    let br1=6;
    let br2=4;
    callback(br1,br2)
}

//1
//realizacija funkcije se prosledjuje kao parametar
sum((x,y)=>
{
    console.log(x+y);
});

//2
//Kreiramo posebnu funkciju za realizaciju i onda je prosledimo kao parametar
function printSum (a,b)
{
    console.log(a+b);
}

sum(printSum); // poziv funkcije koja realizuje ide bez zagrada

//////////////////////////////////////////////////////////////////

let my = f =>
{
    f(`Bokisa`);
}

my((x)=>
{
    console.log(`Hello ${x}`);
});

//////////////////////////////////////////

let racunaj = (str,cb) =>
{
    // console.log(str);
    // cb(10,5);
    // console.log(`${str} ${cb(10,5)}`);
    let a=4
    let b=2;
    console.log(str, cb(10,5));
    console.log(str, cb(a,b));
    
}

racunaj(`Oduzimanje`, (x,y)=>
{
    // console.log(x-y);
    return x - y
});

racunaj(`Mnozenje`, (x,y) =>
{
    // console.log(x*y);
    return x*y
});


racunaj(`Deljenje`, (x,y)=>
{
    return x/y
})


let racunaj3 = (str, a,b,cb)=>
{
    console.log(str, cb(a,b));
} 

racunaj3(`Deljenje`, 15,17,(a,b)=>
{
    let res = a/b;
    return res;
})