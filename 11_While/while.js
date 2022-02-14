// let i = 1;

// console.log(i); //1
// i++;
// console.log(i); //2
// i++;
// console.log(i); //3
// i++;
// console.log(i);//4
// i++;
// console.log(i);//5
// i++;

// let i = 1

// while (i <= 5) {
//   console.log(i)
//   i++
// }
// console.log(`Vrednost promenljive i je: ${i}`)

// i = 1

// while (i <= 20) {
//   console.log(i)
//   i++
// }

//////////////////////

// b) Svi brojevi u istom redu

let = rez = '';
i = 1;
while (i <= 20) {
  rez += +i + ' ';
  i++;
}
console.log(rez);
///////////

i = 20;

while (i >= 1) {
  console.log(i);
  i--;
}

////////////////////

i = 1;

while (i <= 20) 
{
  if (i % 2 == 0) 
  {
    console.log(i);
  }
  i++;
}

/////// Drugi nacin

i = 2;
while (i <= 20) 
{
  console.log(i);
  i += 2;
}

// document.body.innerHTML += `<p style = "color : red;"> 1. paragraf </p>`;
// document.body.innerHTML += `<p style = "color : purple;"> 2. paragraf </p>`;
// document.body.innerHTML += `<p style = "color : green;"> 3. paragraf </p>`;
// document.body.innerHTML += `<p style = "color : red;"> 4. paragraf </p>`;
// document.body.innerHTML += `<p style = "color : purple;"> 5. paragraf </p>`;
// document.body.innerHTML += `<p style = "color : green;"> 6. paragraf </p>`;

let n = 6;
i = 1;

while(i <= n)
{
  //doda se paragraf
  if(i % 3 == 1)
  {
    document.body.innerHTML += `<p style = "color : red;"> ${i} paragraf </p>`;
  }
  else if( i % 3 == 2)
  {
    document.body.innerHTML += `<p style = "color : purple;">  ${i} paragraf </p>`;
  }
  else
  {
    document.body.innerHTML += `<p style = "color : green;">  ${i} paragraf </p>`;
  }
  i++;
}

//Odrediti sumu brojeva od 1 do 100

 i = 1;
let suma = 0;
while(i <= 100)
{
  //Iskoristi i tako da se odredi suma
  suma += i;
  i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);

/*


------------------------
#iteracije |  i  | suma
------------------------
  0       | 1    | 0
  1       | 2   | 1
  2       | 3    | 3
  3       | 4    | 6
  4       | 5    | 10

  .....................
  ....................
  100     |101    |5050
  */



  // Odrediti sumu brojeva od 1 do n

  n = 18;
  i = 1;
  suma = 0;
  while(i <= n)
  {
    suma += i;
    i++;
  }

  console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`);

  //Odrediti proizvod brojeva od n do m

  n = 2 ;
  let m = 4;
  let proizvod = 1;

  i= n;
  while(i <= m)
{
  //Iskoristi i da se izracuna proizvod
  proizvod = proizvod * i;
  i++;
}  
console.log(`Proizvod brojeva od ${n} do ${m} jedna je ${proizvod}`);








// zadatak 10


n = 1;
m = 4;

i = n;
sum = 0;

while(i <= m)
{
  if(i % 2 == 0)
  {
    sum = sum + (i * i);
  }
  i++;

}
console.log(`Suma kvadrata parnih brojeva je ${sum}`);

//neparni

n = 11;
m = 45;
i = n;

while(i <= m)
{
  if(i % 2 == 1)
  {
    sum = sum + (i * i * i);
  }
  i++;
}
console.log(`Suma kubova neparnih brojeva je ${sum}`);

// Zadatak 11

let k = 50;
let delilac = k;
let saKoliko = 0;


while (delilac >= 0)
{
  if(k % delilac == 0)
  {  
    console.log(`Ovo je broj koji je deljiv sa k ${delilac}`);
    saKoliko++;
  }
  delilac--;
}

console.log(`Broj ${k} je deljiv sa ${saKoliko} brojeva!`);


//zadatak 12

// n = 11 ;
// while(11 >= 0)
// {
//   if( (n % 1 == 0 &&  n % n == 0))
//   {
//     console.log(`${n} je prost broj`);
//   }
//   else
//   {
//     console.log(`${n} je slozen broj`);
//   }

// }

