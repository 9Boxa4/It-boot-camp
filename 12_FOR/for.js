// let a = 1;

// while(a <= 5)
// {
//     console.log(`Na redu je broj ${a}`);
//     a++;
// }

// for(let i=1; i<=5; i++)
// {
//     console.log(`For petlja iteracija  ${i}`);
// }
// //////////////////////////////

// //Ispisati brojeve od 20 do 1




// for(i=20; i>= 1; i--)
// {
//     console.log(`${i}`);
// }



// console.log(`Zadatak 3 ispisati brojeve deljive sa dva `);
// // prvi nacin
// for(i=1; i<= 20; i++)
// {
//     if(i % 2 == 0)
//     {
//     console.log(i);
//     }
// }

// //Drugi nacin

// for(i=2; i<=20; i+=2 )
// {
//     console.log(i);
// }


// for(let a= 1,  k=5; a<=k;a++)
// {
//     console.log(a);
// }


// console.log(`5 Zadatak. odrediti sumu brojeva od 1 do 5
// `);


// // i= 1;
// // let suma = 0;
// let suma= 0;
// for(i=1, n=100; i<=n; i++)
// {
//     suma += i;//suma = suma + i;
// }
// console.log(suma);

// ////////////////////

// console.log(`7 Zadatak odrediti proizvod brojeva od n do m`);

// n = 2;
// let m= 6;
// let proizvod = 1;

// for(i=n; i<=6; i++)
// {
//     proizvod *= i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);



// for (let i= 1; i<=3; i++)
// {
//     document.body.innerHTML += `<img src="slike/slika${i}.jpg">`
// }

//11 zadatak
// let br= 0;
// for (let i=5; i<= 150; i++)
// {
//     if(i % 13 == 0)
//     {
//         br++;
//     }
  
// }
// console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);


//12 zadatak
//  



//15 zadatak
//Poslednja cifra se odredjuje po modulu %10 , npr 426 % 10 = 6



// n = 1;
// m = 57;
// sum = 0;
// br= 0;


// for(i=n; i<=m; i++)
// {
//     if(i % 10 == 4)
//     {
//     sum += i;
//     br++;
//         console.log(` ${i}`);
//     }
// }
// console.log(sum);
// console.log(br);








// 16 zadatak

// let n= 5;
// let m = 10;
// let a = 3;
// let suma=0;

// for(i=n; i<=m; i++)
// {
//     if(i % a != 0)
//     {
//         suma+=i;
//         console.log(i); // sumu=0; suma = 5; suma = 12; suma =20; suma =30;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

////////////////


//18 zadatak
//FOR petlja
// let k= 7;
// let br = 0;


// for(let i=1; i<= k;i++)
// {
//     if(k % i == 0)
//     {
//         console.log(i);
//         br++;
//     }
// }
// console.log(`Broj ${k} je deljiv je sa ${br} broja`);

// // //While petlja

// k = 11;
// br= 0;
// i= 1;

// while(i<= k )
// {
//     if(k%i == 0)
//     {
//         br++;      
//     }
//     i++
// }
// console.log(`Broj ${k} je deljiv je sa ${br} broja`);


//19 zadatak
//Nadovezujemo na prethodni zadatak

// if(br == 1)
// {
//     console.log(`Broj nije ni prost ni slozen`);
// }
// else if(br == 2)
// {
//     console.log(`Broj je prost`);
// }
// else
// {
//     console.log(`Broj je slozen`);
// }


// document.body.innerHTML += 
// `<table border=1;>
//    <tr>
//         <td>Tekst</td>    
//         <td>Tekst</td>  
//    </tr>
//    <tr>
//         <td>Tekst</td>    
//         <td>Tekst</td> 
//    </tr>

//    <tr>
//         <td>Tekst</td>    
//         <td>Tekst</td> 
//    </tr>

//    <tr>
//         <td>Tekst</td>    
//         <td>Tekst</td> 
//    </tr>

//    <tr>
//         <td>Tekst</td>    
//         <td>Tekst</td> 
//    </tr>

//    <tr>
//         <td>Tekst</td>    
//         <td>Tekst</td> 
//    </tr>
      
// </table>`

// let tablica = document.body.innerHTML;

// for(let i=tablica; i <=8; i++ )
// {
//     if(i % 2 == 0)
//     {
//         document.body.innerHTML += 
//     }
// }


// let tabela = `<table border="1">`
// for(let red= 1; red<=6; red++)
// {
//     if(red%2 == 0)
//     {    
//     tabela +=
//     `
//     <tr class = "roze">
//         <td> Tekst</td>
//         <td> Tekst</td>
//     </tr>
//     `;
//     }
//     else
//     {
//         tabela +=
//     `
//     <tr>
//         <td> Tekst</td>
//         <td> Tekst</td>
//     </tr>
//     `;
//     }
// }
// tabela += `</table>`;
// document.body.innerHTML += tabela;



// let tabela = `<table border = 1>`

// for(red=1; red <= 6; red++)
// {
//     if(red % 2 == 0)
//     {
//         tabela +=
//         `
//         <tr class = "roze">
//             <td> Tekst</td>
//             <td> Tekst</td>
//         </tr>
//         `;
//     }
//     else
//     {
//         tabela +=
//         `
//         <tr>
//             <td> Tekst</td>
//             <td> Tekst</td>
//         </tr>
//         `;
//     }
// }

// tabela += `</table>`;
// document.body.innerHTML += tabela;


// let lista = `<ul>`


// for(let red=1; red <= 10; red++)
// {
//     if(red % 3 == 0)
//     {
//         lista += `
//         <ul>
//             <li style="color:purple"> Element${red} </li>
//         </ul>
//         `;
//     }
//     else
//     {
//         lista += `<li>
//         Element ${red}
//         </li>
//         `;
//     }
// }
// lista += `</ul>`;
// document.body.innerHTML += lista;


// let container = `<div>`
// for(let element=1; element <= 64; element++)
// {
//     if(element % 8 == 0)
//     {
//         container +=
//         `<span class ="okvir">${element}</span><br>`;
//     }
//     else
//     {   
//     container +=
//      `<span  class ="okvir">${element}</span>`;
//     }
// }
// container += `</div>`
// document.body.innerHTML += container;




// let container = `<div>`
// for(let element=1; element <= 64; element++)
// {
//     if(element % 8 == 0)
//     {
//         container +=
//         `<span class ="okvir">${element}</span><br>`;
//     }
//     else
//     {   
//     container +=
//      `<span  class ="okvir">${element}</span>`;
//     }
    

// }
// container += `</div>`
// document.body.innerHTML += container;

let container = `<div class= "container">`;

for(let div=1, i=0; div <=8 ; div++ )
{
    if(div % 2 != 0  )
    {
        container += `<div class="par"><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span></div>`;
    }
    else if(div % 2 == 0  )
    {
        container += `<div class="nepar"> <span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span><span>${++i}</span></div>`;
    }
}

container += `</div>`;
document.body.innerHTML += container;
