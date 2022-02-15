//Zadatak 9

let a = 5;
let b = 15;
let vrednost =0;
let br=0;

for (let i=a; i<=b; i++)
{
    vrednost += i* 2;
    br++;
}

console.log(vrednost);
console.log(`Broj obrtaja je bio ${br} puta`);

//Zadatak 10

let n = 5;
let m = 10;
let suma = 0;

for(i = n; i<= m; i++)
{
    suma += i;
}
console.log(`Ukupna suma brojeva od ${n} do ${m} je ${suma}`);

//zadatak 11

suma = 0;

for(i=n; i<= m; i++)
{
    suma += i**2
}

console.log(`Ukupna suma brojeva kvadrata od ${n} do ${m} je ${suma}`);

//zadatak 12

n = 20;
m = 100;
let proizvod = 1;
br = 0;

for(i=n; i<= m; i++)
{
    if(i%11 == 0)
    {
        proizvod *= i;
        br++;
    }
}

console.log(`Uradjeno je mnozenje ${br} puta`);
console.log(`Proizvod brojeva deljivih sa 11 od ${n} do ${m} je ${proizvod}`);


// zadatak 13

n = -2;
m = 5;

br1 =0;
br2=0;

for (i=n; i<=m; i++)
{
    if(i<0)
    {
        br1++;
    }
    else if(i>0)
    {
        br2++;
    }
}

console.log(`Negativnih brojeva imamo ${br1}, a pozitivnih ${br2}`);

// 14 zadatak

n = 5;
m = 150;

br =0;


for(i=n; i <= m; i++)
{
    if(i % 3 ==0 || i % 5 == 0)
    {
        br++; 
    }
}
console.log(`Imamo ${br} brojeva koji su deljivi sa 3 ili 5 od brojeva ${n} do ${m} `);

// 15 zadatak

n = 5;
m = 15;
a= 3;
br=0;

proizvod = 1;

for (i=n; i<=m ; i++)
{
    if(i%a == 0)
    {
        proizvod *= i;
        br++;
    }
}

console.log(`Proizvod brojeva od ${n} i ${m} koji su deljivi sa ${a} je ${proizvod} a ima ih ${br}`);


// 16 zadatak

n = 15;

br= 0;

for(i=1; i <= n; i++)
{
    if(i%3 == 0 && i%2 !=0 && n%i == 0)
    {
        console.log(i);
        br++;
    } 
    
}

console.log(` ${br} Broja koji su deljivi za unet broj ${n} delioci koji su deljivi sa 3 i neparni su broja`);

//zadatak 17

a = 15;
b = a;

let zbir = 0;

while (b) {
    zbir += b%10;
    b=Math.floor(b/10);
}
console.log(zbir);

document.body.innerHTML += `<p>Zbir cifara unetog ${a} broja  je ${zbir}</p>`

// 18 zadatak

let lista = `<ul>`

for(i=1; i<=10; i++)
{
    if(i % 3 == 0)
    {
        lista +=
        `
            <ul>
                <li style = "color : purple">Element${i}</li>
            </ul>
        `;
    }
    else
    {
        lista += `<li>Element${i}</li>`;
    }
}

lista += `</ul>`;
document.body.innerHTML += lista;


//19 zadatak

let container = `<div class= "container">`;

for(let red=1, i=0; red <=8 ; red++)
{
    if(red % 2 != 0 )
    {
        container += `<div class="par"><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span></div>`;
    }
    else if(red % 2 == 0  )
    {
        container += `<div class="nepar"> <span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span></div>`;
    }
}

container += `</div>`;
document.body.innerHTML += container;
