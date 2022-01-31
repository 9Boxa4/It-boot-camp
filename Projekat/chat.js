class Chatroom {
    constructor(r, us) {
        this.room = r;
        this.username = us;
        this.chats = db.collection(`chats`);
    }
    // kreiranje getter i setter


    set room(r) {
        this._room = r
    }

    get room() {
        return this._room;
    }

    //username setter i getter

    set username(us) {
        let tr = us.trim().replace(/\S/g, "").length

        if (tr <= 0 && us.length >= 2 && us.length <= 10) {
            this._username = us;
        }
        else {
            alert(`Nevalidan unos, ne smete stavljati razmake`)
        }
    }

    get username() {
        return this._username;
    }
    // chat 
    // let sendPor = document.querySelector(`#poruka`)


}


// duzina username-a treba da bude izmedju 2-10 (mora samo od karaktera i brojeva , ali ne sme praznine i tabove, ako ima greska mora poruka)

// za chats ima specificnost  da dobija vrednost chatova iz baze

export default Chatroom;