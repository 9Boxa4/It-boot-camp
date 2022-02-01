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
    templateLi(data)
    {
        let htmlLi =
        `<li>
            ${data.username} : ${data.message} <br> ${data.createdAt}
        </li>`;

        this.lista.innerHTML += htmlLi;


    }
}


export  default ChatUI;