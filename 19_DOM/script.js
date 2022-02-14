console.log(document);
console.log(typeof document);
console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById('p1');
console.log(p1);
console.log(typeof p1);


let cont = document.getElementsByClassName('container');
console.log(cont);
console.log(typeof cont);


for(let i=0; i<cont.length; i++)
{
    console.log(cont[i]);
};

let contNiz = Array.from(cont);
contNiz.forEach(elem => {           // ne moze preko forEach
    console.log(elem);
});

let paragrafi = document.getElementsByTagName(`p`);

for(let i=0; i<paragrafi.length; i++)
{
    console.log(paragrafi[i]);
};

let linkovi = document.getElementsByName(`link`);
for(let i=0; i<linkovi.length; i++)
{
    console.log(linkovi[i]);
};

p1 = document.querySelector(`#p1`);
console.log(p1);

cont = document.querySelector(`.container`);
console.log(cont);

cont= document.querySelectorAll(`.container`);
console.log(cont);

for(let i=0; i<cont.length; i++)
{
    console.log(cont[i]);
};

cont.forEach(el=>
    {
        console.log(el);
    });

    paragrafi = document.querySelectorAll('p');
    console.log(paragrafi);

    linkovi = document.querySelectorAll(`[name='link']`);
    console.log(linkovi);

    ///////////////////////////////////////////////////////////////////
    //                      zadaci                              //


    // let errorDiv= document.querySelector(`.error`);

    let errorDiv = document.getElementsByClassName(`error`);
    console.log(errorDiv);
    console.log(typeof errorDiv);
    console.log(errorDiv[0]);
    console.log(errorDiv[errorDiv.length -1]);





let zadnjiRed = document.querySelector(`table tr:last-child`).style=`color:blue`;
console.log(zadnjiRed);
zadnjiRed +=`background: red`;


p1.innerHTML += "Promenjen<span> tekst</span> paragrafa";


let sviLinkovi = document.querySelectorAll('a');

sviLinkovi.forEach(link=>
    {
        //HTML atributi
        link.href ="https://www.google.com";
        link.target= `_blank`;
          //css stilovi
        // link.style.color ="green";
        // link.style.textDecoration ='None';

        link.style = `color:green;text-decoration=none`;
        //preko metode
        link.setAttribute('name', `link2`); // isto kao i link.name = `link2` / 

    });

    console.log(`//////////////////////////////////////////////`);

   paragrafi = document.querySelectorAll(`p`);
    paragrafi.forEach(p => {
        p.innerHTML +=` VAZNO!!!`
    });


 let divError= document.querySelectorAll(`div.error`);


divError.forEach(divErrorEl=>
    {
        divErrorEl.innerHTML += "<h1>Greska!</h1>";
    });

    // for(let i=0; i<paragrafi.length; i++)
    // {
    //     paragrafi[i].innerHTML += i**2;
    // }

    paragrafi.forEach((el,i)=>
        {
            el.innerHTML += (i+1)**2;
        })

console.log(`//////////////////////////////////////////////////////`);

// let pas = getElementById(`pas`);

let sveSlike = document.querySelectorAll(`img`);

sveSlike.forEach(slika=>
    {
        slika.alt += 'alternativni tekst';
    });


// paragrafi = document.querySelectorAll(`p`);

paragrafi.forEach(p=>
    {
        p.style.color='purple';
    });

paragrafi.forEach((p,i)=>
    {
        if(i%2 == 0)
        {
            p.style.backgroundColor = 'green';
        }
        else
        {
            p.style.backgroundColor ='red';
        };
    });
console.log(`////////////////////////////////////////////////////`);

sviLinkovi.forEach((link,i)=>
    {
        link.style.padding='5px';
        link.style.fontSize=`8px`;
        link.style.textDecoration='none';
        if(i%2 == 0)
        {
            link.style.backgroundColor = 'Green';
            link.style.color = 'purple';
        }
        else
        {
            link.style.backgroundColor = 'blue';
            link.style.color = 'white';
        }
    });
///////////////////////////////////////////////////////////////////



// sveSlike.forEach((img,i)=>
//     {
//         if(img.length[img.length-3] == 'p')
//         {
//             img.style.border= '2px red solid';
//             img.style.border= ' red ';
//             img.style.border= ' solid';

//         };
//     })


// sveSlike.forEach(s=>
//     {
//         console.log(s);
//         console.log(s.src);
//     });

//     if(s,src.indexOf(`.png`))

sviLinkovi.forEach(link=>
    {
        if(link.target == '_blank')
        {
            link.target = '_top'
        }
        else 
        {
            link.target = '_blank'
        }
    });




// let niz = ['Marko','Zarko','Pera', `Samir`];

// let targetiranje = niz=>
// {
//     niz.forEach(ime => 
//         {
//             ime.innerHTML += `<a href="#" >${ime}</a>`;
    
//             // if(ime.length.charAt(0)== 'S')
//             // {
//             //     ime.target = '_blank'
//             // }
            
//         });
// };


// targetiranje(niz);


let imena = ['Stefan',`Marija`, `Nikola`, `Bogdan`, `Vladan`];

imena.forEach(ime=>
    {
        if(ime.startsWith('S')) // (ime[0] == 'S')
        {
            document.body.innerHTML += `<a href="#" target='_blank'>${ime} </a>`;
        }
        else
        {
            document.body.innerHTML += `<a href="#">${ime} </a>`;
        }
    });
    //U listi kao stavke liste. Naizmenicno stavke liste obojiti sa dve razlicite boje

    let listaString ="<ul>";
    document.body.innerHTML += "<ul>";
    imena.forEach((ime,i)=>
        {
            if(i%2 == 1)
            {
                listaString += `<li style="color: red">${ime}</li>`;
            }
            else
            {listaString += `<li style="color: blue">${ime}</li>`;
            }
        })
    listaString += "</ul>";
    document.body.innerHTML += listaString;


paragrafi.forEach((p,i)=>

{
    if(i%2 == 1)
    {
        p.classList.add(`error`)
    }
    else
    {
        p.classList.add(`sucess`)
    }
});

paragrafi.forEach((p,i,)=>
    {
        if(i%3 == 1)
        {
            p.style.fontSize = '15px';
        }
        else if(i%3 == 2)
        {
            p.style.fontSize = '20px';
        }
        else 
        {
            p.style.fontSize = '25px';
        }
    });

    paragrafi.forEach(p=>
        {
            if(p.includes('error'))
            {
                p.classList.add(`error`)
            }
        });