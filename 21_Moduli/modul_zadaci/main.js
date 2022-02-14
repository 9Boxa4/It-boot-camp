// import { generateList,generateItem as generateListItem} from "./list.js";
// import {generateTable,generateTableRow, generateItem as generateTableItem} from "./table.js"

// let list = generateList(document.body);
// generateListItem(list, "../galerija/1.jpg");
// generateListItem(list, "../galerija/2.jpg");
// generateListItem(list, "../galerija/3.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "../galerija/1.jpg" );
// generateTableItem(tr, "../galerija/2.jpg" );
// generateTableItem(tr, "../galerija/3.jpg" );


// import * as List from "./list.js";
// import * as Table from "./table.js";


// console.log(List);
// let list = List.generateList(document.body);
// List.generateItem(list,"../galerija/1.jpg" );
// List.generateItem(list,"../galerija/2.jpg" );
// List.generateItem(list,"../galerija/3.jpg" );


// let table = Table.generateTable(document.body);
// let tr = Table.generateTableRow(table);
// Table.generateItem(tr,"../galerija/1.jpg");
// Table.generateItem(tr,"../galerija/2.jpg");
// Table.generateItem(tr,"../galerija/3.jpg");


import {generateDivImg,generateKutija} from "./div_modul.js";


let kutija = generateKutija(document.body);
generateDivImg(kutija, "../galerija/1.jpg");
generateDivImg(kutija, "../galerija/2.jpg");
generateDivImg(kutija, "../galerija/3.jpg");

// let ispisDiv = generateDivImg()
