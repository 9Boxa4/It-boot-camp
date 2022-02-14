console.log("If  - naredba grananja")

if(true)
{
    console.log("Uslov je ispunjen");
}


console.log('neki kod');



//Operatori poredjenja:
// ==, !=, <, >, <=, >=

let a = 7;
let b = 7;

if(a==b)
{
    console.log('a i b su jednake vrednosti');
}

a = 10;
b = 14;
if(a!=b){
    console.log('a i b nisu jednake vrednosti');
}
if(a < b)
{
    console.log('a je strogo manje od b');
}

if(a <= b)
{
    console.log('a je manje ili jednako b');
}

////////////////////////////////////


// proverava samo po vrednosti nije bitan tio

a = "5";
b = "5";
if(a == b)
{
    console.log('a i b su jednake vrednosti')
}

// Proverava jednakost i po tipu i po vrednosti

if( a === b)
{
    console.log('a i b su jednaki po vrednosti i po tipu')
}

// !== da li je nesto razlicito i po tipu i po vrednosti

a = 8;
b = "7";

if(a !== b)
{
    console.log('a i b nisu jednaki po tipu ili po vrednosti');
}

let x = 3;
let y = 4;
let z = 5;

if( x + y == z + 2){
    console.log('x + y == z + 2');
}

if(x = z + 2)
{
    console.log('Hello');
}


////

