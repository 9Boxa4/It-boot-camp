// zadatak 4

function maks2(a,b)
{
    console.log(`Izmedju brojeva ${a} i ${b} broj koji je veci je`);
    if(a>=b)
    {
        return a;
    }
    else if(b>=a)
    {
        return b;
    }
    else
    {
        return 'Greska u zapisu';
    }
}

let veciB = maks2(82,82);
console.log(veciB);

function maks4(a,b,c,d)
{
    console.log(`Od brojeva ${a}, ${b}, ${c}, ${d} najveci broj je`);
    if(a>=b && a>=c && a>=d)
    {
        return a;
    }
    else if(b>=a && b>= c && b>= d)
    {
        return b;
    }
    else if(c>= a && c>=b && c>= d)
    {
        return c;
    }
    else if(d>=a && d>=b && d>=c)
    {
        return d;
    }
    else
    {
        return 'Greska';
    }
}

let veciOd4= maks4(10,1,1,7);
console.log(veciOd4);

//zadatak 5

function prikazSlike(url)
{
    document.body.innerHTML += `<img src="${url}" width = 200>`;
}

let slika1= prikazSlike(`https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4OTA4MzI0ODc4NjkwMDAw/christmas-tree-gettyimages-1072744106.jpg"`);

//zadatak 6
function bojiText(style,tekst)
{
    document.body.innerHTML +=` <p style="color:${style}">Ja volim ovu boju ${tekst}</p>`;
}

let Tekst = bojiText('green', 'zelenu');
Tekst = bojiText(`blue`, `A ja volim plavu boju`);

// zadatak 7


// function sedmiDan(n)
// {
//     console.log(`Dan je ${n}`);
//     if(n == 0)
//     {
//         console.log(`Nedelja`);
//     }
//     else if(n == 1)
//     {
//         console.log(`Ponedeljak`);
//     }
//     else if(n == 2)
//     {
//         console.log(`Utorak`);
//     }
//     else if(n == 3)
//     {
//         console.log(`Sreda`);
//     }
//     else if(n == 4)
//     {
//         console.log(`Cetvrtak`);
//     }
//     else if(n == 5)
//     {
//         console.log(`Petak`);
//     }
//     else if(n == 6)
//     {
//         console.log(`Ssubota`);
//     }
//     else if(n % 7== 0)
//     {
//         console.log(`Nedelja`);
//     }
//     else
//     {
//         console.log(`Greska`);
//     }
// }



// let dan = sedmiDan(2);

// zadatak 8

function deljivSaTri(n,m)
{
    let br=0;
    for(let i=n; i<= m; i++)
    {
        if(i%3==0)
        {
            console.log(i);
            br++;
        }
    }
    console.log(`Ima brojeva ${br}`);
}


let interval = deljivSaTri(2,10);


// zadatal 9

function sumiranje(n,m)
{
    console.log(`Suma brojeva od ${n} do ${m} je`);
    let sum =0;
    for(let i=n; i<=m; i++)
    {
        sum += i;
        
    }
    return sum;
}

let suma = sumiranje(1,10);
console.log( suma);

// zadatak 10

function mnozi(n,m)
{
    console.log(`Proizvod brojeva od ${n} do ${m} je`);
    let proizvod=1;
    for(i=n; i<=m;i++)
    {
        proizvod*= i;
    }
    return proizvod;
}

let proizvod = mnozi(2,5);
console.log(proizvod);

