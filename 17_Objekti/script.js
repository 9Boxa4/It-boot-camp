


let blog1= 
{
    title:"HTML",
    content:"Ovo je blog o osnovnih HTML tagovima",
    author : "Jelena"
};

console.log(blog1);
console.log(typeof blog1);

// ipsis propertija prvi nacin
console.log(blog1.title);
// drugi nacin ispisa
console.log(blog1[`title`]);

// izmene propertija na dva nacina

blog1.title = 'osnove HTML-a';
console.log(blog1);
// drugi nacin
blog1[`author`] = `Jelena Matejic`; // ako pogresis ime propertija, dodaje kao novi property
console.log(blog1);


///////////////////////////////////////////////////////////////

let user =
{
    username:'JM',
    age:27,
    blogs:[`If naredba grananja`,`While petlja`, `For petlja`],
    login: function () 
    {
        console.log(`ulogovani ste`); // kada je funkcija u propertiju, to je metod, i nalazi se u objektu
    },
    logout: function()
    {
        console.log(`izlogovani ste`);
    },
    logBlogs: function()
    {
        console.log(this);
        console.log(this.blogs); // kada se pristupa propertiju koji je unutar
        this.blogs.forEach(blog =>
            {
                console.log(blog);
            });
    }

};



console.log(user);
console.log(user.blogs);
let nasloviBlogova = user.blogs;

for(let i=0; i<nasloviBlogova.length; i++)
{
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`
}

for(let i=0; i<user.blogs.length; i++)
{
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`
}



// poziv metoda

user.login();
user.login();
user.logout();


//poziv metoda koji u sebi sadrzi poziv nekog propertija

user.logBlogs();


//this
console.log(this); // izbacuje globalni objekat sam WINDOWS


/////////////////////////////////////////////////////////
//  `               zadaci                          //


let dan = 
{
    datum: `2021/12/24`,
    Kisa: false,
    Sunce: true,
    Oblacno: false,
    VrednostiTemp: [0,1,1,4,5,3,5],
    ProsTemp: function ()
    {
        let sum=0;
        let br=0;
        this.VrednostiTemp.forEach(temp=>
            {
                sum += temp;
                br++;
            })
            return br=!0 ? sum/br : 0;
    },
    NatPtemp: function()
    {
        let sr= this.ProsTemp();
        let br=0;
        this.VrednostiTemp.forEach(el=>
            {
                if(el>sr)
                {
                    br++;
                }
            });
            return br;
    },
    maxTemp: function()
    {
        let br=0;
        let max=this.VrednostiTemp[0];
        this.VrednostiTemp.forEach(el=>
            {
                if(max<el)
                {
                    max=el;
                }
            });
            this.VrednostiTemp.forEach(el=>
                {
                    if(max==el)
                    {
                        br++
                    };
                });
                return `imamo ` + br + ` sa max temp`;
    },
    izmedju: function (a,b)
    {
        let br=0;
        this.VrednostiTemp.forEach(el=>
            {
                if(el>a && el<b)
                {
                    br++;
                }
            });
            return br;
    },
    prosekD : function()
    {
        return (this.VrednostiTemp().length/2) < this.NatPtemp();
    },
    //6. // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function()
    {
        // prvi nacin
        for(let i=0; i<this.VrednostiTemp.length; i++)
            {
                if(this.VrednostiTemp[i]>0)
                {
                    return false
                }
            };
            return true;
    },

    
}
   



console.log(dan.ProsTemp());
//Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.NatPtemp());
//Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maxTemp());
console.log(dan.izmedju(dan.VrednostiTemp[0],dan.VrednostiTemp[4]));
// console.log(dan.boljeVreme());
// console.log(prosekD());

//6.log
console.log(dan.leden());




//4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).



//prima 2 parametra - dve temperature
// potrebno da metoda vrati BROJ MERENJA - br cija je temp izmedju dve zadate, ne ukljucujuci te dve

//Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 

//prosek
// vecina dana=  temp > proseka - el>proseka - broj
// vecina dana = iznad 50% dana - 


// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

