// import {generateImage} from "./general.js";
import generateImage from "./general.js";

function generateTable(parent)
{
    let tabela = document.createElement(`table`);
    tabela.style.border = "0";
    parent.appendChild(tabela);
    return tabela;
}


function generateTableRow (parent)
{
    let tr = document.createElement(`tr`)
    parent.appendChild(tr);
    return tr;
}

function generateItem(parent, src)
{
    let td = document.createElement(`td`);
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}

export {generateTable,generateTableRow, generateItem};