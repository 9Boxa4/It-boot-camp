let s= 15;
let m= 21;

let odPonoci = s*60 + m ;
console.log ('Od ponoci je proslo '  + odPonoci +  " minuta");

let doPonoci= 24 * 60 - odPonoci;
// let doPonoci = (24 - s) * 60 - m;
console.log('Do ponoci je ostalo: ' + doPonoci + ' minuta');

//zadatak 2

let minOdPonoci = 921; // minOdPonoci = ___ * 60 + minSada

// minOdPonoci - minSada = ____ * 60
//(minOdPonoci - minSada) / 60 = __

let minSada = minOdPonoci % 60;
let satSada= (minOdPonoci - minSada) / 60;
console.log("Sada je" + satSada + ":" + minSada);


//Drugi nacin
// console.log(minOdPonoci / 60); -deljenje vraca tacan broj
// console.log(Math.floor(minOdPonoci/60)); - ceo broj manji ili jednak od rez
// console.log(Math.ceil(minOdPonoci / 60)); ceo veci broj ili jednak od rez
// console.log(Math.round(minOdPonoci/ 60)); ceo broj rezultat zaokruzivanja

let satSada2 = Math.floor(minOdPonoci/ 60);
let minSada2 = minOdPonoci % 60;
console.log("sada je " + satSada2+ ":" + minSada2);

// Zadatak 3

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica-cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + ' Dinara');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log('Danasnji datum je ' + today);

today =  dd + '/' + mm + '/' + yyyy;
console.log('Druga verzija danasnjeg datuma je ' + today);

// let e = 50;
// let kurs = 117;
// let din = e* kurs;
// console.log("Razmenom iz evra u dinare smo dobili " + din + " din");

// kurs = 118;
//  e= din / kurs;

//  console.log(Math.floor(e));
//  console.log("Razmenom iz dinara u evre smo dobili " + e + " evra");

let e = 200;
let kursEvri = 117.5782;

let evriUDinare = e * kursEvri;
console.log('Imamo ' + evriUDinare + 'dinara nakon razmene');

let novacDinari = 10000;
let dinariUEvre = novacDinari / kursEvri;
console.log('Imamo ' + dinariUEvre  + ' evra nakon razmene');


// zadatak 7

let kursDolari = 104.7281;

 let k1 = e * kursEvri;
 let k2 = k1 / kursDolari;

 console.log('Imamo' + k2 + ' dikara nakon razmene');

 let novacDolari = 200;
 
 let k3 = novacDolari *kursDolari /kursEvri;

 console.log('Imamo ' + k3 + ' evra nakon razmene');



//trenutno vreme i datum

let datum = new Date(); //datum postaje objekat koji sadrzi info. o trenutnom datumu i vremenu


let godina = datum.getFullYear();
let mesec = datum.getMonth() +1;
let datumUMesecu = datum.getDate();
let danUNedelji = datum.getDay();
console.log( 'Danas je ' + datumUMesecu + "." + mesec + '.' + godina );
console.log("danas je " + danUNedelji + ' dan u nedelji');








