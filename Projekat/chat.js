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
    //      metoda za dodavanje poruke
    async addChat(poruka) {
        let date = new Date();
        // let dateTS = firebase.firestore.Timestamp.fromDate(date)
        let obj =
        {
            message: poruka,
            username: this._username,
            room: this._room,
            createdAt: firebase.firestore.Timestamp.fromDate(date)
        }

        //da sacuvam dokument u db
        let response = await this.chats.add(obj);
        return response; // vracam promise i mogu za njega da kazem . then i . catch

        // this.chats
        //     .add(obj)
        //     .then(() => {
        //         console.log(`uspesno dodat chat`);
        //     })
        //     .catch(err => {
        //         console.log(`Doslo je do greske ${err}`);
        //     })
    }

    // getChats(callback)
    // {
    //     this.chats
    //     .onSnapshot(snapshot=>
    //         {

    //         })
}
}
export default Chatroom;

// let random = new Chatroom(`JS`, `Miki`);
// random.addChat(`porukica`)