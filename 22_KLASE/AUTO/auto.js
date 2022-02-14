class auto 
{
    constructor(m,b,ik, bv =5) // bv je default vrednost
    {
        // let m1 = m.trim(); // skracuje space-eve
        // if(m1.length > 0)
        // {
        //     this._marka = m1
        // }
        // else
        // {
        //     this._marka = `Auto`;
        // }
        // this._marka = m;

        // this.postaviMarku(m);
        this.boja= b; // poziva se seter boja
        this.imaKrov = ik; // poziva se seter imaKrov
        this.brojVrata = bv; // poziva se seter brojVrata
        this.marka = m; //poziva se seter marka
    }
    sviraj()
{
    console.log(`Beep! Beep!`);
}
vozi (x)
{
    // let m= this._marka
    console.log(` ${this.marka} vozi ${x} km `);
}

stampaj()
{
    console.log(`Auto marke: ${this.marka}, boje: ${this.boja}, ima krov - ${this.imaKrov}`);
}

//setter i getter za polje _marka

//metoda koja postavlja vrednost polja _marka
 set marka(m)
{
    let m1 = m.trim(); // skracuje space-eve
    if(m1.length > 0)
    {
        this._marka = m1
    }
    else
    {
        this._marka = `Auto`;
    }
}
// metoda koja cita vrednost polja
dohvatiMarku()
{
    return this._marka
}

get marka()
{
    return this._marka;
}


//seter i geter za polje _boja
set boja(b)
{
    this._boja =b
}

get boja()
{
    return this._boja;
}

// seter i get za imaKrov
set imaKrov(ik)
{
    if(ik === true || ik === false)
    {
        this._imaKrov = ik
    }
    else
    {
        this._imaKrov = false;
    }
}

get imaKrov()
{
    return this._imaKrov;
}

// seter i geter za polja brojVrata

set brojVrata(bv)
{
    if(bv > 0 )
    {
        this._brojVrata = bv;
    }
    else
    {
        this._brojVrata = 1;
    }
}

get brojVrata()
{
    return this._brojVrata;
}

}

export default auto;





// moze obicne metode ali vizuelno nije lepo

// sviraj()
// {
//     console.log(`Beep! Beep!`);
// }
// vozi (x)
// {
//     // let m= this._marka
//     console.log(` ${this._marka} vozi ${x} km `);
// }
// //metoda koja postavlja vrednost polja _marka
// postaviMarku(m)
// {
//     let m1 = m.trim(); // skracuje space-eve
//     if(m1.length > 0)
//     {
//         this._marka = m1
//     }
//     else
//     {
//         this._marka = `Auto`;
//     }
// }
// // metoda koja cita vrednost polja
// dohvatiMarku()
// {
//     return this._marka
// }



