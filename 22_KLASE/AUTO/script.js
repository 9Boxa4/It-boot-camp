import auto from "./auto.js";
import film from "./film.js";


let a1 = new auto(`citroen C4`, `crna`, false, 5); 
//nakon ovoga, a1 je objekat koji ima sledeca polja
// a1_marka (vrednost ovog polja je "Citroen C4")
//a1.boja(vrednost ovog polja je "crna");
//a1_imaKrov( vrednost ovog polja je false)

console.log(a1);
console.log(typeof a1);

let a2 = new auto('Skoda octavia', `plava`, true, 4);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new auto(`fiat punto`, 'bela', false);

a3.brojVrata = 5;
console.log(a3);

let a4 = new auto (`   `, `zelena`, false);
// a4._imaKrov = true;
console.log(a4);

a1.sviraj();
a2.sviraj();
a3.sviraj();
// a4.sviraj();

a1.vozi(50);
a3.vozi(200);
a4.vozi(3);

// u klasi pisemo polja i metode
// sva polja klase se definisu u constructor
// mozemo dodavati proizvoljne metode
// svi objekti klase imace polja i metode navedene u klasi


a1._brojVrata = 4; // poljima se pristupa bez zagrada
a1.sviraj(); // metode imaju zagrade, a izmedju zagrada se navode parametri
// a1._marka = "    Audi A4"; // JS ne ispravlja jer nije u constructoru
a1.marka= "    Audi A4"; //setter marka
// a1.postaviMarku("     Audi A4")
console.log(a1.marka); // getter marka
console.log(a1.dohvatiMarku());
console.log(a1);

let a5= new auto(`    Audi A4`, `plava`, false, 3); // u constructoru trim
console.log(a5);

a3.stampaj()


/////////////////////////////////////////////////////////////////////////

