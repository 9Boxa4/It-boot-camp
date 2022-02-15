let movies = db.collection(`movies`);


let movie2 = 
{
    name: "Jumanji",
    director: {name:"Jonny", surname: "Johnston"},
    release_year: 1995,
    genres: [`adventure`,`fantasy`],
    rating: 9.5
}
let movie3 = 
{
    name: "Godfather",
    director: {name:"Francis", surname: "Coppola"},
    release_year: 2007,
    genres: [`crime`,`drama`],
    rating: 9.0
}



db.collection(`movies`)
.doc(`movie2`)
.set(movie2)
.then(()=>
{
    console.log(`Dodat je objekat valjda radi`);
})
db.collection(`movies`)
.doc(`movie2`)
.update(
    {
        "director.name" : "Joe",
        rating: 9.6
    })
.then(()=>
{
    console.log(`Uspesno promenjeno ime Rezisera`);
})
db.collection(`movies`)
.doc(`movie3`)
.set(movie3)
.then(()=>
{
    console.log(`Dodat je objekat valjda radi`);
})
db.collection(`movies`)
.doc(`movie3`)
.update(
 { 
     release_year: 1972,
    genres: firebase.firestore.FieldValue.arrayUnion(`comedy`)
 }
)
.then(()=>
{
    console.log(`uspesna promena`);
})
db.collection(`movies`)
.doc(`movie1`)
.update({
    genres: firebase.firestore.FieldValue.arrayRemove(`adventure`)
})
.then(()=>
{
    console.log(`uspesno uklonjen zanr iz movie1`);
})
.catch(err=>
    console.log(`doslo je do greske ${err}`)
)







