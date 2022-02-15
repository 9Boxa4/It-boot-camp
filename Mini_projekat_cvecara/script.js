let ruzeInput = document.getElementById(`ruze`);
let ljiljaniInput = document.getElementById(`ljiljani`);
let gerberiInput = document.getElementById(`gerberi`);

let porudzbina = document.getElementById(`ispis1`);
let porudzbina2 = document.getElementById(`ispis2`);
let porudzbina3 = document.getElementById(`ispis3`);
// let ispisCvece = document.getElementById(`ispisCvece`);

let btnIzracunaj = document.getElementById(`izracunaj`);
let slikaRuza;
let slikaLjiljana;
let slikaGerbera;

let bombonjera = document.getElementById(`bombonjera`);
let cokolada = document.getElementById(`cokolada`);
let sampanjac = document.getElementById(`sampanjac`);

let poklonBomb = document.getElementById(`bomb`);
let poklonCoko = document.getElementById(`coko`);
let poklonSampanjac = document.getElementById(`samp`);

let kes = document.getElementById(`kes`);
let kartica = document.getElementById(`kartica`);

let popustParagraf = document.getElementById(`popust`);
let finalParagraf = document.getElementById(`final`);

let finalnaCena = 0;
let poklonCena = 0;
let cenaPopust = 0;

btnIzracunaj.onclick = (e) => {
  e.preventDefault();

  porudzbina.innerHTML = " ";
  porudzbina2.innerHTML = " ";
  porudzbina3.innerHTML = " ";

  let ruzeInputValue = parseInt(ruzeInput.value || 0);

  let ljiljaniInputValue = parseInt(ljiljaniInput.value || 0);
  let gerberiInputValue = parseInt(gerberiInput.value || 0);

  while (finalParagraf.firstChild) {
    finalParagraf.removeChild(finalParagraf.lastChild);
  }
  while (popustParagraf.firstChild) {
    popustParagraf.removeChild(popustParagraf.lastChild);
  }

  for (let i = 0; i < ruzeInputValue; i++) {
    slikaRuza = document.createElement(`img`);
    slikaRuza.src = `https://www.onlygfx.com/wp-content/uploads/2016/05/red-rose-4-1.png`;
    slikaRuza.width = `50`;
    porudzbina.appendChild(slikaRuza);
  }

  for (let i = 0; i < ljiljaniInputValue; i++) {
    slikaLjiljana = document.createElement(`img`);
    slikaLjiljana.src = `https://toppng.com/uploads/preview/white-lily-11546672427oi6ys9pj2c.png`;
    slikaLjiljana.width = `50`;
    porudzbina2.appendChild(slikaLjiljana);
  }

  for (let i = 0; i < gerberiInputValue; i++) {
    slikaGerbera = document.createElement(`img`);
    slikaGerbera.src = `https://icon2.cleanpng.com/20180203/egw/kisspng-transvaal-daisy-flower-common-daisy-clip-art-gerbera-png-hd-5a7655f2c606e9.0401601915177046908111.jpg`;
    slikaGerbera.width = `50`;
    porudzbina3.appendChild(slikaGerbera);
  }

  let poklonCena1 = 0;
  let poklonCena2 = 0;
  let poklonCena3 = 0;
 

  if (bombonjera.checked == true) {
    poklonBomb.innerHTML = `+ bombonjera `;
    poklonCena1 = 500;
  } else {
    poklonBomb.innerHTML = ` `;
  }

  if (cokolada.checked == true) {
    poklonCoko.innerHTML = `+ cokolada`;
    poklonCena2 = 500;
  } else {
    poklonCoko.innerHTML = ` `;
  }

  if (sampanjac.checked == true) {
    poklonSampanjac.innerHTML = `+ sampanjac`;
    poklonCena3 = 500;
  } else {
    poklonSampanjac.innerHTML = ` `;
  }
  finalnaCena = ruzeInputValue * 150 + ljiljaniInputValue * 120 + gerberiInputValue * 70 + poklonCena1 + poklonCena2 + poklonCena3;
  // finalnaCena += poklonCena;
  // if(kartica.checked == true && finalnaCena > 2000)
  // {
  //      cenaPopust = finalnaCena * 0.9;
  //     popustParagraf.innerHTML = `cena sa 10% popusta je ${cenaPopust}`;
  // }
  // else
  // {

  //     finalParagraf.innerHTML = `cena vase kupovine bez popusta  je ${finalnaCena}`;
  // }

  let placanje = document.querySelector(`input[name="placanje"]:checked`);
  let placanjeValue = placanje.value;

  if (placanjeValue == `kartica` && finalnaCena > 2000) {
    cenaPopust = finalnaCena * 0.9;
    popustParagraf.innerHTML = `cena sa 10% popusta je ${cenaPopust}`;
    finalParagraf.innerHTML = `cena vase kupovine bez popusta je ${finalnaCena}`;
  } else {
    finalParagraf.innerHTML = `cena vase kupovine bez popusta  je ${finalnaCena}`;
  }
};

//checkboxevi su trebali da budu na jedan klick direktno u checkbox u html funkcija
// let checkboxevi = ()=>
// {
//     let chb = document.getElementsByClassName(`chb`);

//     if(chb[0].checked)
//     {
//         poklonBomb.innerHTML = `+bombonjera `;
//     }
//     if(!chb[0].checked)
//     {
//         poklonBomb.innerHTML = ` `;

//     }

//     if(chb[1].checked)
//     {
//         poklonCoko.innerHTML = `+Cokolada `;

//     }
//     if(!chb[1].checked)
//     {
//         poklonCoko.innerHTML = ` `;

//     }
//     if(chb[2].checked)
//     {
//         poklonSampanjac.innerHTML = `+Sampanjac `;
//     }
//     if(!chb[2].checked)
//     {
//         poklonSampanjac.innerHTML = ` `;
//     }
//     console.log(poklonCena);

// }
