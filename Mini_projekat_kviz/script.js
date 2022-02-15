let kviz = document.getElementById(`kviz`);
let btnPosalji = document.getElementById(`submit`)



let pitanje1 = 
{
    tekst: `Koje godine je poceo drugi svetski rat?`,
    odgovori:[1945,1914,1939,1912],
    correctAnswer: function ()
    {
      return this.odgovori[2];
    }
}

let pitanje2 = 
{
    tekst: `Na kojoj hemisferi pretezno zive pingvini?`,
    odgovori:[`juznoj`,`severnoj`,`zapadnoj`,`istocnoj`],
    correctAnswer: function()
    {
       return this.odgovori[0]
    }
}
let pitanje3 = 
{
    tekst: `Koje godine je poceo prvi svetski rat?`,
    odgovori:[1914,1916,1939,1912],
    correctAnswer: function()
    {
       return this.odgovori[0]
    },
}
let pitanje4 = 
{
    tekst: `Kako se zvao ubica Franca Ferdinanda?`,
    odgovori:[`Djole`,`Zoki`,`Valter`,`Gavrilo`],
    correctAnswer: function ()
    {
        return this.odgovori[3]
    }
}
let pitanje5 = 
{
    tekst: `Koji se broj dobije mnozenjem 2 i 10?`,
    odgovori:[10,2,20,72],
    correctAnswer: function ()
    {
       return this.odgovori[2]
    }
}
let pitanje6 = 
{
    tekst: `Koje godine se zavrsio drugi svetski rat?`,
    odgovori:[1945,1914,1939,1912],
    correctAnswer: function ()
    {
       return this.odgovori[2]
    }
}
let pitanje7 = 
{
    tekst: `Koje godine je pocela francuska revolucija?`,
    odgovori:[2001,1804,1777,1789],
    correctAnswer: function ()
    {
       return this.odgovori[3]
    }
}
let pitanje8 = 
{
    tekst: `Koje godine je otkrivena Amerika?`,
    odgovori:[1505,1492,1315,1912],
    correctAnswer: function ()
    {
       return this.odgovori[2]
    }
}
let pitanje9 = 
{
    tekst: `Koji je prvi Njutnov zakon?`,
    odgovori:[`Inercije`,`Moci`,`Struje`,`Emocija`],
    correctAnswer: function ()
    {
       return this.odgovori[0]
    }
}
let pitanje10 = 
{
    tekst: `Koje su bile zadnje Cezarove reci?`,
    odgovori:[`Cao svima`,`Zar i ti sine Brute`,`Kocka je bacena`,`To je sto je`],
    correctAnswer: function ()
    {
       return this.odgovori[1]
    }
};


let pitanja = [pitanje1,pitanje2,pitanje3,pitanje4,pitanje5,pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];
 pitanja.sort(()=> 0.5 - Math.random())
// console.log(pitanja);


let ispis = (pitanja) =>
{
    let br=0;
    let sastav = `<div>`;
    for(let i = 0; i< 5; i++)
    {
        br++;
        let correct = pitanja[i].correctAnswer();
        let counter = 0;
        sastav += `<h3>${pitanja[i].tekst}</h3>`;
        for(let j=0; j< pitanja[i].odgovori.length; j++)
        {
            
            counter ++;
            if(pitanja[i].odgovori[j] == correct )
            {
                sastav += `<input type ="radio" class="klasa" id="k${br}${counter}" name ="${pitanja[i].tekst}" required>`;
                sastav += `<label for="k${br}${counter}">${pitanja[i].odgovori[j]} </label> <br>`;
            }
            else
            {
                sastav += `<input type ="radio"  id="k${br}${counter}" name ="${pitanja[i].tekst}" required>`;
                sastav += `<label for="k${br}${counter}">${pitanja[i].odgovori[j]} </label> <br>`;
            }
           
        }
    }

   
    sastav += `</div>`;
    kviz.innerHTML += sastav;
}
ispis(pitanja);
let tacnaKlasa = document.querySelectorAll(`.klasa`)
btnPosalji.onclick = ('click', ()=>
{
    
  
    for(let i=0; i<tacnaKlasa.length; i++)
    {
        if(tacnaKlasa[i].checked)
        {
            document.body.innerHTML += `<span style = "color: green">${i+1} Correct! </span><br>`
        }
        else
        {
            document.body.innerHTML += `<span style = "color: red">${i+1} Wrong! </span><br>`
        }
    }
})


let btnReset = document.getElementById(`reset`);

btnReset.addEventListener(`click`,() =>
{
    location.reload();
})







