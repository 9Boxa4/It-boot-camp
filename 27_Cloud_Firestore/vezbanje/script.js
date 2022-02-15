//db je objekat "baze", njega vucemo id html fajla
// console.log(db);

//pristupanje kolekciji
let customers = db.collection(`customers`)
// console.log(customers);

//pristupanje dokumentu

let doc1 = customers.doc(`customer1.1`)
console.log(doc1);


//drugi nacin
let doc2 = db.collection(`tasks`).doc(`task1`);
console.log(doc2);

// za prisup dokumentu:
//db.collection(`...`).doc(`...`)
//kod dokumenata imamo sledece operacije
//CRUD (create,read,update,delete)
/*
create: doc.set(...)
read : doc.get(...)
update: doc.update(...)
delete: doc.delete(...)

sve ove 4 operacije kao rezultat vracaju Promise
sto znaci nakon njih lancamo .then() i .catch();
*/

let obj = 
{
    name: "Pera",
    age: 22,
    addresses: [`Nis`,`Leskovac`],
    salary: 299.99
};


db.collection(`customers`)
.doc(`customer4`)
.set(obj)
.then(()=>
{
    console.log(`Dodat nov dokument u kolekciju customers`);
})
// ne treba return, cisto vizuelno sta ce da dodje, asinhroni su
 db.collection(`customers`)
 .doc(`customer4`)
 .set(
    {height:180},
    {merge:true}
    )
.then(()=>
{
    console.log(`Spojen dokument  customer4 u kolekciju customers`);
})
.catch(err=>
{
    console.log(`Doslo je do greske: ${err}`);
});
//spajanje dokumenta je ispod

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");
let obj2 = 
{
    title:"Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority:false,
    description: "fudbal sa drugarima iz ITBottCampa"
}

db.collection('tasks')
.doc(`task2`)
.set(obj2)
.then(()=>
    {
        console.log(`Uspesno dodat task!`);
    })
.catch(err=>
    {
        console.log(`Doslo je do greske: ${err}`);
    })

    

    // UPDATE

    db.collection(`tasks`)
    .doc(`task2`)
    .update(
        {
        priority:true
    })
    .then(()=>
    {
        console.log(`uspesno promenjeno polje u dokumentu`);
    })
    .catch((err)=>
    {
        console.log(`Greska priliko menjanja dokumenta ${err}`);
    })


    //DELETE
    db.collection(`customers`)
    .doc(`customer4`)
    .delete()
    .then(()=>
    {
        console.log(`Uspesno izbrisan dokument`);
    })
    .catch(err=>
        {
            console.log(`Greska prilikom brisanja ${err}`);
        })


        //////////////////////////////////////////

        // db.colletion(`tasks`)
        // .add(
        //     {
        //     title: "Vezba za projekat",
        //     description: "vezbanje Javascripta",
        //     start_date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
        //     due_date:null,
        //     priority: true
        // })
        // .then(()=>
        // {
        //     console.log(`Uspesno dodat zadatak u kolekciju tasks`);
        // })
        // .catch(err=>
        // {
        //     console.log(`Desila se greska ${err}`);
        // })


        /* 
        db.collection(`...`).add <=> db.collection(`...`).doc().set() - dodaje novi dokument sa random generisanim ID-em

        db.collection(`...`). doc()
        */
