console.log("Hewwww");


let b1 = 5;
let b2 = 2;
let b3 = 4;

if(b1 > b2)
{
    if(b1 > b3)
    {
        console.log(`broj ${b1} je najveci`);
        if(b2 > b3)
        {
            console.log(`broj ${b2} je srendnji`);
            console.log(`broj ${b3} je najmanji`);
        }
        else{
            console.log(`broj ${b2} je srendnji`);
            console.log(`broj ${b3} je najmanji`);
        }
    }
    else (b2 > b3)
    {
        console.log(`broj ${b1} je srednji broj`);
        if(b2 > b3)
        {
            console.log(`broj ${b2} je najveci`);
            console.log(`broj ${b3} je najmanji`);
        }
        else{
            console.log(`broj ${b2} je najmanji`);
            console.log(`broj ${b3} je najveci`);
        }
    }
}
