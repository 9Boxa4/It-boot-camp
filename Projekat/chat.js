class Chatroom {
    constructor(r, us) {
        this.room = r;
        this.username = us;
        this.chats = db.collection(`chats`);
        this.unsub = false; // Odredili smo da false bude kao signal da je stranica 1. put ucitana
    }
    
    // kreiranje getter i setter za room
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
            alert(`Nevalidan unos, ne smete stavljati razmake ili prazan username`)
        }
    }
    // setter i getter u username
    get username() {
        return this._username;
    }

    roomUpdate(ur)
    {
        this.room = ur;
        if(this.unsub != false)
        {
            // unsub vise nije false, nego je u getChats postalo funkcija
            this.unsub(); //unsub je sada funkcija i pozivam je sa zagradama
        }
    }

    //      metoda za dodavanje poruke
    async addChat(msg) 
    {
        let date = new Date();
        let emptyMsg = msg.trim().length;
        let response; 
        if(emptyMsg >= msg)
        {
            alert(`Ne mozete staviti praznu poruku u addChat`)
        }
        else
        {
            let obj =
            {
                message: msg,
                username: this._username,
                room: this._room,
                createdAt: firebase.firestore.Timestamp.fromDate(date) 
            }
             response = await this.chats.add(obj);
        }
        //da sacuvam dokument u db
        return response; 
    }

    //Metod koji prati promene u bazi i vraca poruke
    getChats(callback) 
    {
        this.unsub = this.chats
            .where(`room`, `==`, this.room)
            .orderBy("createdAt")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    
                    let id= change.doc.id
                    if (change.type == "added") 
                    {
                        callback(change.doc.data(),id); 
                    }
                })
            })
    }

    //metoda brisanja iz baze podataka
    async deleteChat(id)
    {
       return await this.chats.doc(id).delete()
    }
}
export default Chatroom;


