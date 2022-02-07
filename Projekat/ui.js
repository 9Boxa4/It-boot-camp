class ChatUI
{
    constructor(ul)
    {
        this.lista = ul
    }

//setter i getter za ul listu
    set lista(ul)
    {
        this._lista = ul
    }

    get lista()
    {
        return this._lista;
    }

    formating(data)
    {
        let day = data.getDate();
        let month= data.getMonth()+1;
        let year = data.getFullYear();
        let hours = data.getHours();
        let minutes= data.getMinutes();
        let danas = new Date();

        day = String(day).padStart(2,"0") 
        month = String(month).padStart(2,"0") 
        hours = String(hours).padStart(2,"0") 
        minutes = String(minutes).padStart(2,"0") 

         if(day ==  String(danas.getDate()).padStart(2,"0") && month == String(danas.getMonth()+1).padStart(2,"0") && year == danas.getFullYear())
         {
            return `${hours} : ${minutes}`;
         }
         else
         {
             return `${day}.${month}.${year} ${hours} : ${minutes}`;
         }
        
    }
    // metoda za pravljenje list itema za ispisivanje poruka
    templateLi(data,id)
    {
            let style = "float:left; background-color:pink";
            if(data.username == localStorage.username)
            {
                style = "float:right "
            }
                let htmlLi =
                `<li id="${id}" style=" ${style}">
                    ${data.username} : ${data.message} <br> ${this.formating(data.createdAt.toDate())} <span class="trash">🗑</span> 
                </li>`;
        this.lista.innerHTML += htmlLi;

    }
    //metoda za brisanje poruke sa stranice
    clear()
    {
        this.lista.innerHTML= "";
    }
}
export  default ChatUI;