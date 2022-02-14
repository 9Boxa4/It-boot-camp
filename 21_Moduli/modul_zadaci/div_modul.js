import generateImage from "./general.js";

function generateDivImg(parent, src)
{
    let div = document.createElement(`div`);
    div.style.overflow = "hidden";
    let img = generateImage(src);
    img.style.float = "left";
    div.appendChild(img);
    parent.appendChild(div);
    return div;
}

function generateKutija (parent)
{
    let div = document.createElement(`div`);
    parent.appendChild(div);
    return div;
}

export {generateDivImg, generateKutija};