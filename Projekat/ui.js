class ChatUI
{
    constructor(ul)
    {
        this.lista = ul
    }

    set lista(ul)
    {
        this._lista = ul
    }

    get lista()
    {
        return this._lista;
    }

    // templateLI(data)
    // {
    //     let li = document.createElement(`li`);
    //     li.innerHTML = data();
    //     this.lista.appendChild(li)
    // }


    formating(data)
    {
        let formatDan = data.getDay()
        let formatMesec= data.getMonth()+1;
        let formatGodina = data.getFullYear();
        let formatSati = data.getHours();
        let formatMinuti= data.getMinutes();
        return `${formatDan}-${formatMesec}- ${formatGodina} ${formatSati} : ${formatMinuti}`;
    }
    
    templateLi(data)
    {
       let htmlLi =
        `<li>
            ${data.username} : ${data.message} <br> ${this.formating(data.createdAt.toDate())} 
        </li>`;

        this.lista.innerHTML += htmlLi;

    }

 
}


export  default ChatUI;