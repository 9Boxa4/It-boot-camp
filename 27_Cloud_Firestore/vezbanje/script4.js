let filmovi = db.collection(`movies`);

filmovi
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
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

    /////////////////////////////////////////////////////////////////////////
    filmovi
.where(`director.name`, "==","George")
.where(`director.surname`, "==", "Lucas")
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u movies`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz movies ${err}`);
    });

    /////////////////////////////////////////////////////////////////
    filmovi
    .where(`rating`, ">",4)
    .where(`rating`, "<=", 10)
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u movies`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz movies ${err}`);
    });

    //////////////////////////////////////////////////////////////////
    filmovi
    .where(`genres`,"array-contains-any",["comedy","tragedy","drama"])
    
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u movies`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz movies ${err}`);
    });

    /////////////////////////////////////////////////////////////////////
    filmovi
    .where(`release_year`,">",2000) 
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u movies`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz movies ${err}`);
    });
    ////////////////////////////////////////////////////////////////
    filmovi
    // .where(`rating`,">",9)
    .orderBy("rating","desc")
    .limit(1)
.get()
.then(snapshot=>
    {
        if(!snapshot.empty)
        {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => 
                {
                    let obj =doc.data();
                    console.log(obj);
                });
        }
        else
        {
            console.log(`Nema dokumenata u movies`);
        }
    })
.catch(err=>
    {
        console.log(`Nemoguce dohvatiti dokumenta iz movies ${err}`);
    });

    