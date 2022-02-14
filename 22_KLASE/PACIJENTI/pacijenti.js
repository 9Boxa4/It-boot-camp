class pacijent 
{
    constructor(i,v,t)
    {
        this.ime =i;
        this.visina=v;
        this.tezina=t;
    }
    //getter i setter za ime
    set ime(i)
    {
        this._ime = i
    }
    get ime()
    {
       return this._ime;
    }
    //setter i getter za visinu
    set visina(v)
    {
      
        if(v>0 && v<2.51)
        {
            this._visina = v
        }
        else
        {
            this._visina = 1.82;
        }
    }
    get visina()
    {
        return this._visina;
    }
    //getter i setter za tezinu

    set tezina(t)
    {
        if(t>0 && t<551)
        {
            this._tezina = t
        }
        else
        {
            this._tezina = 82;
        }  
    }
    get tezina()
    {
        return this._tezina;
    }

    //metode

    stampaj()
    {
        // console.log(`Pacijent se zove ${this.ime}, visok je ${this.visina}, a tezak je ${this.tezina} `);
        console.log(this);
    }
    stampajListu()
    {
        let htmlLista =
        `<ul>
        <li>Ime: ${this.ime}</li>
        <li>Visina:${this.visina}</li>
        <li>Tezina:${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }

    BMI()
    {
        let BMI=0;
        BMI = this.tezina/(this.visina**2);
        return BMI;
    }
    kritican ()
    {
        let x = false;
        if(this.BMI() >15 || this.BMI()>40)
        {
            x = true;
        }
        else
        {
            x = false;
        }
        return x;
    }
}

export default pacijent;