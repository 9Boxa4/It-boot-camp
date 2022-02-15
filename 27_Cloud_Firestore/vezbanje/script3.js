// 1)pristupanje konkretnom dokumentu u kolekciji
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije


//1)
db.collection(`customers`)
.doc(`customer1.1`)
.get()
.then(doc=>
    {
        if(doc.exists)
        {
            console.log(`postoji dokument ${doc.id}`);
            let obj = doc.data();
            console.log(obj);
        }
        else
        {
            console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokument ${err}`);
    });
    // Polja: doc.id(string), doc.exists (boolean)
    //Metoda: doc.data(); koja ce da pretvori dokument u JS objekat


//2)

db.collection(`customers`)
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    console.log(doc.id, doc.data());
                });
        }
        else
        {
            console.log(`Nema dokumenata u kolekciji`);
        }
        // console.log(snapshot);
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
    });



    //1) Dohvatanje dokumenata u odredjenom redosledu
    //2) Dohvatanje odredjenog broja dokumenata iz kolekcije
    //3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)



    //1)
            db.collection(`customers`)
            .orderBy(`age`, "desc")
            .orderBy(`name`)
            .get()
            .then(snapshot=>
                {
                    if(!snapshot.empty)
                    {
                        let allDocs = snapshot.docs;
                        allDocs.forEach(doc => 
                            {
                                let obj =doc.data();
                                console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                            });
                    }
                    else
                    {
                        console.log(`Nema dokumenata u kolekciji`);
                    }
                    // console.log(snapshot);
                })
            .catch(err=>
                {
                    console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
                });
    //2)
   
   
    db.collection(`customers`)
    .limit(1) // limit moze ispod orderBy()
    .orderBy(`age`, "desc")
    .orderBy(`name`)
    .orderBy(`salary`,`desc`)
    .get()
    .then(snapshot=>
        {
            if(!snapshot.empty)
            {
                let allDocs = snapshot.docs;
                allDocs.forEach(doc => 
                    {
                        let obj =doc.data();
                        console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                    });
            }
            else
            {
                console.log(`Nema dokumenata u kolekciji`);
            }
            // console.log(snapshot);
        })
    .catch(err=>
        {
            console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
        });


    //3)

    db.collection(`customers`)
    // .limit(1) // limit moze ispod orderBy()
    // .orderBy(`age`, "desc")
    // .orderBy(`name`)
    // .orderBy(`salary`,`desc`)
    .where(`age`, `<=`, 35)
    // .where(`salary`, `==`, 752) // treba da se napravi index u ovom slucaju
    // .orderBy(`age`, `desc`)
    // .orderBy(`name`)
    // .limit(2)
    .get()
    .then(snapshot=>
        {
            if(!snapshot.empty)
            {
                let allDocs = snapshot.docs;
                allDocs.forEach(doc => 
                    {
                        let obj =doc.data();
                        console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                    });
            }
            else
            {
                console.log(`Nema dokumenata u kolekciji`);
            }
            // console.log(snapshot);
        })
    .catch(err=>
        {
            console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
        });



      

        /////////////////////////////////////////////////////////////////
        //                      zadaci                                 //


        
    db.collection(`customers`)
    .orderBy(`name`)
    .get()
    .then(snapshot=>
        {
            if(!snapshot.empty)
            {
                let allDocs = snapshot.docs;
                allDocs.forEach(doc => 
                    {
                        let obj =doc.data();
                        console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                    });
            }
            else
            {
                console.log(`Nema dokumenata u kolekciji`);
            }
        })
    .catch(err=>
        {
            console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
        });
        //////////////////////////////////////////////////////////////////
        db.collection(`customers`)
        .where(`addresses`, `array-contains`, `Nis`)
        .get()
        .then(snapshot=>
            {
                if(!snapshot.empty)
                {
                    let allDocs = snapshot.docs;
                    allDocs.forEach(doc => 
                        {
                            let obj =doc.data();
                            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                        });
                }
                else
                {
                    console.log(`Nema dokumenata u kolekciji`);
                }
            })
        .catch(err=>
            {
                console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
            });


            db.collection(`customers`)
            .where(`salary`, `>=`, 500)
            .get()
            .then(snapshot=>
                {
                    if(!snapshot.empty)
                    {
                        let allDocs = snapshot.docs;
                        allDocs.forEach(doc => 
                            {
                                let obj =doc.data();
                                console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                            });
                    }
                    else
                    {
                        console.log(`Nema dokumenata u kolekciji`);
                    }
                })
            .catch(err=>
                {
                    console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
                });
                
                db.collection(`customers`)
                .where(`salary`, `>=`, 300)
                .where(`salary`, `<=`, 800)
                .get()
                .then(snapshot=>
                    {
                        if(!snapshot.empty)
                        {
                            let allDocs = snapshot.docs;
                            allDocs.forEach(doc => 
                                {
                                    let obj =doc.data();
                                    console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                });
                        }
                        else
                        {
                            console.log(`Nema dokumenata u kolekciji`);
                        }
                    })
                .catch(err=>
                    {
                        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
                    });

                    db.collection(`customers`)
                    .where(`salary`, `<=`, 900)
                    .where(`age`, `==`, 30)
                    .get()
                    .then(snapshot=>
                        {
                            if(!snapshot.empty)
                            {
                                let allDocs = snapshot.docs;
                                allDocs.forEach(doc => 
                                    {
                                        let obj =doc.data();
                                        console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                    });
                            }
                            else
                            {
                                console.log(`Nema dokumenata u kolekciji`);
                            }
                        })
                    .catch(err=>
                        {
                            console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
                        });


                        db.collection(`customers`)
                        .where(`addresses`, `array-contains-any`, ["Beograd","Nis"])
                        // .where(`addresses`, `in`, `Beograd`)
                        .get()
                        .then(snapshot=>
                            {
                                if(!snapshot.empty)
                                {
                                    let allDocs = snapshot.docs;
                                    allDocs.forEach(doc => 
                                        {
                                            let obj =doc.data();
                                            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                        });
                                }
                                else
                                {
                                    console.log(`Nema dokumenata u kolekciji`);
                                }
                            })
                        .catch(err=>
                            {
                                console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
                            });

                            //////////////////////////////////
                        db.collection(`customers`)
                        .where(`age`, `in`, [22,25,28])
                        // .where(`addresses`, `in`, `Beograd`)
                        .get()
                        .then(snapshot=>
                            {
                                if(!snapshot.empty)
                                {
                                    let allDocs = snapshot.docs;
                                    allDocs.forEach(doc => 
                                        {
                                            let obj =doc.data();
                                            console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                        });
                                }
                                else
                                {
                                    console.log(`Nema dokumenata u kolekciji`);
                                }
                            })
                        .catch(err=>
                            {
                                console.log(`Nemoguce dohvatiti dokumenta iz kolekcije ${err}`);
                            });
                                /////////////////////////////////////////









                            db.collection(`tasks`)
                            .orderBy(`title`)
                            .get()
                            .then(snapshot=>
                                {
                                    if(!snapshot.empty)
                                    {
                                        let allDocs = snapshot.docs;
                                        allDocs.forEach(doc => 
                                            {
                                                let obj =doc.data();
                                                // console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                                // console.log(obj);
                                                console.log(`${obj.title}`);
                                            });
                                    }
                                    else
                                    {
                                        console.log(`Nema dokumenata u tasks`);
                                    }
                                })
                            .catch(err=>
                                {
                                    console.log(`Nemoguce dohvatiti dokumenta iz tasks ${err}`);
                                });

                                //////////////////////////////////////
                                
                            db.collection(`tasks`)
                            .where(`priority`, "==", true)
                            .get()
                            .then(snapshot=>
                                {
                                    if(!snapshot.empty)
                                    {
                                        let allDocs = snapshot.docs;
                                        allDocs.forEach(doc => 
                                            {
                                                let obj =doc.data();
                                                // console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                                // console.log(obj);
                                                console.log(`${obj.title}`);
                                            });
                                    }
                                    else
                                    {
                                        console.log(`Nema dokumenata u tasks`);
                                    }
                                })
                            .catch(err=>
                                {
                                    console.log(`Nemoguce dohvatiti dokumenta iz tasks ${err}`);
                                });
                                /////////////////////////////////////////////////////////////////////////////////////
                                let now = new Date();
                                let year = now.getFullYear();
                                let date1 = new Date(year, 0, 1); // 1 januar tekuce godine
                                let date2 = new Date(year+1 ,0 ,1); // 1 januar naredne godine
                                let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
                                let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2)


                                db.collection(`tasks`)
                                .where("due date", ">=", date1Timestamp)
                                .where("due date", "<", date2Timestamp)
                                .get()
                                .then(snapshot=>
                                    {
                                        if(!snapshot.empty)
                                        {
                                            let allDocs = snapshot.docs;
                                            allDocs.forEach(doc => 
                                                {
                                                    let obj =doc.data();
                                                    // console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                                                    // console.log(obj);
                                                    // console.log(`${obj.title}`);
                                                    console.log(obj);
                                                });
                                        }
                                        else
                                        {
                                            console.log(`Nema dokumenata u tasks`);
                                        }
                                    })
                                .catch(err=>
                                    {
                                        console.log(`Nemoguce dohvatiti dokumenta iz tasks ${err}`);
                                    });
                                    
/////////////////////////////////////////////////////////////////
// let now = new Date();
let date11Timestamp = firebase.firestore.Timestamp.fromDate(now)

db.collection(`tasks`)
.where("due date", "<=", date11Timestamp)
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    // console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                    // console.log(obj);
                    // console.log(`${obj.title}`);
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u tasks`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz tasks ${err}`);
    });

    //////////////////////////////////////////////////////////////////////

    // let date12Timestamp = 

    db.collection(`tasks`)
.where("due date", "<=", date11Timestamp)
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    // console.log(`${obj.name} ${obj.age} ${obj.salary}`);
                    // console.log(obj);
                    // console.log(`${obj.title}`);
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u tasks`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz tasks ${err}`);
    });