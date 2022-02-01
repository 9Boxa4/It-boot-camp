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

    templateLI(poruka)
    {
        let li = document.createElement(`li`);
        li.innerHTML = `${poruka}`
        this.lista.appendChild(li)
    }
}


export  default ChatUI;