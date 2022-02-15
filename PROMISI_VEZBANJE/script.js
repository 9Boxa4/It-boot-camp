let divOrder = document.querySelector(`#order`);
let formOrder = document.querySelector(`#order form`);
let inputOrder = document.querySelector(`#capacity`);

let div2 = document.querySelector(`#div2`);
let form2 = document.querySelector(`#div2 form`);
let nazivProizvoda = document.querySelector(`#nazivP`)
let inputCena1= document.querySelector(`#inputCena1`);
let inputCena2= document.querySelector(`#inputCena2`)

function getItem(resurs,resolve,reject)
{
    let req = new XMLHttpRequest();
    req.addEventListener(`readystatechange`, function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            //sve ok
            let data = JSON.parse(this.responseText)
            resolve(data)
        }
        else if(this.readyState === 4)
        {
            //desila se greska
            reject(`Cannot fetch data`);
        }
    });
    req.open("GET", resurs);
    req.send();
}

function submitForm1(event)
{
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids=[];
 getItem (`./JSON/stock.json`, (data)=>
 {
     data.forEach(item => 
        {
            if(item.stock <= 0)
            {
                ids.push(item.id);
            }
        });
    console.log(data);
 }, (msg)=> {console.log(msg);})
 getItem (`./JSON/weights.json`, (data)=>
 {
     let  totalWeight = 0;
     data.forEach(item=>
        {
            if(ids.includes(item.id))
        {
            totalWeight += item.weight
        }
        })
        console.log(`Ukupna tezina proizvoda koji treba da se naruce je ${totalWeight}`);
        if(totalWeight > capacity)
        {
            
            let par = document.createElement(`p`);
            par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona`;
            par.style.color = 'red';
            par.style.fontSize = '2rem';
            par.style.fornWeight= "bold";
            divOrder.appendChild(par);
        }
        else
        {
            getItem (`./JSON/prices.json`, (data)=>
            {
                let totalPrice =0;
                data.forEach(item=>
                    {
                        if(ids.includes(item.id))
                        {
                            totalPrice += item.price;
                        }
                    })
                    let par = document.createElement(`p`);
                    par.innerHTML = `Ukupna cena porudzbine je ${totalPrice}`;
                    par.style.color = 'green';
                    par.style.fontSize = '2rem';
                    par.style.fornWeight= "bold";
                    divOrder.appendChild(par);
            }, (msg)=> {console.log(msg);});
           
           
        }
 }, (msg)=> {console.log(msg);})

}

//1. ideja: getItem() da se pozove jedan za drugim
//getItem("json/stock.json")
//getItem("json/weights.json")
//getItem (json/prices.json)
//NETACNA IDEJA jer je svaki getItem asinhrom poziv, sto znaci da ne mora weights.json da se dohvati pre stock. json  (slicno i za prices.json)

//2, ideja : Redosled asinhronih poziva odvija se preko callback funkcija, TACNA IFEJA, ali neprakticna (callback hell);

//3 ideja: Redosled asinhronih poziva odvija preko promis-a

function getItemReturnPromise(resurs)
{
    return new Promise((resolve,reject)=>
    {
        let req = new XMLHttpRequest();
        req.addEventListener(`readystatechange`, function()
        {
            if(req.readyState === 4 && req.status === 200)
            {
                //sve ok
                let data = JSON.parse(req.responseText)
                resolve(data)
            }
            else if(req.readyState === 4)
            {
                //desila se greska
                reject(`Cannot fetch data`);
            }
        });
        req.open("GET", resurs);
        req.send();
    })

}

function submitForm2(event)
{
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids=[];
    getItemReturnPromise(`JSON/stock.json`)
    .then((data)=>
    {
        data.forEach(item=>
            {
                if(item.stock <= 0)
                {
                    ids.push(item.id);
                }
            })
            return getItemReturnPromise(`JSON/weights.json`);
    })
    .then((data)=>
    {
        let totalWeight=0;
        data.forEach(item=>
            {
                if(ids.includes(item.id))
                {
                    totalWeight += item.weight
                }
            })
            if(totalWeight > capacity)
            {
                let par = document.createElement(`p`);
            par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona`;
            par.style.color = 'red';
            par.style.fontSize = '2rem';
            par.style.fornWeight= "bold";
            divOrder.appendChild(par);
            }
            else
            {
                return getItemReturnPromise(`JSON/prices.json`);
            }
            
    })
    .then((data)=>
    {
        if(data !== undefined)
        {
            let totalPrice =0;
            data.forEach(item=>
                {
                    if(ids.includes(item.id))
                    {
                        totalPrice += item.price;
                    }
                })
                    let par = document.createElement(`p`);
                    par.innerHTML = `Ukupna cena porudzbine je ${totalPrice}`;
                    par.style.color = 'green';
                    par.style.fontSize = '2rem';
                    par.style.fornWeight= "bold";
                    divO
                    rder.appendChild(par);
        }
        // let tabela = document.createElement(`table`)
        // let tr1 = document.createElement(`tr`);
        // let tr2 = document.createElement(`tr`);
        // // let tr1 ;
        // // let tr2 ;
        
        // let ukupno =0;
        // data.forEach(proizvod=>
        //     {
        //         ukupno += proizvod.price
        //     //     tr1=document.createElement(`tr`);
        //     //    tr2= document.createElement(`tr`);
        //         tr1.textContent= `<td>${proizvod.item} </td><td>${proizvod.price}</td>`;
        //         tr2.textContent=`<th>Ukupno</th><td>${ukupno}</td>`; 
        //     })
        //     tabela.appendChild(tr1);
        //     tabela.appendChild(tr2);
        //     divOrder.appendChild(tabela);
            
    })
    .catch((msg)=>
    {
        console.log(msg);
    });

}
    // formOrder.addEventListener(`submit`, submitForm1)
// formOrder.addEventListener(`submit`, submitForm2)



function submitForm3(event) 
{
    event.preventDefault();
    let stanje =[];
    let naziv = nazivProizvoda.value;
    getItemReturnPromise(`JSON/stock.json`)
    .then(data=>
    {
        data.forEach(proizvod=>
            {
                if(proizvod.stock > 0)
                {
                    stanje.push(proizvod.Item)
                }
            })
            
        data.forEach(proizvod=>
            {
                if(stanje.includes(naziv)  )
                {
                    console.log(proizvod.Item);
                }
            })
    })
    .catch();

}

form2.addEventListener(`submit`,submitForm3)










////////////////////////////////////////
//              STEFANOVA DEMONSTRACIJA

async function clickGetItems()
{
    let naziv = nazivProizvoda.value;
    let cenaMin = inputCena1.value;
    let cenaMax = inputCena2.value;
    let data1 = await getItemReturnPromise(`JSON/stock.json`);
    let artikliNaStanju = [];
    data1.forEach(item=>
        {
            if(item.stock > 0)
            {
                artikliNaStanju.push(item.id)
            }
        });
        let data2 = await getItemReturnPromise(`JSON/prices.json`);
        let tabela = document.createElement(`table`);
        data2.forEach(item =>
            {
                if(artikliNaStanju.includes(item.id) && item.item.includes(naziv) && item.price >= cenaMin && item.price <= cenaMax)
                {
                    let tr = document.createElement(`tr`);
                    let td1 = document.createElement(`td`);
                    let td2 = document.createElement(`td`);
                    td1.innerHTML = item.item;
                    td2.innerHTML = item.price;
                    tabela.appendChild(tr)
                }
            })
    return tabela;
}


function akcija (event)
{
    event.preventDefault();
   clickGetItems()
   .then(data =>
    {
        div2.appendChild(data)
    })
   .catch(err=>
    {
        console.log(err);
    })
}

form2.addEventListener(`submit`,akcija)