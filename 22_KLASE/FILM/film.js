export class film
{
    constructor(n,rez, god, o)
    {
        this.naslov=n;
        this.reziser =rez;
        this.godIzdanja = god;
        this.ocena=o;
    }

    stampaj()
    {
        // console.log(`${this.naslov} je naslov filma`);
        console.log(this);
    }
    set naslov(n)
    {
        this._naslov =n
    }
    get naslov()
    {
        return this._naslov;
    }

    // reziser

    set reziser(rez)
    {
        this._reziser = rez;
    }
    get reziser()
    {
        return this._reziser;
    }


    //godina izdanja
    set godinaIzdanja(god)
    {
        if(god>1800 && god <2023 )
        {
            this._godIzdanja=god
        }
        else
        {
            this._godIzdanja = 1800;
        }
    }
    get godinaIzdanja()
    {
        return this._godIzdanja;
    }
    
    // ocene
    set ocena(o)
    {
        this._ocena = o;
    }
    get ocena()
    {
        return this._ocena;
    }

    //dodaavaljen jedne ocene
    dodajOcenu(novaOcena)
    {
        this._ocena.push(novaOcena)
    }

    //prosek
    prosek()
    {
        let zbir=0;
        let br=0;
        this._ocena.forEach(oc => 
            {
                zbir += oc;
                br++;
            });
            return zbir/br;
    }
  
}

// export default film;