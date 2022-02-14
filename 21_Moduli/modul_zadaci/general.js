function generateImage(src)
{
    let img = document.createElement(`img`);
    img.src = `${src}`;
    // document.body.appendChild(slika);
    img.style.width = "200px"
    return img;
}

export default generateImage;